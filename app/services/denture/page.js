import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import Denture from '@/component/Denture'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Denture/>
    <AppointmentSection/>
      <CosmeticDentistry/>
       <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
