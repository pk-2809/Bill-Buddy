import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [mobile, setMobile] = useState('8009225514');
    const navigate = useNavigate();
    let appCaptcha: any;

    useEffect(() => {
        appCaptcha = new RecaptchaVerifier(auth, "recaptcha", {
            size: "invisible",
        });
    }, [auth])

    async function sendOtp() {
        console.log(mobile);
        try {
            const phoneNumber = `+91${mobile}`;
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appCaptcha);
            console.log(confirmationResult);
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
