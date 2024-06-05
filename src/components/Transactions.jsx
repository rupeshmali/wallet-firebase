
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import { TransactionContext } from "../contexts/transactions";
import { deleteOne } from "../lib/firebase";
import AddTransactionForm from "./AddTransactionForm";
import EditTransactionForm from "./EditTransactionForm";
import { Link } from "react-router-dom";

const Transactions = () => {
  const { transactions, handleDeleteTransaction } = useContext(TransactionContext)
  const [showEditTransactionForm, setShowEditTransactionForm] = useState(false)
  const handleDelete = async (id) => {
    const response = await handleDeleteTransaction(id)
  }
  const handleUpdate = async (id) => {
    setShowEditTransactionForm(true)
  }
  return (
    <div className='flex flex-col gap-5 bg-sky-100 grow p-5'>
     
      {
        transactions?.map((t) => {
          return (
            <div className='flex flex-row justify-between gap-5 bg-sky-200 p-5' key={t.id}>
              <div>
                <div className={t.type == 'credit' ? 'text-lime-600' : 'text-red-600'}>
                  {t.type == 'credit' ? '+' : '-'} {t.amount}
                </div>
                <div className=''>
                  {t.description}
                </div>
              </div>

              <div className='flex flex-row gap-2'>
                <button className=' p-2' onClick={() => handleDelete(t.id)}><MdDeleteOutline size={20} /></button>
                <button>
                <Link to={`/transactions/${t.id}`} className='p-2' onClick={() => handleUpdate(t.id)}><FaRegEdit size={18} /></Link>
                  </button>
              </div>
            </div>
          );
        })
      }

    </div>
  )
}

export default Transactions