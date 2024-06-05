import { collection, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { addOne, deleteOne, getAll, updateOne } from "../../lib/firebase";
import { db } from "../../config/fire"

export const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        handleGetTransactions()
    }, [])

    const handleGetTransactions = async () => {
        const collectionRef = collection(db, 'transactions')
        const transactionsArray = await getAll(collectionRef)
        setTransactions(transactionsArray)
    }

    const handleDeleteTransaction = async (id) => {
        // const collectionRef = collection(db, 'transactions')
        console.log("inside delete: ", id);
        const docRef = doc(db, 'transactions', id)
        const response = await deleteOne(docRef)
        handleGetTransactions()
    }

    const handleAddTransaction = async (amount, description, type) => {
        const collectionRef = collection(db, 'transactions')
        const transaction = {
            amount,
            description,
            type
        }
        const id =  await addOne(collectionRef, transaction)
        handleGetTransactions()
    }

    const handleUpdateTransaction = async (amount, description, type, id) => {
        const docRef = doc(db, 'transactions', id)
        const transaction = {
            amount,
            description,
            type
        }
        const response = await updateOne(docRef, transaction);
        handleGetTransactions()
    }

    const values = {
        transactions,
        handleAddTransaction,
        handleGetTransactions,
        handleDeleteTransaction,
        handleUpdateTransaction
    }

    return (
        <TransactionContext.Provider value={values}>
            {children}
        </TransactionContext.Provider>
    )
}