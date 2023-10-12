import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';
const ChangeCurrency = () => {
    
     

    /*const { currency } = useContext(AppContext);    */
    const [currency, setCurrency] = useState('£');
    const { dispatch } = useContext(AppContext);
    const currencyChange = (event) => {   
      setCurrency(event.target.value);
   
        const ucurr = {
            currency: currency,
        };
        

       dispatch({
            type: 'CHG_CURRENCY',
            payload: ucurr,
        });

        
    }
    return (
<div className="my-style">
     <label>
       Currency   
       <select  className="dropdown-content" value={currency} onChange={currencyChange}> 
         <option  className="dropdown-item" value="£">£ Pound</option>
         <option className="dropdown-item" value="$">$ Dollar</option>
         <option  className="dropdown-item" value="€">€ Euro</option>
         <option  className="dropdown-item" value="₹">₹ Ruppee</option>
       </select>
     </label>
   </div>
    );
};
export default ChangeCurrency;
