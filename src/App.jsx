import { BrowserRouter, Route, Routes } from "react-router-dom"
import Transactions from "./components/Transactions"
import Header from "./components/common/Header"
import Navbar from "./components/common/Navbar"
import AddTransactionForm from "./components/AddTransactionForm"
import { TransactionProvider } from "./contexts/transactions"
import EditTransactionForm from "./components/EditTransactionForm"

function App() {

  return (
    <div className="flex bg-slate-100 p-5">
      <TransactionProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/add" element={<AddTransactionForm />} />
            <Route path="/transactions/:id" element={<EditTransactionForm />} />
          </Routes>
        </BrowserRouter>
      </TransactionProvider>
    </div>
  )
}

export default App
