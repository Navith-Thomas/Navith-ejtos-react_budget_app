import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const mystyle = {
        color: "white", backgroundColor: "lightgreen", padding: "15px",
       fontFamily: "Arial"  
      };
     

    /*const { currency } = useContext(AppContext);    */
    const [currency, setCurrency] = useState('dollar');
    const { dispatch } = useContext(AppContext);
    const currencyChange = (event) => {   
      setCurrency(event.target.value);
   
    };
          
        const ucurr = {
            currency: currency,
        };
        

        dispatch({
            type: 'CHG_CURRENCY',
            payload: ucurr,
        });

        
    
    return (
<div style={mystyle}>
     <label>
       Currency
       <select value={currency} onChange={currencyChange}>
         <option value="dollar">$ Dollar</option>
         <option value="pound">£ Pound</option>
         <option value="euro">€ Euro</option>
         <option value="ruppee">₹ Ruppee</option>
       </select>
     </label>
   </div>
    );
};
export default ChangeCurrency;
