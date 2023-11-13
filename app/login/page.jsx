"use client"

import React, { useContext } from 'react'
import { MyContext } from '../api/MyContext'
import AuthLayout from '../components/AuthLayout'
import Link from 'next/link'
import { GoogleSVG, LoadingSVG } from '../components/SvgsComponents'
import rememberCheckbox from '../styles/loginCheckbox.module.css'

function page() {
    const { loginDetails, handleOnChange, googleSignIn, emailPasswordSignIn, forgotPassword, loading } = useContext(MyContext)

    function onsubmit(e) {
        e.preventDefault()
        emailPasswordSignIn()
    }

    return (
        <AuthLayout>
            <h3 className='my-9 pb-9 text-center font-bold text-lg border-b-2'>Don't have an account? <Link href={'/signup'} className='text-[#0074E4]' >Sign up</Link></h3>
            {/* Sign in with Google btn */}
            <button
                onClick={() => googleSignIn()}
                className='rounded border-2 border-[#EDEDED] bg-white p-3 my-9 w-full font-bold text-[#0000008A] flex gap-4 items-center justify-center hover:bg-[#f5f5f5] active:scale-[0.98]'
            >
                <GoogleSVG />
                <span>
                    Sign in with Google
                </span>
            </button>
            {/* OR */}
            <div className='my-9 flex items-center justify-center gap-4'>
                <span className='h-[2px] w-full bg-[#EDEDED]'></span>
                <span>or</span>
                <span className='h-[2px] w-full bg-[#EDEDED]'></span>
            </div>
            {/* Login Form */}
            <form action="" onSubmit={onsubmit}>
                <div className='grid gap-1 mb-9'>
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
                <div className='grid gap-1 mb-9'>
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
                <button
                    type='submit'
                    disabled={loading}
                    className='mb-9 px-6 py-2 rounded w-full bg-[#0074E4] text-white text-lg flex justify-center items-center disabled:opacity-75'
                >
                    {loading ? (
                        <LoadingSVG size={'28px'} />
                    )
                        : 'LOGIN'
                    }
                </button>
            </form>

            <div className="flex items-center justify-between gap-4 px-1">
                <div className='flex justify-center items-center gap-2'>
                    <label className={rememberCheckbox.container}>
                        <input type="checkbox" />
                        <div className={rememberCheckbox.checkmark}></div>
                    </label>
                    <p>Remember me</p>
                </div>
                <button
                    onClick={() => forgotPassword()}
                    className='text-[#0074E4]'
                >
                    Forgot password
                </button>
            </div>

        </AuthLayout>
    )
}

export default page
