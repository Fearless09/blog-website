import React from 'react'
import MainLayout from './components/MainLayout'
import { LoadingSVG } from './components/SvgsComponents'

function loading() {
    return (
        <MainLayout>
            <div className='flex item-center justify-center gap-3 text-center p-5'>
                <LoadingSVG size={'100px'} color={'#29394E'} />
            </div>
        </MainLayout>
    )
}

export default loading
