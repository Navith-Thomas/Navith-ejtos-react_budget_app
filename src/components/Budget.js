import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
        const ubudge = {
            newBudget: parseInt(newBudget),
        };
        
        

        dispatch({
            type: 'SET_BUDGET',
            payload: ubudge,
        });

        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £ </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>



</div>
    );
};
export default Budget;
