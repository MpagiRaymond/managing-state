import React, {useState} from 'react';
import Select from 'react-select';
import './../App.css';

export const CountryCodeSelector = (selectedCountry, onChange) => {
    const countryOptions =[
        {value: '+256', label: 'Uganda (+256)'},
        {value: '+254', label: 'kenya (+254)'},
        {value: '+255', label: 'Tanzania (+255)'},
        {value: '+250', label: 'Rwanda (+250)'},
    ];
return (
    <Select
        value={selectedCountry}
        onChange={onChange}
        options={countryOptions }
        placeholder="+91"    
    />
);
}
 
export default CountryCodeSelector;