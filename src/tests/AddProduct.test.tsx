import { render, screen } from '@testing-library/react';
import AddProduct from '../components/AddProduct';
import '@testing-library/jest-dom'

test('Add Product page render', () => {
  render(<AddProduct />);
  const linkElement = screen.getByText(/Create Product/i);
  expect(linkElement).toBeInTheDocument();
});
