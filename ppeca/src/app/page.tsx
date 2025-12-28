import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import MembersSection from "../components/home/MembrsSection";
import LatestNews from "../components/home/LatestNews";
import FAQs from "../components/home/FAQsSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
  <title>PPEPCA – Pakistan Petroleum Exploration Companies Association</title>

  <meta
    name="description"
    content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="PPEPCA – Pakistan Petroleum Exploration Companies Association"
  />
  <meta
    property="og:description"
    content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ppepca.com/" />
  <meta
    property="og:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="PPEPCA – Pakistan Petroleum Exploration Companies Association"
  />
  <meta
    name="twitter:description"
    content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
  />
  <meta
    name="twitter:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.ppepca.com/" />
</Head>


      <Hero />
      <AboutSection />
      <MembersSection />
      <LatestNews />
      <FAQs />
    </>
  );
}
