"use client"

import React, { useState } from 'react'
import { blogdata } from '../api/blogdata'
import ShowCase from '../components/ShowCase'
import Posts from '../components/Posts'
import Pagination, { pageSize } from '../components/Pagination'
import MainLayout from '../components/MainLayout'

const text = "Home"

function Page() {
    const [datas, setDatas] = useState(blogdata.slice(0, pageSize))

    return (
        <MainLayout>
            <ShowCase data={blogdata[1]} text={text} />
            <div className='mt-5'>
                <h2 className='text-3xl leading-normal capitalize mt-5'>{text}</h2>

                <Posts datas={datas} />
                <Pagination setDatas={setDatas} />
            </div>
        </MainLayout>
    )
}

export default Page
