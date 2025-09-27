import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import Testimonial from '@/component/Testimonial'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel />
    <div className='mt-4 sm:mt-42'>
      <Testimonial/>
    </div>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
