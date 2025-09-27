import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import CosmeticDentistrySection from '@/component/CosmeticDentistrySection'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel/>
    <div className='mt-20'>
    <CosmeticDentistrySection/>
    </div>
    <AppointmentSection/>
      <CosmeticDentistry/>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
