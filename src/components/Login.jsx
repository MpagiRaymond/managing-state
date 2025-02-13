import React, {useState} from 'react';
import './../App.css';
import CountryCodeSelector from './CountryCodeSelector';

export function Login() {
  const [input, setInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClick =(e) => {
    e.preventDefault();
    if(isChecked){
    alert("please wait this product is under development");
    }
  }

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 14,
      color: 'blue',
      backgroundColor: state.isSelected ? 'green' : 'yellow'
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
    })
  };

  return (
    <>
    <form action="" method="post" onSubmit={handleClick}>
<table>
    <caption><div className="title">Personal Details</div></caption>
    <thead>
      <tr>
        <th><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></th>
        <th><input value={input} style={{width: '25rem', height: '3rem'}} onChange={(e)=> setInput(e.target.value)} placeholder="Full Name" type="text" name="identify" id="" /></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg></td>
        <td><div className="container">
              <CountryCodeSelector 
                className="custom-select"
                selectedCountry={selectedCountry}
                onChange={handleCountryChange}
                // style={{width: '4rem', color: 'white'}}
                customStyles={customStyles}
              />

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" name="Tel" id="" placeholder="Phone Number" />
            </div></td>
      </tr>
      <tr>
        <td>
        <div className="container terms">
          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} name="" id="checked" />
          <label htmlFor="terms">Accepts Tems & Conditions</label></div>
        </td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td><button type="submit" disabled={!isChecked}>Submit</button></td>
        </tr>
      </tfoot>
</table>
    </form>
    </>
  );
}

export default Login;