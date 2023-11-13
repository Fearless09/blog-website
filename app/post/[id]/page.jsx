"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { blogdata } from '@/app/api/blogdata'
import { FaUser } from 'react-icons/fa'
import MainLayout from '@/app/components/MainLayout'

function Page() {
    const params = useParams()
    const { id } = params
    const data = blogdata.find((item) => item.id === Number(id))
    const { image, title, tags, content, reading_time, published_date, author, category } = data

    return (
        <MainLayout>
            <div className="sm:mt-16">
                <h2 className='text-3xl leading-normal mb-5 text-center font-bold'>{title}</h2>
                <img src={image} className='w-full' alt={title} />
            </div>
            <div className='lg:w-3/4 xl:w-2/3'>
                <p className='mt-3'>{content}</p>

                <div className="mt-4 flex items-center gap-4">
                    <div>
                        <FaUser size={35} />
                    </div>
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <div className='mt-1 flex items-center gap-2'>
                            <span>{new Date(published_date).toDateString()}</span>
                            <span className='rounded-full bg-black w-[6px] h-[6px]'></span>
                            <span>{reading_time} read</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-2'>
                    <h3>Categoty:</h3>
                    <button
                        className='border-2 rounded-md px-3 py-1 border-[#29394E]'
                    >
                        {category}
                    </button>
                </div>
                <div className='mt-2n'>
                    <h3 className='font-bold'>Tags</h3>
                    <div className='mt-1 flex items-center gap-2'>
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className='border-2 rounded-md px-3 py-1 border-[#29394E]'
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page
