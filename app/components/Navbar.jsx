"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import { MyContext } from '../api/MyContext'
import { usePathname } from 'next/navigation'
import { BlogSVG, BookMarkSVG } from './SvgsComponents'
import NavbarCTA from './NavbarCTA'
import NavUser from './NavUser'
import Image from 'next/image'

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

function Navbar() {
    const currentPath = usePathname();
    const { bookmark, setSideBookmark, userAccount } = useContext(MyContext)

    return (
        <nav className='fixed top-0 w-full z-10 bg-[#FFFFFF] shadow border-b border-black'>
            <div className="container mx-auto flex justify-between items-center px-4 py-7">
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


                {/* NAV LINK */}
                <ul className="flex justify-center items-center gap-2 md:gap-3">
                    {navLinks.map(({ name, href }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className='text-center text-lg text-[#29394E]'
                        >
                            <span className="px-2 py-1 block">
                                {name}
                            </span>
                            <span className={`mx-auto h-[2px] rounded-full bg-[#29394E] block ${currentPath.toLowerCase() === `/${name.toLowerCase()}` ? "w-full" : "w-0"}`}></span>
                        </Link>
                    ))}
                    {/* Bookmark Button */}
                    <button
                        className='relative'
                        title={`You've ${bookmark.length} post Bookmarked`}
                        onClick={() => setSideBookmark(true)}
                    >
                        {bookmark.length > 0 && (
                            <span className='absolute top-[-50%] right-0 translate-x-1/2 translate-y-1/2 h-[24px] w-[24px] flex justify-center items-center rounded-full font-bold text-[#0074E4] bg-[#c4c8c9ce] p-0 m-0'>
                                {bookmark.length}
                            </span>
                        )}
                        <BookMarkSVG fill={bookmark.length > 0 ? '#29394E' : 'none'} stroke={bookmark.length === 0 ? '#29394E' : 'none'} size={'30px'} />
                        <span className={`mx-auto h-[2px] rounded-full bg-[#29394E] mt-1 block  ${currentPath.toLowerCase() === `/bookmark` ? "w-full" : "w-0"}`}></span>
                    </button>
                </ul>

                {/* CTA */}
                {userAccount ? (
                    <NavUser />
                ) : (
                    <NavbarCTA />
                )}
            </div>
        </nav>
    )
}

export default Navbar
