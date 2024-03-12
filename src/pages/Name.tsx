import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { useContext, useState } from "react";
import myContext from '../utils/Context';
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const Name = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const context = useContext(myContext);


    const updateMailandName = async () => {
        const uuid: string = context?.accountData.ActDetails.id;
        const docRef = doc(db, 'users', uuid);
        try {
            await updateDoc(docRef, {
                "ActDetails.name": name,
                "ActDetails.email": mail
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <TextField id="standard-basic" value={name} onChange={(e) => setName(e.target.value)} label="Enter Name" placeholder="Enter your name" variant="standard" />
            <TextField id="standard-basic" value={mail} onChange={(e) => setMail(e.target.value)} label="Enter Email" placeholder="Enter your email" variant="standard" />
            <Button variant="contained" onClick={updateMailandName}>Let's Go</Button>
        </div>
    )
}
