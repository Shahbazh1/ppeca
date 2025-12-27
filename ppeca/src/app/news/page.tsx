import LatestNewsHero from "../../components/news/LatestNewsHero";
import NewsLetters from "../../components/news/NewsLetters";
import InveryData from "../../components/news/InveryData";
import DirectoryOfTrainingProviders from "../../components/news/DirectoryOfTrainingProviders";
import Head from "next/head";
export default function Page() {
  return (
    <>
      <Head>
        <title>PPEPCA News & Events</title>
        <meta
          name="description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="PPEPCA News & Events" />
        <meta
          property="og:description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ppeca-xm2j.vercel.app/news" />
        <meta
          property="og:image"
          content="https://ppeca-xm2j.vercel.app/images/news-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPEPCA News & Events" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news, events, and press releases from PPEPCA."
        />
        <meta
          name="twitter:image"
          content="https://ppeca-xm2j.vercel.app/images/news-og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ppeca-xm2j.vercel.app/news" />
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
