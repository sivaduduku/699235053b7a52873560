import React from 'react';
import { shallow, mount } from 'enzyme';
import ContryComponent from './CountryComponent';
import { TextField, Button } from '@material-ui/core';

let wrapped = shallow(<ContryComponent />);

describe('ContryComponent', () => {
  it('should render the ContryComponent Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the titile of the page', () => {   
    expect(wrapped.find('h4').text()).toEqual('Country Details');
  });
  it('renders country textbox', () => {   
    wrapper = mount(<ContryComponent />)
    expect(wrapper.find(TextField).length).toEqual(1);
  });
  it('set country code in state', () => {
    wrapped.instance().saveCountryCode({target: {value: 'INDIA'}});   
    expect(wrapped.instance().state.countryCode).toEqual('INDIA');
  });
});