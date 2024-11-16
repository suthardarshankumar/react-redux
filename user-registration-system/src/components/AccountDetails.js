import React, { useState } from 'react';
import Input from './common/Input';
import Button from './common/Button';
import Alert from './common/Alert';
import { useDispatch } from 'react-redux';
import { setAccountDetails, goToNextStep, goToPreviousStep } from '../actions/formActions';

const AccountDetails = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();

    const handleNext = () => {
        if (username && password) {
            dispatch(setAccountDetails({ username, password }));
            dispatch(goToNextStep());
        } else {
            setAlert(true);
        }
    };

    return (
        <>
            <div className="w-full px-64">
                <h1 className="text-3xl text-center pt-7 text-slate-900">Account Information</h1>
                {alert && <Alert contain="Please fill out all details." />}
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7"
                />
                <Button
                    name="Back"
                    onClick={() => dispatch(goToPreviousStep())}
                    className="px-4 py-2 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7"
                />
                <Button
                    name="Next"
                    onClick={handleNext}
                    className="px-4 py-2 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7 ml-7"
                />
            </div>
        </>
    );
};

export default AccountDetails;
