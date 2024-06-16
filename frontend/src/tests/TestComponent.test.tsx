import { TestComponent } from '@src/TestComponent';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TestComponent', () => {
  it('renders the component and checks for content', () => {
    // Render the TestComponent
    render(<TestComponent />);
    // Check if the component renders the expected content
    expect(screen.getByText('Example Component')).toBeInTheDocument();
  });
});