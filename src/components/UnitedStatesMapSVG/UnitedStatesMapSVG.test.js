import React from 'react';
import UnitedStatesMapSVG from './UnitedStatesMapSVG';
import { mount } from 'enzyme';

describe('UnitedStatesMapSVG', () => {
  let svg;
  beforeAll(() => {
    svg = mount(<UnitedStatesMapSVG />).find('svg');
  });

  it('renders successfully', () => {
    expect(svg).toHaveLength(1);
  });
  it('has an accessible ARIA label', () => {
    expect(svg.prop('aria-label')).toBeDefined();
  });
});