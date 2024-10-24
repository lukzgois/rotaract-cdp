<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// });

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store'])
        ->name('login.store');

});

Route::middleware('auth')->group(function () {
    Route::redirect('/', 'dashboard');

    Route::get('dashboard', function () {
        return Inertia::render('welcome');
    })->name('dashboard');

    Route::match(['get', 'delete'], 'logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('login.destroy');
});
