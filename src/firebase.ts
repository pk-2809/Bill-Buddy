import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAr3dd_MFKtW7IaGmWv81um7B9A4OGA3iU",
    authDomain: "bill-buddy-20022024.firebaseapp.com",
    databaseURL: "https://bill-buddy-20022024-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bill-buddy-20022024",
    storageBucket: "bill-buddy-20022024.appspot.com",
    messagingSenderId: "495210928129",
    appId: "1:495210928129:web:59928d277831c544af8800",
    measurementId: "G-Y90TLT9EGT"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };