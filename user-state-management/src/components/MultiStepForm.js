import React from 'react'
import PersonalDetails from './PersonalDetails'
import AddressDetails from './AddressDetails'
import PaymentDetails from './PaymentDetails'
import ShowDetails from './ShowDetails'
import { useSelector } from 'react-redux'

const MultiStepForm = () => {
    const currentSteps = useSelector((state) => state.form.currentStep)
    const personalDetails = useSelector((state) => state.form.personalDetails)
    const addressDetails = useSelector((state) => state.form.addressDetails)
    const paymentDetails = useSelector((state) => state.form.paymentDetails)
    return (
        <>
            {currentSteps === 1 && <PersonalDetails />}
            {currentSteps === 2 && <AddressDetails />}
            {currentSteps === 3 && <PaymentDetails />}
            {currentSteps === 4 && <ShowDetails
                personalDetails={personalDetails}
                addressDetails={addressDetails}
                paymentDetails={paymentDetails}
            />}
        </>
    )
}

export default MultiStepForm