import MainShowCase from './components/MainShowCase'
import Posts from './components/Posts'
import { blogdata } from './api/blogdata'
import Link from 'next/link'
import MainLayout from './components/MainLayout'

export default function Home() {

  return (
    <MainLayout>
      <div className="mt-20">
        <h1 className="mb-10 text-center font-bold text-5xl leading-normal">Welcome to Our Blog Website</h1>
        <MainShowCase />
        {/* Feature */}
        <div className='mt-20'>
          <h3 className='font-bold text-lg'>Featured blog post</h3>
          <Posts datas={blogdata.slice(0, 6)} />
        </div>
        {/* Trending */}
        <div className='mt-16'>
          <div className='mb-7 flex items-center justify-between gap-5'>
            <h3 className='font-bold text-3xl'>Trending</h3>
            <Link
              href={'/trending'}
              className='px-3 py-1 border rounded-md border-[#29394E] hover:text-white hover:bg-[#29394E]'
            >
              View All
            </Link>
          </div>
          <Posts datas={blogdata.slice(6, 9)} />
        </div>
        {/* Popular */}
        <div className='mt-16'>
          <div className='mb-7 flex items-center justify-between gap-5'>
            <h3 className='font-bold text-3xl'>Popular</h3>
            <Link
              href={'/popular'}
              className='px-3 py-1 border rounded-md border-[#29394E] hover:text-white hover:bg-[#29394E]'
            >
              View All
            </Link>
          </div>
          <Posts datas={blogdata.slice(9, 12)} />
        </div>
      </div>
    </MainLayout>
  )
}
