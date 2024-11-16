import React from 'react'
import { useSelector } from 'react-redux';
import UserDetails from './UserDetails'
import AccountDetails from './AccountDetails'
import ReviewDetails from './ReviewDetails'

const RegistrationForm = () => {
    const currentStep = useSelector((state) => state.form.currentStep);

    return (
        <>
            {currentStep === 1 && <UserDetails />}
            {currentStep === 2 && <AccountDetails />}
            {currentStep === 3 && <ReviewDetails />}
        </>
    )
}

export default RegistrationForm