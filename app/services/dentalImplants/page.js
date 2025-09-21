import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import DentalImplants from '@/component/DentalImplants'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <DentalImplants/>
    <AppointmentSection/>
      <CosmeticDentistry/>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
