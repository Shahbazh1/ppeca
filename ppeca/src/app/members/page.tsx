import React from "react";
import MemberCompanies from "../../components/members/MemberCompanies";
import MemberHero from "../../components/members/MemberHero";
import LeadershipSection from "../../components/members/LeadershipSection";
import Head from "next/head";
export default function page() {
  return (
    <>
      <Head>
        <title>PPEPCA Members</title>
        <meta
          name="description"
          content="Meet the members of PPEPCA and learn about their roles and contributions to petroleum exploration in Pakistan."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="PPEPCA Members" />
        <meta
          property="og:description"
          content="Meet the members of PPEPCA and learn about their roles and contributions to petroleum exploration in Pakistan."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ppeca-xm2j.vercel.app/members"
        />
        <meta
          property="og:image"
          content="https://ppeca-xm2j.vercel.app/images/members-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPEPCA Members" />
        <meta
          name="twitter:description"
          content="Meet the members of PPEPCA and learn about their roles and contributions to petroleum exploration in Pakistan."
        />
        <meta
          name="twitter:image"
          content="https://ppeca-xm2j.vercel.app/images/members-og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ppeca-xm2j.vercel.app/members" />
      </Head>

      <MemberHero />
      <LeadershipSection />
      <MemberCompanies />
    </>
  );
}
