import React, { useState } from 'react'
import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactions';

const AddTransactionForm = () => {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const { handleAddTransaction } = useContext(TransactionContext)

    const handleAmount = (e) => {
        console.log(e.target.value);
        setAmount(e.target.value)
    }
    const handleDescription = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value)
    }
    const handleType = (e) => {
        console.log(e.target.value);
        setType(e.target.value)
    }
   const handleAdd = async () => {
       await handleAddTransaction(amount, description, type);
   }

    return (
        <div className='grow flex-col justify-between  min-w-800 min-h-screen bg-red-100 space-y-0 justify-items-center align-items-center' >
            <div className='rounded grow p-5'>
                <input className='appearance-none rounded p-5 grow w-full' type="text" placeholder='Enter amount' value={amount} onChange={handleAmount} />
            </div> 
            <div className='rounded grow p-5'>
                <select className='appearance-none rounded p-5 grow w-full' name="transaction-type" id="transaction-type" onChange={handleType} value={type}>
                    <option className='appearance-none' value="debit">Debit</option>
                    <option className='appearance-none' value="credit">Credit</option>
                </select>
            </div>
            <div className='rounded grow p-5'>
                <input className='appearance-none rounded p-5 grow w-full' type="text" placeholder='Enter Description' value={description} onChange={handleDescription} />
            </div>
            <div className='grow p-5'>
                <button className='appearance-none rounded w-full bg-red-300 h-15 p-5' onClick={handleAdd}>Add Transaction</button>
            </div>
        </div>
    )
}

export default AddTransactionForm