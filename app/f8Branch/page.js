import About from '@/component/About'
import AboutFBranch from '@/component/AboutFBranch'
import AboutI8Branch from '@/component/AboutI8Branch'
import AppointmentSection from '@/component/AppointmentSection'
import CallF8 from '@/component/CallF8'
import Carousel from '@/component/Carousel'
import DentistTeam from '@/component/DentistTeam'
import F8AppoinmentSection from '@/component/F8AppoinmentSection'
import F8DentistTeam from '@/component/F8DentistTeam'
import { F8Map } from '@/component/F8Map'
import MapFBranch from '@/component/MapFBranch'
import OnlinePaymentSection from '@/component/OnlinePaymentSection'
import ServiceFBranch from '@/component/ServicesFBranch'
import SocialReviewsSection from '@/component/socialReviewsSection '
import Testimonial from '@/component/Testimonial'
import WhatsAppF8 from '@/component/WhatAppF8'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel />
    {/* <MapFBranch/> */}
    {/* <AboutFBranch/> */}
    <AboutI8Branch/>
    <F8AppoinmentSection/>
    {/* <ServiceFBranch/> */}
    <F8DentistTeam/>
    <SocialReviewsSection/>
    <F8Map/>
    <WhatsAppF8/>
    <CallF8/>
    <Testimonial/>
     {/* <OnlinePaymentSection/>  */}
    </>
  )
}

export default page
