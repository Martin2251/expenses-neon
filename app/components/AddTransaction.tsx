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

  </form>
  </>
  )
}

export default AddTransaction
