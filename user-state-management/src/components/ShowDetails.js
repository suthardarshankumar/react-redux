import React from 'react'
import Button from './common/Button'
import { restStep } from '../actions/formActions'
import { useDispatch } from 'react-redux'

const ShowDetails = ({
  personalDetails,
  addressDetails,
  paymentDetails
}) => {
  const dispatch = useDispatch()
  const handleAgainFill = () => {
    dispatch(restStep())
  }

  return (
    <>
      <div
        className='w-full px-64'>
        <h1 className='text-3xl text-center pt-7 text-slate-900 mb-7'>User Details</h1>
        <div className='w-full flex'>
          <div className='w-1/5 text-2xl'>Name:</div>
          <div className='text-2xl w-4/5'>{personalDetails.name}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>Email:</div>
          <div className='text-2xl w-4/5'>{personalDetails.email}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>Address:</div>
          <div className='text-2xl w-4/5'>{addressDetails.address}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>City:</div>
          <div className='text-2xl w-4/5'>{addressDetails.city}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>Pincode:</div>
          <div className='text-2xl w-4/5'>{addressDetails.pincode}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>Card Number:</div>
          <div className='text-2xl w-4/5'>{paymentDetails.cardNumber}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>Expiry Date:</div>
          <div className='text-2xl w-4/5'>{paymentDetails.expiryDate}</div>
        </div>
        <div className='w-full flex mt-2'>
          <div className='w-1/5 text-2xl'>CVV:</div>
          <div className='text-2xl w-4/5'>{paymentDetails.cvv}</div>
        </div>
        <Button
          name='Again Fill'
          onClick={handleAgainFill}
          className='px-5 py-3 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7'
        />
      </div>
    </>
  )
}

export default ShowDetails