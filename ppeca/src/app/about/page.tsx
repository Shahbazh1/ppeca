import React from "react";
import AboutUsHero from "../../components/aboutUs/AboutUsHero";
import HistorySection from "../../components/aboutUs/HistorySection";
import ChairmanMessage from "../../components/aboutUs/ChairmanMessage";
import SecretariatSection from "../../components/aboutUs/SecretariatSection";
import ObjectivesSection from "../../components/aboutUs/ObjectivesSection";
import OurRoleSection from "../../components/aboutUs/OurRoleSection";
import CorporateSocialResponsibility from "../../components/aboutUs/CorporateSocialResponsibility";
import MembershipSection from "../../components/aboutUs/MembershipSection";
import Head from "next/head";
export default function page() {
  return (
    <>
      <Head>
  <title>About PPEPCA – Pakistan Petroleum Exploration Companies Association</title>

  <meta
    name="description"
    content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="About PPEPCA – Pakistan Petroleum Exploration Companies Association"
  />
  <meta
    property="og:description"
    content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ppepca.com/about" />
  <meta
    property="og:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About PPEPCA – Pakistan Petroleum Exploration Companies Association"
  />
  <meta
    name="twitter:description"
    content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
  />
  <meta
    name="twitter:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.ppepca.com/about" />
</Head>


      <AboutUsHero />
      <main className="px-2 pt-12 md:px-10 bg-[#f8fafc]">
        <HistorySection />
        <ChairmanMessage />
        <SecretariatSection />
        <ObjectivesSection />
        <OurRoleSection />
        <CorporateSocialResponsibility />
        <MembershipSection />
      </main>
    </>
  );
}
