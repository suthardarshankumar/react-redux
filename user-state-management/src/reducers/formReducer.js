import {
    SET_PRESONAL_DETAILS,
    SET_ADDRESS_DETAILS,
    SET_PAYMENT_DETAILS,
    GO_TO_NEXT_STEP,
    GO_TO_PREVIOUS_STEP,
    REST_STEP
} from '../actions/formActions'

const initialState = {
    personalDetails: {
        name: '',
        email: '',
    },
    addressDetails: {
        address: '',
        city: '',
        pinCode: '',
    },
    paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    },
    currentStep: 1,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRESONAL_DETAILS:
            return {
                ...state,
                personalDetails: action.payload,
            }
        case SET_ADDRESS_DETAILS:
            return {
                ...state,
                addressDetails: action.payload,
            }
        case SET_PAYMENT_DETAILS:
            return {
                ...state,
                paymentDetails: action.payload,
            }
        case GO_TO_NEXT_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1,
            }
        case GO_TO_PREVIOUS_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1,
            }
        case REST_STEP:
            return {
                ...state,
                currentStep: state.currentStep = 1,
            }
        default:
            return state
    }
}

export default formReducer