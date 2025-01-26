import React, {useState} from 'react';
import Select from 'react-select';
import './../App.css';


const CountryCodeSelector = ({selectedCountry, onChange}) => {
    const countryOptions =[
        {value: '+256', label: 'Uganda (+256)'},
        {value: '+254', label: 'kenya (+254)'},
        {value: '+255', label: 'Tanzania (+255)'},
        {value: '+250', label: 'Rwanda (+250)'},
    ];

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          fontSize: 14,
          color: 'blue',
          backgroundColor: state.isSelected ? 'green' : 'yellow',
        }),
        control: (provided) => ({
          ...provided,
          width: 200,
          padding: 10,
          fontSize: 16,
          border: '2px solid #4CAF50',
          borderRadius: 5,
          backgroundColor: '#f9f9f9',
          color: '#333'
        }),
      };

return (
    <Select
        value={selectedCountry}
        onChange={onChange}
        options={countryOptions}
        placeholder="+91"  
        style={customStyles}  
    />
);
}
 
export default CountryCodeSelector;