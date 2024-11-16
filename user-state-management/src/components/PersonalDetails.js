import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPresonalDetails, goToNextStep } from '../actions/formActions'
import Input from './common/Input';
import Button from './common/Button'

const PersonalDetails = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handlerNext = () => {
        if (name && email) {
            dispatch(setPresonalDetails({ name, email }))
            dispatch(goToNextStep())
        } else {
            alert('Please fill out all fields')
        }
    }

    return (
        <>
            <div className='w-full px-64'>
                <h1 className='text-3xl text-center pt-7'>Personal Details</h1>
                <Input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7'
                />
                <Button
                    name='Submit'
                    onClick={handlerNext}
                    className='px-3 py-2 rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7'
                />
            </div>
        </>
    )
}

export default PersonalDetails