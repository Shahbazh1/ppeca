import React from 'react'
import MemberCompanies from '../../components/members/MemberCompanies'
import MemberHero from '../../components/members/MemberHero'
import LeadershipSection from '../../components/members/LeadershipSection'

export default function page() {
  return (
    <>
    <MemberHero/>
    <LeadershipSection/>
    <MemberCompanies/>
    </>
  )
}
