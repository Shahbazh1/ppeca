import React from 'react'
import AboutUsHero from '../../components/aboutUs/AboutUsHero'
import HistorySection from '../../components/aboutUs/HistorySection'
import ChairmanMessage from '../../components/aboutUs/ChairmanMessage'
import SecretariatSection from '../../components/aboutUs/SecretariatSection'
import ObjectivesSection from '../../components/aboutUs/ObjectivesSection'
import OurRoleSection from '../../components/aboutUs/OurRoleSection'
import CorporateSocialResponsibility from '../../components/aboutUs/CorporateSocialResponsibility'
import MembershipSection from '../../components/aboutUs/MembershipSection'

export default function page() {
  return (
    <>
    <AboutUsHero/>
    <div className='px-2 pt-12 md:px-10 bg-[#f8fafc]'>
      <HistorySection/>
      <ChairmanMessage/>
      <SecretariatSection/>
      <ObjectivesSection/>
      <OurRoleSection/>
      <CorporateSocialResponsibility/>
      <MembershipSection/>
    </div>
    </>
  )
}
