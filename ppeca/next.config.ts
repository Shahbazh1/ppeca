import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.ppepca.com.pk"],
  },
  async redirects() {
    return [
      {
        source: '/aboutppepca.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/members.html',
        destination: '/members',
        permanent: true,
      },
      {
        source: '/chairman_message.html',
        destination: '/about', // same page, optional redirect
        permanent: true,
      },
      {
        source: '/communitydevelopment/communitydevelopment.html',
        destination: '/', // redirect to homepage
        permanent: true,
      },
      {
        source: '/contactus.html',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
