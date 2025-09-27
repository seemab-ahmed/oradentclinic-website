import React from 'react'
import Map from '@/component/MapContacInfo'
import ContactForm from '@/component/ContactForm'
import WhatsappButton from '@/component/Whatsapp'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'

const page = () => {
  return (
    <>
    <Carousel />
    <div className='mt-3 sm:mt-32'>
      <Map />
    </div>
      <WhatsappButton />
      <CallButton />

    </>
  )
}

export default page
