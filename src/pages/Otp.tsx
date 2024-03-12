import { MuiOtpInput } from "mui-one-time-password-input";
import { useContext, useState } from "react";
import myContext from "../utils/Context";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Otp = () => {
    const [otp, setOtp] = useState('');
    const context = useContext(myContext);
    const navigate = useNavigate();

    const handleChange = (newValue: string) => {
        console.log(newValue);
        context?.verify.confirm(newValue).then((res: any) => {
            console.log(res._tokenResponse);
            createOrGetAccount(res._tokenResponse.localId, res._tokenResponse.isNewUser, res._tokenResponse.phoneNumber);
        }, (err: any) => {
            console.log(err);
        })
    };

    const createOrGetAccount = async (uuid: string, isNewUser: boolean, mobNo: string) => {
        const docRef = doc(db, 'users', uuid);
        if (isNewUser) {
            try {
                const userData = {
                    ActDetails: { name: 'Pranav', mobile: mobNo, email: 'temp@example.com', id: uuid }
                };
                const ref = await setDoc(docRef, userData)
                console.log(ref);
                context?.updateAccount(userData);
                navigate("/account");
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            const ref = await getDoc(docRef);
            if (ref.exists()) {
                console.log(ref.data());
                context?.updateAccount(ref.data());
            }
            navigate("/account");
            console.log('oldUser');
        }
    }

    const checkOtp = (val: string) => {
        setOtp(val);
    };

    const validateChar = (value: any) => {
        return !isNaN(parseInt(value));
    }

    return (
        <div>
            <MuiOtpInput autoFocus value={otp} validateChar={validateChar} onChange={checkOtp} length={6} onComplete={handleChange} />
        </div>
    )
}
