import React from 'react'
import AuthLayout from '../components/AuthLayout'
import { LoadingSVG } from '../components/SvgsComponents'

function loading() {
    return (
        <AuthLayout>
            <div className='flex item-center justify-center gap-3 text-center mt-7 p-5'>
                <LoadingSVG size={'100px'} color={'#29394E'} />
            </div>
        </AuthLayout>
    )
}

export default loading
