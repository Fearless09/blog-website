import React, { useContext, useState } from 'react'
import { MyContext } from '../api/MyContext'
import { LiaSignOutAltSolid } from 'react-icons/lia'
import Image from 'next/image'

function NavUser() {
    const { userAccount, logOut } = useContext(MyContext)
    const [showSignOut, setShowSignOut] = useState(false)

    return (
        <div className='relative'>
            <button
                className='hidden md:flex items-center gap-2'
                onClick={() => setShowSignOut(!showSignOut)}
            >
                <Image
                    src={userAccount?.providerData[0].photoURL || '/demoUser.png'}
                    alt={userAccount?.providerData[0].displayName}
                    width={500}
                    height={500}
                    className='w-10 aspect-square rounded'
                />
                <h4 className='font-bold'>{userAccount?.providerData[0].displayName?.split(" ")[0]}</h4>
            </button>

            <button
                className={`absolute px-4 w-max overflow-hidden right-0 mt-2 bg-red-600 text-white rounded flex justify-center items-center gap-1 ${showSignOut ? "h-full py-2" : "h-0"}`}
                onClick={() => {
                    logOut()
                }}
            >
                <span>Sign Out</span>
                <LiaSignOutAltSolid size={24} />
            </button>
        </div>
    )
}

export default NavUser
