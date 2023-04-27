import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Home = () => {
  const country = {
    region: 'Nakuru',
    confirmed: 3666577,
  };
  return <div>
    <h1>{country.region}</h1>
  <p>{country.confirmed}</p>
  </div>;
};

describe('Home', () => {
  test('renders region text', () => {
    render(<Home />);
    expect(screen.getByText('Nakuru')).toBeInTheDocument();
    expect(screen.getByText('3666577')).toBeInTheDocument();
  });
});
