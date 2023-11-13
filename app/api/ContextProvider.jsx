"use client"

import React, { useState, useEffect } from 'react'
import { MyContext } from './MyContext'
import { useRouter } from 'next/navigation'
import { signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';
import 'react-international-phone/style.css';

const LOCAL_STORAGE_NAME = 'bookmarkedPost'

function ContextProvider({ children }) {

    const [bookmark, setBookmark] = useState([])
    const [sideBookmark, setSideBookmark] = useState(false)
    const [userAccount, setUserAccount] = useState(null)
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const notify = (toastMessage) => toast(toastMessage)

    const handleOnChange = (value, name) => {
        setLoginDetails((prevUserAccount) => ({
            ...prevUserAccount,
            [name]: value
        }));
        // console.log(value, name)
    }

    useEffect(() => {
        const localStorageSavedBookmark = localStorage.getItem(LOCAL_STORAGE_NAME)
        if (localStorageSavedBookmark) {
            setBookmark(JSON.parse(localStorageSavedBookmark))
        }
    }, []);

    useEffect(() => {
        const saveBookmarkToLocalStorage = () => {
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(bookmark))
        }

        window.addEventListener('beforeunload', saveBookmarkToLocalStorage)

        return () => {
            window.removeEventListener('beforeunload', saveBookmarkToLocalStorage)
        }

    }, [bookmark])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserAccount(currentUser)
        })
        // console.log(userAccount?.providerData[0])
        return () => unsubscribe()
    }, [userAccount])

    const googleSignIn = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(userCredential => {
                notify('Sign In Successfully')
                setLoading(false)
                router.push('/')
            }).catch(error => {
                // console.log(error)
                setLoading(false)
                notify('Sign In Error')
            })
    }

    const emailPasswordSignIn = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
            .then(() => {
                notify('Sign In Successfully')
                setLoading(false)
                router.push("/")
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage)
                notify('Sign In Error')
            });
    }

    const createUser = () => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
            .then((userCredential) => {
                notify('Account Created Successfully. Login')
                setLoading(false)
                router.push('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false)
                notify('Error in creating user')
            });
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                notify('Log Out Successfully')
                setLoading(false)
            }).catch(error => {
                // console.log(error)
                setLoading(false)
                notify('Log Out Error')
            })
    }

    const forgotPassword = () => {
        setLoading(true)
        sendPasswordResetEmail(auth, loginDetails.email)
            .then(() => {
                notify("Password Reset email sent")
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false)
                notify("There is error in send reset password email. Please fill in you email")
                // console.log(errorCode, errorMessage)
            });
    }

    return (
        <MyContext.Provider value={{
            bookmark, setBookmark, sideBookmark, setSideBookmark, loginDetails, handleOnChange, googleSignIn, logOut, userAccount, emailPasswordSignIn, forgotPassword, loading, createUser
        }}>
            {children}
            <ToastContainer />
        </MyContext.Provider>
    )
}

export default ContextProvider
