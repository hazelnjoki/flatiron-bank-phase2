import React, { useState} from "react";

function AddTransactionForm({onSubmit}) {
  const intialFormData={
    description:"",
    date:"",
    category:"",
    amount:""
  }
  const [FormData,setFormData]=useState(intialFormData)
  function handlechange(e) { 
  setFormData({...FormData,[e.target.name]: e.target.value,
  }  );}
   async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(FormData);
    setFormData(intialFormData);
  }
  return (
    <div className="ui segment">
      <form  className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input required value={FormData.date} onChange={handlechange} type="date" name="date" />
          <input required value={FormData.description} onChange={handlechange} type="text" name="description" placeholder="Description" />
          <input required value={FormData.category} onChange={handleSubmit} type="text" name="category" placeholder="Category" />
          <input required value={FormData.amount} onChange={handlechange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;