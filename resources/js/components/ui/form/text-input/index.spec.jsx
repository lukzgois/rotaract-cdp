import Input from '.'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('UI/Form/TextInput', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Rendering', () => {
    it('renders an input', () => {
      render(<Input data-testid="input" />)

      expect(screen.getByTestId('input').tagName).toBe('INPUT')
    })
  })

  describe('Props', () => {
    it('allows us to append/override classes', () => {
      render(<Input placeholder="test" className="animate-spin border-gray-200" />)

      const classes = screen.getByPlaceholderText("test").classList

      expect(classes).toContain('animate-spin', 'border', 'border-gray-200')
      expect(classes).not.toContain('border-gray-300')
    })

    it('accepts the type prop', () => {
      render(<Input type="email" placeholder="test" />)

      expect(screen.getByPlaceholderText("test").type).toBe('email')
    })

    it('handle onChange events', async () => {
      const mock = vi.fn()
      const user = userEvent.setup()
      render(<Input onChange={mock} placeholder="test" />)

      await user.type(screen.getByPlaceholderText("test"), 'some input')

      expect(mock).toHaveBeenCalled()
    })
  })

  describe('Error state', () => {
    it('defaults to false', () => {
      render(<Input data-testid="input" />)

      expect(screen.getByTestId("input").classList).not.toContain('bg-red-50')
    })

    it('changes the input appearance', () => {
      render(<Input data-testid="input" error={true} />)

      expect(screen.getByTestId("input").classList).toContain('bg-red-50')
    })
  })
});
