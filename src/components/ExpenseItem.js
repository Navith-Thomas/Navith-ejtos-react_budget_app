import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './Currency.css';

const ExpenseItem = (props) => {
    const { dispatch ,currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className='butt2' onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className='butt' onClick={handleDeleteExpense}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;
