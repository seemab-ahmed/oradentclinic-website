import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <AppointmentSection/>
      <CosmeticDentistry/>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
