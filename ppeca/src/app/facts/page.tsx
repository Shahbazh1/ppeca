import PolicyHeader from "../../components/facts/PolicyHeader";
import PoliciesAndRegulations from "../../components/facts/PoliciesAndRegulations";
import PakistanPetroleumInformation from "../../components/facts/PakistanPetroleumInformation";
import PakistanPetroleumCards from "../../components/facts/PakistanPetroleumCards";
import Head from "next/head";
export default function Facts() {
  return (
    <main className="md:p-10 p-5 bg-[#f8fafc] flex-col flex gap-8 md:gap-16">
      <Head>
        <title>PPEPCA Facts & Links</title>
        <meta
          name="description"
          content="Discover important facts, useful links, and resources related to petroleum exploration in Pakistan through PPEPCA."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="PPEPCA Facts & Links" />
        <meta
          property="og:description"
          content="Discover important facts, useful links, and resources related to petroleum exploration in Pakistan through PPEPCA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ppeca-xm2j.vercel.app/facts" />
        <meta
          property="og:image"
          content="https://ppeca-xm2j.vercel.app/images/facts-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPEPCA Facts & Links" />
        <meta
          name="twitter:description"
          content="Discover important facts, useful links, and resources related to petroleum exploration in Pakistan through PPEPCA."
        />
        <meta
          name="twitter:image"
          content="https://ppeca-xm2j.vercel.app/images/facts-og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ppeca-xm2j.vercel.app/facts" />
      </Head>

      <PolicyHeader />
      <PoliciesAndRegulations />
      <PakistanPetroleumInformation />
      <PakistanPetroleumCards />
    </main>
  );
}
