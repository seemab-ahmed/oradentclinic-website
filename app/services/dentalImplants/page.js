import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import DentalImplants from '@/component/DentalImplants'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
      <Carousel/>
      <div className='mt-32'>
    <DentalImplants/>
      </div>
    <AppointmentSection/>
      <CosmeticDentistry/>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
