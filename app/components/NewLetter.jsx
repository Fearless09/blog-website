import React from 'react'

function NewLetter() {
    return (
        <div className="mt-16 px-4 py-32 bg-[#98A0A3] bg-[url('/circleImage.svg')] bg-cover bg-left bg-no-repeat text-white">
            <div className="container mx-auto lg:flex items-center justify-between gap-5">
                <div className='text-center lg:text-left'>
                    <h1 className='font-bold text-5xl leading-normal'>Sign up for our newsletter</h1>
                    <p className='mt-3 lg:mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <form className='mt-16 lg:mt-0 flex gap-3'>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        required id="email"
                        className="py-3 px-4 bg-white text-[#98A0A3] rounded-md flex-auto lg:min-w-[350px] w-full"
                    />
                    <button className='sm:px-8 px-4 py-3 font-bold bg-white text-[#98A0A3] rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewLetter
