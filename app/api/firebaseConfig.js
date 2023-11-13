// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABPuwiKfBRqfSr2QzdRlcfQpxOOiA0Z3g",
    authDomain: "blog-website-eccf5.firebaseapp.com",
    projectId: "blog-website-eccf5",
    storageBucket: "blog-website-eccf5.appspot.com",
    messagingSenderId: "393977415387",
    appId: "1:393977415387:web:b7fa1ad127317d34edaefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
