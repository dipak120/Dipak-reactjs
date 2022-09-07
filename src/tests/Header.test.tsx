import { render, screen, within } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom'

describe("Text Component" ,() => {
  test('Header page render', () => {
    render(<Header />);
    const linkElement = screen.getByText(/UPayments Store/i);
    expect(linkElement).toBeInTheDocument();
  })
})
