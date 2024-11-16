export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const SET_ACCOUNT_DETAILS = 'SET_ACCOUNT_DETAILS'
export const SET_REVIEW_DETAILS = 'SET_REVIEW_DETAILS'
export const GO_TO_NEXT_STEP = 'GO_TO_NEXT_STEP'
export const GO_TO_PREVIOUS_STEP = 'GO_TO_PREVIOUS_STEP'
export const SUBMIT_FORM = 'SUBMIT_FORM'

export const setUserDetails = (userDetails) => ({
    type: SET_USER_DETAILS,
    payload: userDetails,
})

export const setAccountDetails = (accountDetails) => ({
    type: SET_ACCOUNT_DETAILS,
    payload: accountDetails,
})

export const setReviewDetails = (reviewDetails) => ({
    type: SET_REVIEW_DETAILS,
    payload: reviewDetails,
})

export const goToNextStep = () => ({
    type: GO_TO_NEXT_STEP
})

export const goToPreviousStep = () => ({
    type: GO_TO_PREVIOUS_STEP
})

export const submitForm = () => ({
    type: SUBMIT_FORM
})