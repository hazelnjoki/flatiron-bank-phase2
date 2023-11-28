import { useEffect, useState } from "react";
import React from "react";
import Search from "./Search"
function TransactionsList({transactions}) {
  const [searchTerm, setSearchTerm] = useState(transactions);
  useEffect (() => {
    setSearchTerm(transactions);
  },[transactions]

  )

  const handleSearch=(filterText) => {
    let filtered;
    if (filterText.length >= 3) {
      // Only search for a specific description if filterText is at least 3 characters long
      filtered = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(filterText.toLowerCase())
      );
    } else {
      // If filterText is less than 3 characters, show all transactions
      filtered = transactions;
    }
    setSearchTerm(filtered);
  };
 
  return (
    <table className="ui celled striped padded table">
      <Search onFilter={handleSearch} />
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        
      </thead>
      <tbody>
      {searchTerm.map((transaction,index)=>(
    
      <tr key={index}>
      <td>{ transaction.date}</td>
      <td>{ transaction.description}</td>
      <td>{ transaction.category}</td>
      <td>{ transaction.amount}</td>
    </tr>
      )
)}
      </tbody>


    </table>
  );
}

export default  TransactionsList;