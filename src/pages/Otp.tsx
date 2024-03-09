import { MuiOtpInput } from "mui-one-time-password-input";
import { useContext, useState } from "react";
import myContext from "../utils/Context";

export const Otp = () => {
    const [otp, setOtp] = useState('');
    const context = useContext(myContext);

    const handleChange = (newValue: string) => {
        console.log(newValue);
        context?.verify.confirm(newValue).then((res: any) => {
            console.log(res);
        }, (err: any) => {
            console.log(err);
        })
        // console.log(context?.verifyId);
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
