import {
    SET_ACCOUNT_DETAILS,
    SET_USER_DETAILS,
    SET_REVIEW_DETAILS,
    GO_TO_NEXT_STEP,
    GO_TO_PREVIOUS_STEP,
    SUBMIT_FORM,
} from '../actions/formActions'

const initialState = {
    userDetails: {
        firstName: '',
        lastName: '',
        email: '',
    },
    accountDetails: {
        username: '',
        password: '',
    },
    reviewDetails: {
        termAccepted: false,
    },
    currentStep: 1,
    isFormSubmitted: false,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            }
        case SET_ACCOUNT_DETAILS:
            return {
                ...state,
                accountDetails: action.payload,
            }
        case SET_REVIEW_DETAILS:
            return {
                ...state,
                reviewDetails: action.payload,
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
        case SUBMIT_FORM:
            return {
                ...state,
                isFormSubmitted: true,
            }
        default:
            return state
    }
}

export default formReducer