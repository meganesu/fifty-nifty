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

  it('renders a UnitedStatesMapSVG', () => {
    expect(component.find(UnitedStatesMapSVG)).toHaveLength(1);
  });

  it('renders a heading', () => {
    expect(component.find('h1')).toHaveLength(1);
    expect(component.find('h1').text()).toEqual('Fifty Nifty');
  });
});
