import React from 'react';
import { render } from '@testing-library/react';
import ImageGallery from '../ImageGallery';
import Contact from '../Contact';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('ImageGallery should have no accessibility violations', async () => {
  const { container } = render(<ImageGallery />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});


test('Contact should have no accessibility violations', async () => {
  const { container } = render(<Contact />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});