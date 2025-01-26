import React, { useState } from 'react';
import Select from 'react-select';
import './../App.css';


const CountryCodeSelector = ({ selectedCountry, onChange }) => {
    const countryOptions = [
        { value: '+256', label: '(+256) Uganda' },
        { value: '+254', label: '(+254) kenya' },
        { value: '+255', label: '(+255) Tanzania' },
        { value: '+250', label: '(+250) Rwanda' },
    ];

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          fontSize: 14,
          color: state.isSelected ? 'darkblue' : 'blue',
          backgroundColor: state.isSelected ? 'green' : 'yellow',
        }),
        control: (provided) => ({
          ...provided,
          width: 125,
          padding: 3.5,
          fontSize: 16,
          border: '2px solid white',
          borderRadius: 5,
          backgroundColor: '#f9f9f9',
          color: '#333'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'green', // Change text color to red in the input box
          }),
      };

return (
        <Select
            value={selectedCountry}
            onChange={onChange}
            options={countryOptions}
            placeholder="(+911)"  
            styles={customStyles}  
        />
    );
};
 
export default CountryCodeSelector;