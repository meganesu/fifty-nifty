import React from 'react';
import UnitedStatesMapSVG from '.';
import { mount } from 'enzyme';

describe('UnitedStatesMapSVG', () => {
  const statesVisited = ["California"];
  let svg;
  beforeAll(() => {
    svg = mount(<UnitedStatesMapSVG statesVisited={statesVisited} />).find('svg');
  });

  it('renders successfully', () => {
    expect(svg).toHaveLength(1);
  });
  it('has an accessible ARIA label', () => {
    expect(svg.prop('aria-label')).toBeDefined();
  });
  it('renders all 50 states plus DC', () => {
    expect(svg.find('path')).toHaveLength(51);
  });
  describe('when a state has been visited', () => {
    it('adds the visited class to that state', () => {
      const californiaPath = svg.find('path#CA');
      expect(californiaPath.hasClass('visited')).toBe(true);
    });
  });
  describe('when a state has not been visited', () => {
    it('does not add the visited class to that state', () => {
      const alaskaPath = svg.find('path#AK');
      expect(alaskaPath.hasClass('visited')).toBe(false);
    });
  });
});