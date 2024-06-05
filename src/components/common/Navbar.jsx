import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import AddTransactionForm from '../AddTransactionForm'

const Navbar = () => {
    return (
        <div className='flex-col grow justify-between p-5 min-h-screen min-w-300 bg-slate-100 space-y-10'>
            <div>
                <Header />
            </div> 
            <div className="flex-col flex-wrap justify-between bg-slate-100 space-y-8 text-stone-500">
                <div>
                    Home
                </div>
                <div>
                    <Link to='/add'>Add Transaction</Link>
                </div>
                <div>
                    <Link to='/transactions'>View Transactions</Link>
                </div>
                <div>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default Navbar