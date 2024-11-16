export const SET_PRESONAL_DETAILS = 'SET_PRESONAL_DETAILS'
export const SET_ADDRESS_DETAILS = 'SET_ADDRESS_DETAILS'
export const SET_PAYMENT_DETAILS = 'SET_PAYMENT_DETAILS'
export const GO_TO_NEXT_STEP = 'GO_TO_NEXT_STEP'
export const GO_TO_PREVIOUS_STEP = 'GO_TO_PREVIOUS_STEP'
export const REST_STEP = 'REST_STEP'

export const setPresonalDetails = (personDetails) => ({
    type: SET_PRESONAL_DETAILS,
    payload: personDetails,
})

export const setAddressDetails = (addressDetails) => ({
    type: SET_ADDRESS_DETAILS,
    payload: addressDetails,
})

export const setPaymentDetails = (paymentDetails) => ({
    type: SET_PAYMENT_DETAILS,
    payload: paymentDetails,
})

export const goToNextStep = () => ({
    type: GO_TO_NEXT_STEP,
})

export const goToPreviousStep = () => ({
    type: GO_TO_PREVIOUS_STEP
})

export const restStep = () => ({
    type: REST_STEP,
})