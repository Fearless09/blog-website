"use client"

import React, { useContext, useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import { MyContext } from '../api/MyContext'
import Link from 'next/link'
import { PhoneInput } from 'react-international-phone'
import { GoogleSVG, LoadingSVG } from '../components/SvgsComponents'
import { toast } from 'react-toastify'
import rememberCheckbox from '../styles/loginCheckbox.module.css'

function page() {
    const { loginDetails, handleOnChange, googleSignIn, loading, createUser } = useContext(MyContext)
    const [details, setDetails] = useState({
        phone: '',
        confirm_password: ''
    });

    const onDetailsChange = (value, name) => {
        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function onsubmit(e) {
        e.preventDefault()
        if (loginDetails.password === details.confirm_password) {
            createUser()
        } else {
            toast("Password Does not Match")
        }

    }

    return (
        <AuthLayout>
            <h3 className='my-7 pb-8 text-center font-bold text-lg border-b-2'>Have an account? <Link href={'/login'} className='text-[#0074E4]' >Login</Link></h3>
            {/* Sign in with Google btn */}
            <button
                onClick={() => googleSignIn()}
                className='rounded border-2 border-[#EDEDED] bg-white p-3 my-8 w-full font-bold text-[#0000008A] flex gap-4 items-center justify-center hover:bg-[#f5f5f5] active:scale-[0.98]'
            >
                <GoogleSVG />
                <span>
                    Sign up with Google
                </span>
            </button>
            {/* OR */}
            <div className='my-8 flex items-center justify-center gap-4'>
                <span className='h-[2px] w-full bg-[#EDEDED]'></span>
                <span>or</span>
                <span className='h-[2px] w-full bg-[#EDEDED]'></span>
            </div>

            <form action="" onSubmit={onsubmit}>
                <div className='grid gap-1 mb-7'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="loginEmail"
                        value={loginDetails.email}
                        onChange={(e) => handleOnChange(e.target.value, 'email')}
                        placeholder='email@email.com'
                        className='py-4 px-2 text-lg border-b-2 w-full rounded'
                        required
                    />
                </div>
                <div className='grid gap-1 mb-7'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <PhoneInput
                        defaultCountry="ng"
                        value={details.phone}
                        onChange={(phone) => onDetailsChange(phone, 'phone')}
                    // onChange={(phone) => setPhone(phone)}
                    />
                </div>
                <div className='grid gap-1 mb-7'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={loginDetails.password}
                        onChange={(e) => handleOnChange(e.target.value, 'password')}
                        placeholder='password'
                        className='py-4 px-2 text-lg border-b-2 w-full rounded'
                        required
                    />
                </div>
                <div className='grid gap-1 mb-7'>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={details.confirm_password}
                        onChange={(e) => onDetailsChange(e.target.value, 'confirm_password')}
                        placeholder='password'
                        className='py-4 px-2 text-lg border-b-2 w-full rounded'
                        required
                    />
                </div>
                <div className='mb-5 flex items-center gap-2 text-lg'>
                    <label className={rememberCheckbox.container}>
                        <input type="checkbox" />
                        <div className={rememberCheckbox.checkmark}></div>
                    </label>
                    <p>Accept <button type='button' className='text-[#0074E4]'>Terms and Conditions</button></p>
                </div>
                <button
                    type='submit'
                    disabled={loading}
                    className='mb-5 px-6 py-2 rounded w-full bg-[#0074E4] text-white text-lg flex justify-center items-center disabled:opacity-75'
                >
                    {loading ? <LoadingSVG size={'28px'} />
                        : 'CREATE ACCOUNT'
                    }
                </button>
            </form>
        </AuthLayout>
    )
}

export default page
