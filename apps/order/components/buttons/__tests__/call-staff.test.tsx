/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CallStaff, OpenBill } from '..';
import '@testing-library/jest-dom';

describe('Button Components', () => {
  it(`should render <CallStaff> with '직원 호출'.`, () => {
    render(<CallStaff />);
    const component = screen.getByText('직원 호출');
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('chakra-buttons');
  });
  it(`should render <OpenBill> with '계산서 보기'.`, () => {
    render(<OpenBill />);
    const component = screen.getByText('계산서 보기');
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('chakra-buttons');
  });
});
