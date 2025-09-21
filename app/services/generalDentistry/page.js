import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import GeneralDentistry from '@/component/GeneralDentistry'
import GeneralDentistryFeature from '@/component/GeneralDentistryFeature'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <GeneralDentistry/>
    <AppointmentSection/>
     <GeneralDentistryFeature/> 
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
