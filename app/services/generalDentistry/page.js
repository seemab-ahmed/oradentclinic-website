import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import GeneralDentistry from '@/component/GeneralDentistry'
import GeneralDentistryFeature from '@/component/GeneralDentistryFeature'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel/>
      <div className='mt-32'>
    <GeneralDentistry/>
    </div>
    <AppointmentSection/>
     <GeneralDentistryFeature/> 
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
