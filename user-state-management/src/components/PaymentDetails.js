import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPaymentDetails, goToPreviousStep, goToNextStep } from '../actions/formActions'
import Input from './common/Input'
import Button from './common/Button'

const PaymentDetails = () => {
    const dispatch = useDispatch()
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')

    const handleSubmit = () => {
        if (cardNumber && expiryDate && cvv) {
            dispatch(setPaymentDetails({ cardNumber, expiryDate, cvv }))
            dispatch(goToNextStep())
            alert('Form Submitted!')
        } else {
            alert('Please fill out all fields')
        }
    }

    return (
        <>
            <div
                className='w-full px-64'>
                <h1 className='text-3xl text-center pt-7'>Payment Details</h1>
                <Input
                    type='text'
                    placeholder='Card Number'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Input
                    type='text'
                    placeholder='Expiry Date'
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Input
                    type='text'
                    placeholder='CVV'
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Button
                    name='Back'
                    onClick={() => dispatch(goToPreviousStep())}
                    className='px-3 py-2 rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7 mb-10'
                />
                <Button
                    name='Submit'
                    onClick={handleSubmit}
                    className='px-3 py-2 rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7 mb-10 ml-7'
                />
            </div>
        </>
    )
}

export default PaymentDetails