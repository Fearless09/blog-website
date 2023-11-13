import Link from 'next/link'
import React from 'react'

const navCTA = [
    { name: "sign up", href: "/signup" },
    { name: "login", href: "/login" }
]

function NavbarCTA() {
    return (
        <ul className="hidden md:flex justify-center items-center gap-7">
            {navCTA.map(({ name, href }, index) => (
                <Link
                    key={index}
                    href={href}
                    className={`rounded uppercase text-base font-normal px-4 py-2 border border-[#29394E] ${name.toLowerCase() === 'sign up' ? "bg-[#29394E] hover:bg-[#fff] text-white hover:text-[#29394E]" : "text-[#29394E] hover:bg-[#29394E] hover:text-white"}`}
                >
                    {name}

                </Link>
            ))}
        </ul>
    )
}

export default NavbarCTA
