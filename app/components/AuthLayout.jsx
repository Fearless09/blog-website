"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MyContext } from '../api/MyContext'

function AuthLayout({ children }) {
    const router = useRouter()

    const { userAccount } = useContext(MyContext)

    useEffect(() => {
        if (userAccount) {
            console.log("User Account True")
            router.push('/')
        } else {
            console.log("User Account False")
        }
    }, [userAccount])

    return (
        <div className="w-screen h-screen">
            <div className="h-screen lg:grid grid-cols-2">
                <div className='hidden lg:block'>
                    <Image
                        src="/pexels.jpg"
                        width={1080}
                        height={1350}
                        alt=""
                        className='h-screen w-full object-cover'
                    />
                </div>
                <div className="overflow-x-hidden  overflow-y-auto flex flex-col relative p-4 h-full gap-4">
                    {/* Back Button Here */}
                    <button
                        onClick={() => router.back()}
                        className='relative mt-5 font-bold flex items-center gap-1'
                    >
                        <MdOutlineArrowBackIosNew />
                        <span>Back</span>
                    </button>

                    <div className="max-w-[550px] w-full m-auto">
                        <div className='text-center'>
                            <Link
                                href={'/'}
                                className="text-[#29394E] text-5xl"
                            >
                                Blog
                            </Link>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
