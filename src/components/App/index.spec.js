import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '.';
import UnitedStatesMapSVG from '../UnitedStatesMapSVG';

describe('App', () => {
  let component;
  beforeAll(() => {
    component = mount(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a UnitedStatesMapSVG with the correct props', () => {
    const svg = component.find(UnitedStatesMapSVG);
    expect(svg).toHaveLength(1);
    expect(svg.prop('statesVisited')).toBeDefined();
    expect(Array.isArray(svg.prop('statesVisited'))).toBe(true);
  });

  it('renders a heading', () => {
    expect(component.find('h1')).toHaveLength(1);
    expect(component.find('h1').text()).toEqual('Fifty Nifty');
  });

  it('renders a link to the source on GitHub', () => {
    expect(component.find('#source-link a').text()).toEqual(expect.stringContaining('GitHub'));
  })
});
