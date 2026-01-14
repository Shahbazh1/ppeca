import LatestNewsHero from "../../components/news/LatestNewsHero";
import NewsLetters from "../../components/news/NewsLetters";
import InveryData from "../../components/news/InveryData";
import DirectoryOfTrainingProviders from "../../components/news/DirectoryOfTrainingProviders";
import Head from "next/head";
export default function Page() {
  return (
    <>
      <Head>
        <title>
          PPEPCA News & Events – Petroleum Exploration Updates Pakistan
        </title>

        <meta
          name="description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="PPEPCA News & Events – Petroleum Exploration Updates Pakistan"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ppepca.com/news" />
        <meta property="og:image" content="https://www.ppepca.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PPEPCA News & Events – Petroleum Exploration Updates Pakistan"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />
        <meta name="twitter:image" content="https://www.ppepca.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.ppepca.com/news" />
      </Head>

      <LatestNewsHero />
      <div className="xl:px-[4.875rem] lg:px-[4.3875rem] md:px-[3.9rem] sm:px-[3.4125rem] px-[2.925rem] bg-[#f8fafc]">
        <NewsLetters />
        <InveryData />
        <DirectoryOfTrainingProviders />
      </div>
    </>
  );
}
