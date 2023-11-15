/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CTAButton } from '..';
import '@testing-library/jest-dom';

describe('CTA Button Component', () => {
  it('should render <CTAButton> with innerText.', () => {
    const innerText = 'CTA Button';
    render(<CTAButton className="bg-blue" content={<>innerText</>} onClick={() => {}} />);
    const component = screen.getByText(innerText);

    expect(component).toBeInTheDocument();
    expect(component).toBeVisible();
    expect(component).toHaveTextContent(innerText);
    expect(component).toHaveClass('chakra-button');
  });
});
