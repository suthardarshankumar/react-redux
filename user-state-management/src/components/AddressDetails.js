import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddressDetails, goToNextStep, goToPreviousStep } from '../actions/formActions'
import Input from './common/Input'
import Button from './common/Button'

const AddressDetails = () => {
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')

    const hanldeNext = () => {
        if (address && city && pincode) {
            dispatch(setAddressDetails({ address, city, pincode }))
            dispatch(goToNextStep())
        } else {
            alert('Please fill out all fields');
        }
    }

    return (
        <>
            <div
                className='w-full px-64'>
                <h1 className='text-3xl text-center pt-7 text-slate-900'>Address Details</h1>
                <Input
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Input
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Input
                    type='text'
                    placeholder='Pincode'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Button
                    name='Back'
                    onClick={() => dispatch(goToPreviousStep())}
                    className='px-3 py-2 rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7'
                />
                <Button
                    name='Next'
                    onClick={hanldeNext}
                    className='px-3 py-2 rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7 ml-7'
                />
            </div>
        </>
    )
}

export default AddressDetails;