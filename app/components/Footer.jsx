"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MyContext } from '../api/MyContext'

const navLinks = [
    {
        name: "Home",
        href: "/home"
    },
    {
        name: "Popular",
        href: "/popular"
    },
    {
        name: "Trending",
        href: "/trending"
    },
]

function Footer() {
    const { setSideBookmark } = useContext(MyContext)

    return (
        <footer className='py-11 bg-[#F2F5F6]'>
            <div className="container mx-auto flex justify-between">
                {/* Logo */}
                <div>
                    <Link href={'/'} className='flex items-center gap-2'>
                        <div className='w-10 aspect-square'>
                            <Image
                                src="/blog.png"
                                alt="blog"
                                placeholder='empty'
                                width={500}
                                height={500}
                                sizes='1280px'
                            />
                        </div>
                        <div className="text-[#29394E] text-3xl">
                            Blog
                        </div>
                    </Link>
                </div>
                {/* Pages */}
                <div>
                    <h3 className='text-xl font-bold'>Pages</h3>
                    <ul className="mt-4 grid gap-3">
                        {navLinks.map(({ name, href }, index) => (
                            <Link
                                key={index}
                                href={href}
                                className='text-lg hover:underline'
                            >
                                {name}
                            </Link>
                        ))}
                        <button
                            className='relative bg-[#29394E] text-white px-3 py-1 rounded-md text-lg'
                            onClick={() => setSideBookmark(true)}
                        >
                            Bookmark
                        </button>
                    </ul>
                </div>
                {/* Social Media */}
                <div>
                    helo
                </div>
            </div>
            {/* Copy right */}
            <div>

            </div>
        </footer>
    )
}

export default Footer
