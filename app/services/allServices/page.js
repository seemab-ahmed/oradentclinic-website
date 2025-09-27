import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import DentalServices from '@/component/DentalServices'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const AllServices = () => {
  return (
    <>
    <Carousel/>
    <div className='mt-20'>
      <DentalServices/>
    </div>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default AllServices
