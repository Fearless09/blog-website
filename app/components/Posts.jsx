"use client"

import React, { useState, useContext } from 'react'
import { MyContext } from '../api/MyContext'
import Image from 'next/image'
import { AiOutlineRight } from 'react-icons/ai'
import { BookMarkSVG } from './SvgsComponents'
import Link from 'next/link'
import { toast } from 'react-toastify'

function Posts({ datas }) {
    const [isFav, setIsFav] = useState(false)
    const { bookmark, setBookmark } = useContext(MyContext)

    const notify = (toastMessage) => toast(toastMessage)

    const BookMarkFunc = (newBookmark) => {
        const arrayIndex = bookmark.findIndex((item) => item.title === newBookmark.title);

        if (arrayIndex === -1) {
            setBookmark([...bookmark, newBookmark]);
            notify('Post Bookmarked')
        } else {
            const updatedArray = [...bookmark];
            updatedArray.splice(arrayIndex, 1);
            setBookmark(updatedArray);
            notify('Post removed from Bookmarked')
        }

        setIsFav(!isFav)
    }

    return (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 justify-center">
            {datas?.map(({ id, image, tags, title, category, author, authorPic, published_date, reading_time, content }, index) => (
                <div key={index}>
                    <div className='relative'>
                        <img
                            src={image}
                            alt={title}
                            className='w-full'
                        />
                        <button
                            className='absolute top-2 right-2 p-2 rounded-full bg-[#c4c8c9ce]'
                            onClick={() => BookMarkFunc({ id, image, tags, title, category, author, authorPic, published_date, reading_time, content })}
                            title={isFav ? 'Remove from bookmark' : 'Add to bookmark'}
                        >
                            <BookMarkSVG
                                fill={bookmark.findIndex((item) => item.title === title) != -1 ? '#0074E4' : 'none'}
                                stroke={bookmark.findIndex((item) => item.title === title) != -1 ? 'none' : '#0074E4'}
                            />
                        </button>
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        {tags?.map((tag, index) => (
                            <button key={index} className='border rounded-md px-3 py-1 border-[#29394E]'>
                                {tag}
                            </button>
                        ))}
                        <span className='ms-2'>{reading_time}</span>
                    </div>
                    <h1 className='mt-5 text-xl'>{title}</h1>
                    <p className='mt-2'>{content}</p>
                    <Link
                        href={`post/${id}`}
                        className='mt-3 font-bold flex items-center gap-2'
                    >
                        <span>Read more</span>
                        <AiOutlineRight />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Posts
