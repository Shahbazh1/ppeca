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
        <title>About PPEPCA - Petroleum Exploration in Pakistan</title>
        <meta
          name="description"
          content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About PPEPCA - Petroleum Exploration in Pakistan"
        />
        <meta
          property="og:description"
          content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ppeca-xm2j.vercel.app/about" />
        <meta
          property="og:image"
          content="https://ppeca-xm2j.vercel.app/images/about-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About PPEPCA - Petroleum Exploration in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Learn about PPEPCA, its history, chairman's message, and corporate social responsibility initiatives."
        />
        <meta
          name="twitter:image"
          content="https://ppeca-xm2j.vercel.app/images/about-og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ppeca-xm2j.vercel.app/about" />
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
