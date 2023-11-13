"use client"

import React, { useState } from 'react'
import ShowCase from '../components/ShowCase'
import { blogdata } from '../api/blogdata'
import Posts from '../components/Posts'
import Pagination, { pageSize } from '../components/Pagination'
import MainLayout from '../components/MainLayout'


const text = "Popular post"

function page() {
  const [datas, setDatas] = useState(blogdata.slice(0, pageSize))

  return (
    <MainLayout>
      <ShowCase data={blogdata[9]} text={text} />
      <div className='mt-5'>
        <h2 className='text-3xl leading-normal capitalize mt-5'>{text}</h2>
        <Posts datas={datas} />
        <Pagination setDatas={setDatas} />
      </div>
    </MainLayout>
  )
}

export default page
