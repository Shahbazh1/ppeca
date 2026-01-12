import PolicyHeader from "../../components/facts/PolicyHeader";
import PoliciesAndRegulations from "../../components/facts/PoliciesAndRegulations";
import PakistanPetroleumInformation from "../../components/facts/PakistanPetroleumInformation";
import PakistanPetroleumCards from "../../components/facts/PakistanPetroleumCards";
import Head from "next/head";
export default function Facts() {
  return (
    <main className="md:p-10 p-5 bg-[#f8fafc] flex-col flex gap-8 md:gap-16">
      <Head>
  <title>Contact PPEPCA – Pakistan Petroleum Exploration Companies</title>

  <meta
    name="description"
    content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Contact PPEPCA – Pakistan Petroleum Exploration Companies"
  />
  <meta
    property="og:description"
    content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ppepca.com/contact" />
  <meta
    property="og:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact PPEPCA – Pakistan Petroleum Exploration Companies"
  />
  <meta
    name="twitter:description"
    content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
  />
  <meta
    name="twitter:image"
    content="https://www.ppepca.com/logo.png"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.ppepca.com/contact" />
</Head>


      <PolicyHeader />
      <PoliciesAndRegulations />
      {/* <PakistanPetroleumInformation /> */}
      <PakistanPetroleumCards />
    </main>
  );
}
