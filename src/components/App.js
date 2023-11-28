import React from "react";
import { useEffect,useState } from "react";
import  Transactionslist from "./TransactionList";
import AddTransactionForm from "./AddTransactionsForm";

function App() {
  // state variables
  const [Transaction,setTransaction]=useState([])
  useEffect(() => { 
    fetch(' https://flatbank-6pou.onrender.com/transactions')
  .then(response => response.json())
  .then(data =>{
      setTransaction(data)
  })
  .catch(error =>{
      console.error('Error fetching data:' , error);
  })
},[]);
// },[])
function handleSubmit(formData) {
  fetch(' https://flatbank-6pou.onrender.com/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send data to server');
      }
      return response.json();
    })
    .then(newTransaction => {
      setTransaction([...Transaction, newTransaction]);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      
      <AddTransactionForm onSubmit={handleSubmit}/>
      < Transactionslist transactions={Transaction}/>
    </div>
  );
}

export default App;