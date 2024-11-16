import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReviewDetails, submitForm, goToPreviousStep } from '../actions/formActions';
import Alert from './common/Alert';
import Button from './common/Button';

const ReviewDetails = () => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = () => {
        if (termsAccepted) {
            dispatch(setReviewDetails({ termsAccepted }));
            dispatch(submitForm());
            alert('Form Submitted!');
        } else {
            setAlert(true)
        }
    };

    return (
        <div className="w-full px-64 pb-7">
            <h2 className="text-3xl text-center pt-7 text-slate-900">Review & Submit</h2>
            {alert && <Alert contain="Please accept the terms and conditions" />}
            <div
                className='mt-5'>
                <label>
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className='mr-3'
                    />
                    I accept the terms and conditions
                </label>
            </div>
            <Button
                name="Back"
                onClick={() => dispatch(goToPreviousStep())}
                className="px-4 py-2 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7"
            />
            <Button
                name="Next"
                onClick={handleSubmit}
                className="px-4 py-2 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7 ml-7"
            />
        </div>
    );
};

export default ReviewDetails;
