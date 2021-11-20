import React from 'react';
import { shallow } from 'enzyme';
import ContryWeatherComponent from './CountryWeatherComponent';

let wrapped = shallow(<ContryWeatherComponent />);

describe('ContryWeatherComponent', () => {
  it('should render the ContryWeatherComponent Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the titile of the page', () => {   
    expect(wrapped.find('h1').text()).toEqual('Weather Details');
  });
});