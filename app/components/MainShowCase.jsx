import React from 'react'
import { blogdata } from '../api/blogdata'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'

function MainShowCase() {
    const { id, image, title, tags, content, reading_time, published_date, author, category } = blogdata[0]
    return (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-7">
            <div>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    className="w-full"
                    alt={title}
                />
            </div>
            <div>
                <div className="flex items-center gap-2 font-bold">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className='border rounded-md px-3 py-1 border-[#29394E]'
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <h1 className="text-3xl leading-normal mt-3">{title}</h1>
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

export default MainShowCase
