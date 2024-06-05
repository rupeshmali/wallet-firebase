import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactions';
import { useNavigate, useParams } from 'react-router-dom';

const EditTransactionForm = () => {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const { transactions, handleUpdateTransaction } = useContext(TransactionContext)
    const navigate = useNavigate();
    const params  = useParams();

    useEffect(()=>{
        getCurrentTransactionData();
    },[])

    const getCurrentTransactionData = () => {
        const currentTransaction = transactions.filter(t => t.id === params.id)
        setAmount(currentTransaction[0]?.amount)
        setDescription(currentTransaction[0]?.description)
        setType(currentTransaction[0]?.type)
    }

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
    const handleUpdate = async () => {
        await handleUpdateTransaction(amount, description, type, params.id);
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
            <div className='flex gap-5 grow p-5'>
                {/* <Link to={'/transactions'} ><button className='appearance-none rounded w-full bg-red-300 h-15 p-5'>Cancel</button></Link> */}
                <button className='appearance-none rounded w-full bg-red-300 h-15 p-5' onClick={()=>navigate('/transactions')}>Cancel</button>
                <button className='appearance-none rounded w-full bg-red-300 h-15 p-5' onClick={handleUpdate}>Save Changes</button>
            </div>
        </div>
    )
}

export default EditTransactionForm