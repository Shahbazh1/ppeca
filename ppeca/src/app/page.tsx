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
        <title>PPEPCA - Petroleum Exploration in Pakistan</title>
        <meta
          name="description"
          content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="PPEPCA - Petroleum Exploration in Pakistan"
        />
        <meta
          property="og:description"
          content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ppeca-xm2j.vercel.app/" />
        <meta
          property="og:image"
          content="https://ppeca-xm2j.vercel.app/images/home-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PPEPCA - Petroleum Exploration in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Explore PPEPCA's initiatives, projects, and contributions to petroleum exploration in Pakistan."
        />
        <meta
          name="twitter:image"
          content="https://ppeca-xm2j.vercel.app/images/home-og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ppeca-xm2j.vercel.app/" />
      </Head>

      <Hero />
      <AboutSection />
      <MembersSection />
      <LatestNews />
      <FAQs />
    </>
  );
}
