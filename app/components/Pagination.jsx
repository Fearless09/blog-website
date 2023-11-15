"use client"
import React, { useState, useEffect } from 'react'
import { blogdata } from '../api/blogdata'
import { FaAnglesRight } from 'react-icons/fa6'
import { FaAnglesLeft } from 'react-icons/fa6'

export const pageSize = 9

function Pagination({ setDatas }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [endIndex, setEndIndex] = useState(pageSize)
    const [startIndex, setStartIndex] = useState(0)

    const totalPages = Math.ceil(blogdata.length / pageSize);

    useEffect(() => {
        setEndIndex(currentPage * pageSize)
        setStartIndex((currentPage - 1) * pageSize)
        setDatas(blogdata.slice(startIndex, endIndex))

        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }, [currentPage, endIndex, startIndex])

    return (
        <div className='mt-5 flex justify-center items-center gap-3'>
            <button
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1}
                className='border border-[#29394E] rounded py-2 px-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <FaAnglesLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={currentPage === pageNumber ? "bg-[#29394E] text-white px-3 py-1 rounded" : ""}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={currentPage === totalPages}
                className='border border-[#29394E] rounded py-2 px-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <FaAnglesRight />
            </button>
        </div>
    )
}

export default Pagination
