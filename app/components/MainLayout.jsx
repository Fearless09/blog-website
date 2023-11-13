"use client"

import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { BiSolidArrowToTop } from 'react-icons/bi'
import NewLetter from './NewLetter';
import SideBookMark from './SideBookMark';

function MainLayout({ children }) {
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 500) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <SideBookMark />
            <Navbar />
            <div className="container mx-auto mt-28 p-4 textjustify">
                {children}
            </div>
            <NewLetter />
            <button
                className={`rounded-full p-3 bg-[#29394E] text-white animate-bounce fixed right-5 bottom-5 ${isTop ? "opacity-0" : "opacity-100"}`}
                onClick={() => scrolToTop()}
            >
                <BiSolidArrowToTop size={24} />
            </button>

        </>
    )
}

export default MainLayout
