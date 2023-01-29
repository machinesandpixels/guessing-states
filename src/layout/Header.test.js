import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
    render(<Header />);
    const header = screen.getByText('Guessing States');
    expect(header).toBeInTheDocument();
  });