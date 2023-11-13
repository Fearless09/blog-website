import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

function ShowCase({ data, text }) {
    const { id, image, title, tags, content, reading_time, published_date, author, category } = data

    return (
        <div className='mt-20 pb-20 border-b border-[#29394E]'>
            <h1 className='text-center font-bold text-5xl leading-normal'>Welcome to our {text} page</h1>
            <div className="mt-5">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    sizes='860px'
                    className='w-full'
                    alt={title}
                />
            </div>
            <div className='lg:w-3/4 xl:w-2/3'>
                <h2 className='text-3xl leading-normal mt-5'>{title}</h2>
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
                <Link
                    href={`post/${id}`}
                    className='mt-3 font-bold flex items-center gap-2'
                >
                    <span>Read more</span>
                    <AiOutlineRight />
                </Link>
            </div>
        </div>
    )
}

export default ShowCase
