import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

export const Otp = () => {
    const [otp, setOtp] = useState('')

    const handleChange = (newValue: string) => {
        console.log(newValue);
    };

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
