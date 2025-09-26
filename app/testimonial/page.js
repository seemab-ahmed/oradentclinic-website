import CallButton from '@/component/CallButton'
import Testimonial from '@/component/Testimonial'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='mt-4 sm:mt-42'>
      <Testimonial/>
    </div>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
