"use client"

import React, { useContext } from 'react'
import { MyContext } from '../api/MyContext'
import { CgClose } from 'react-icons/cg'
import { BookMarkSVG } from './SvgsComponents'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { AiOutlineRight } from 'react-icons/ai'
import { toast } from 'react-toastify'
import 'animate.css';

function SideBookMark() {
    const { bookmark, setBookmark, sideBookmark, setSideBookmark } = useContext(MyContext)

    const notify = (notifyMessage) => toast(notifyMessage)

    const deleteBookmark = (title) => {
        setBookmark(bookmark.filter((item) => item.title !== title))
        notify('Post remove from Bookmarked')
    }

    return (
        <div className={`fixed top-0 left-0 h-screen bg-[#0000003f] z-20 overflow-hidden ${sideBookmark ? 'w-screen' : 'w-0'}`}>
            <div className={`max-w-[550px] bg-white h-full py-8 ps-6`}>
                <div className="flex items-center justify-between gap-3 pe-6">
                    <h1 className='flex items-center gap-1 text-2xl pe-6'>
                        <BookMarkSVG fill={'#29394E'} stroke={'none'} size={'40px'} />
                        <span>Bookmarked Post</span>
                    </h1>
                    <button
                        onClick={() => setSideBookmark(false)}
                        className='font-bold border-2 p-1 rounded-md border-black'
                    >
                        <CgClose size={20} />
                    </button>
                </div>

                <div className='mt-8 pe-3 h-[87vh] overflow-auto'>
                    {bookmark.length > 0 ? bookmark.map(({ id, image, tags, title, category, author, authorPic, published_date, reading_time, content }, index) => (
                        <div key={index} className="grid grid-cols-4 gap-3 items-start my-6 pb-6 border-b">
                            <div>
                                <img src={image} alt="" />
                            </div>
                            <div className="col-span-3 flex justify-between items-center gap-3">
                                <div>
                                    <h1 href={''} className="text-justify">{title}</h1>
                                    <div className="mt-2 flex items-center gap-2">
                                        <div>
                                            <FaUser size={24} />
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-sm'>{author}</h3>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <span>{category}</span>
                                                <span className='rounded-full bg-black w-[5px] h-[5px]'></span>
                                                <span>{reading_time} read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/post/${id}`}
                                        className='mt-2 font-bold flex items-center gap-2'
                                    >
                                        <span>Read more</span>
                                        <AiOutlineRight />
                                    </Link>
                                </div>
                                <button
                                    className="text-red-700"
                                    onClick={() => deleteBookmark(title)}
                                >
                                    <MdDelete size={22} />
                                </button>
                            </div>
                        </div>
                    )) : (
                        <p className='text-center'>You've not bookmarked any post</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SideBookMark
