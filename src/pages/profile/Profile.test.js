import { render, screen } from '@testing-library/react';
import Profile from './Profile';

test('renders learn react link', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/raiting/i);
  expect(linkElement).toBeInTheDocument();
});
