import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import TeethFilling from '@/component/TeethFilling'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <TeethFilling/>
    <AppointmentSection/>
      <CosmeticDentistry/>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
