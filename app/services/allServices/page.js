import CallButton from '@/component/CallButton'
import DentalServices from '@/component/DentalServices'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const AllServices = () => {
  return (
    <>
      <DentalServices/>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default AllServices
