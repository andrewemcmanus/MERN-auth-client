import { render, screen } from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render the Welcome header', () => {
  render(<Welcome />);
  const h1Element = screen.getByText(/Welcome/i);
  expect(h1Element).toBeInTheDocument();
})
