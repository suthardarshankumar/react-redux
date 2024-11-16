import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails, goToNextStep } from '../actions/formActions';
import Input from './common/Input';
import Button from './common/Button';
import Alert from './common/Alert';

const UserDetails = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(false);
    const handleNext = () => {
        if (firstName && lastName && email) {
            dispatch(setUserDetails({ firstName, lastName, email }));
            dispatch(goToNextStep());
        } else {
            setAlert(true);
        }
    };

    return (
        <>
            <div className="w-full px-64">
                <h1 className="text-3xl text-center pt-7 text-slate-900">User Details</h1>
                {alert && <Alert contain="Please fill out all details." />}
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7"
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg outline-1 outline-slate-900 text-xl border mt-7"
                />
                <Button
                    name="Next"
                    onClick={handleNext}
                    className="px-4 py-2 text-xl rounded-lg border hover:border-slate-900 bg-zinc-50 transition duration-300 hover:text-zinc-50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900 mt-7"
                />
            </div>
        </>
    );
};

export default UserDetails;
