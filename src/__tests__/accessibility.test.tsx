import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Care from '../components/CarePage';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import History from '../components/History';
import ImageGallery from '../components/ImageGallery';
import LandingPage from '../components/LandingPage';
import Navbar from '../components/Navbar';
import { configureAxe, toHaveNoViolations } from 'jest-axe';

const axe = configureAxe({
  impactLevels: ['minor', 'moderate', 'serious', 'critical'],
});

expect.extend(toHaveNoViolations);

test('About should have no accessibility violations', async () => {
  const { container } = render(<About />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Care should have no accessibility violations', async () => {
  const { container } = render(<Care />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Contact should have no accessibility violations', async () => {
  const { container } = render(<Contact />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Footer should have no accessibility violations', async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('History should have no accessibility violations', async () => {
  const { container } = render(<History />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('ImageGallery should have no accessibility violations', async () => {
  const { container } = render(<ImageGallery />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Landing should have no accessibility violations', async () => {
  const { container } = render(<LandingPage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Navbar should have no accessibility violations', async () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
