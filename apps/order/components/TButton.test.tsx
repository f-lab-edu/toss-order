/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { RectangleButton, SquareButton, WideButton } from './TButton';
import '@testing-library/jest-dom';

describe('Button Components', () => {
  it('renders <RectangleButton> correctly.', () => {
    const innerText = '직사각형 버튼';
    render(<RectangleButton color="blue" content={innerText} onClick={() => {}} />);
    const component = screen.getByText(innerText);

    expect(component).toBeInTheDocument();
    expect(component).toBeVisible();
    expect(component).toHaveTextContent(innerText);
    expect(component).toHaveClass('chakra-button');
  });

  it('renders <SquareButton> correctly.', () => {
    const innerText = '직사각형 버튼';
    render(<SquareButton color="orange" content={innerText} onClick={() => {}} />);
    const component = screen.getByText(innerText);

    expect(component).toBeInTheDocument();
    expect(component).toBeVisible();
    expect(component).toHaveTextContent(innerText);
    expect(component).toHaveClass('chakra-button');
  });

  it('renders <WideButton> correctly.', () => {
    const innerText = '가로로 긴 버튼';
    render(<WideButton color="pink" content={innerText} onClick={() => {}} />);
    const component = screen.getByText(innerText);

    expect(component).toBeInTheDocument();
    expect(component).toBeVisible();
    expect(component).toHaveTextContent(innerText);
    expect(component).toHaveClass('chakra-button');
  });
});
