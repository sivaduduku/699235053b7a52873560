import React from 'react';
import { shallow, mount } from 'enzyme';
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import ContryComponent from './CountryComponent';

let wrapped = shallow(<ContryComponent />);

describe('ContryComponent', () => {

  it('should render the Contry Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the titile of the page', () => {
    expect(wrapped.find('h4').text()).toEqual('Country Details');
  });

  it("renders country component default state", () => {
    const { getByTestId } = render(<ContryComponent />);
    const countryTextbox = getByTestId("country-text-box");
    const getCountryDetailsButtfon = getByTestId("get-country-details-button");

    expect(countryTextbox.value).toBe("");
    expect(getCountryDetailsButtfon).toHaveClass("Mui-disabled");
  });

  it('set country textbox value and enable get country details button and get country details', () => {
    const { getByTestId } = render(<ContryComponent />);
    const countryTextBox = getByTestId("country-text-box");
    const getCountryDetailsButton = getByTestId("get-country-details-button");
    fireEvent.change(countryTextBox, { target: { value: "INDIA" } });
    expect(getCountryDetailsButton).not.toHaveClass("Mui-disabled");
    fireEvent.click(getCountryDetailsButton);
  });
});