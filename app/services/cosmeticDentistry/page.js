import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import CosmeticDentistrySection from '@/component/CosmeticDentistrySection'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <CosmeticDentistrySection/>
    <AppointmentSection/>
      <CosmeticDentistry/>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
