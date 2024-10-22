<?php
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('it renders the login page', function () {
    test()
        ->get('/login')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Auth/Login')
    );
});

test('users can login', function () {
    $user = User::factory()->create();

    $response = test()->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    test()->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

describe('if the user doesnt fill the form', function () {
    test('it does not authenticate', function () {
        test()->post(route('login.store'), [
            'email' => '',
            'password' => '',
        ]);

        test()->assertGuest();
    });

    test('it redirects back with errors', function () {
        test()->get(route('login'));
        test()
            ->followingRedirectS()
            ->post(route('login.store'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Auth/Login')
                ->where('errors.email', 'O campo email é obrigatório.')
                ->where('errors.password', 'O campo senha é obrigatório.')
            );
    });
});

describe('if the user passes an invalid email', function () {
    test('it does not authenticate', function () {
        test()->post(route('login.store'), [
            'email' => 'invalid',
        ]);

        test()->assertGuest();
    });

    test('it redirects back with errors', function () {
        test()->get(route('login'));
        test()
            ->followingRedirectS()
            ->post(route('login.store'), [
                'email' => 'invalid'
            ])
            ->assertInertia(fn (Assert $page) => $page
                ->component('Auth/Login')
                ->where('errors.email', 'O campo email deve ser um endereço de e-mail válido.')
            );
    });
});

describe('given invalid credentials', function () {
    test('users can not authenticate', function () {
        $user = User::factory()->create();

        test()->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        test()->assertGuest();
    });

    test('it redirects back to the login page with the errors', function () {
        $user = User::factory()->create();

        test()->get(route('login'));
        test()
            ->followingRedirects()
            ->post(route('login.store'), [
                'email' => $user->email,
                'password' => 'wrong-password',
            ])
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Auth/Login')
                ->where('errors.email', 'Essas credenciais não foram encontradas em nossos registros.')
            );
    });
});

test('users can logout', function () {
    $user = User::factory()->create();

    $response = test()->actingAs($user)->delete(route('login.destroy'));

    test()->assertGuest();
    $response->assertRedirect('/');
});
