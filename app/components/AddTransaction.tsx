"use client"
import React from 'react'

const AddTransaction = () => {

    const clientAction = async(formData:FormData) =>{
        console.log(formData.get('text'), formData.get('amount'))
    }
  return (
  <>
  <h3>Add Transaction</h3>
  <form action={clientAction}>
    <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' id='text' name='text' placeholder='enter text...'/>
    </div>
    <div className='form-control'>
        <label htmlFor='amount'>Amount <br /> (negative - expense, postive - income)</label>
        <input type='number' id='amount' name='amount' placeholder='enter amount...' step="0.01" />

    </div>
    <button className='btn'>Add Transaction</button>

  </form>
  </>
  )
}

export default AddTransaction
