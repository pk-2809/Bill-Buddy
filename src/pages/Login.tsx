import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import myContext from '../utils/Context';

export const Login = () => {
    const context = useContext(myContext);
    const [mobile, setMobile] = useState('8009225514');
    const navigate = useNavigate();
    let appCaptcha: any;

    useEffect(() => {
        appCaptcha = new RecaptchaVerifier(auth, "recaptcha", {
            size: "invisible",
        });
    }, [auth])

    const resolveRecaptcha = () => {
        return new Promise((resolve, reject) => {
            appCaptcha.verify().then(resolve).catch(reject);
        });
    };

    async function sendOtp() {
        console.log(mobile);
        try {
            const phoneNumber = `+91${mobile}`;
            await resolveRecaptcha();
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appCaptcha);
            context?.updateVerify(confirmationResult);
            appCaptcha.verify();
            navigate('/verify');
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <TextField id="standard-basic" label="Enter mobile number" variant="standard" onChange={(e) => setMobile(e.target.value)} value={mobile} />
            <Button variant="contained" onClick={sendOtp}>Login</Button>
            <div id="recaptcha"></div>
        </div>
    )
}
