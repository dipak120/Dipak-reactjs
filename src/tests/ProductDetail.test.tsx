import { render, screen } from '@testing-library/react';
import ProductDetail from '../components/ProductDetail';
import '@testing-library/jest-dom'

test('Product Detail page render', () => {
  render(<ProductDetail />);
  const linkElement = screen.getByText(/Description/i);
  expect(linkElement).toBeInTheDocument();
});
