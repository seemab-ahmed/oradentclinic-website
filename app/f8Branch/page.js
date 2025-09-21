import About from '@/component/About'
import AboutFBranch from '@/component/AboutFBranch'
import AppointmentSection from '@/component/AppointmentSection'
import CallF8 from '@/component/CallF8'
import DentistTeam from '@/component/DentistTeam'
import F8AppoinmentSection from '@/component/F8AppoinmentSection'
import F8DentistTeam from '@/component/F8DentistTeam'
import MapFBranch from '@/component/MapFBranch'
import OnlinePaymentSection from '@/component/OnlinePaymentSection'
import ServiceFBranch from '@/component/ServicesFBranch'
import Testimonial from '@/component/Testimonial'
import WhatsAppF8 from '@/component/WhatAppF8'
import React from 'react'

const page = () => {
  return (
    <>
    <MapFBranch/>
    <AboutFBranch/>
    <F8AppoinmentSection/>
    {/* <ServiceFBranch/> */}
    <F8DentistTeam/>
    <WhatsAppF8/>
    <CallF8/>
    <Testimonial/>
     {/* <OnlinePaymentSection/>  */}
    </>
  )
}

export default page
