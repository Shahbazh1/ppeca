// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// images: {
//     domains: [
//       "api.ppepca.com"
//     ],
//   },};

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.ppepca.com"],
  },
  async redirects() {
    return [
      {
        source: '/aboutppepca.html', // old URL
        destination: '/about',       // new route
        permanent: true,             // 301 redirect
      },
      // You can add more redirects here
      // {
      //   source: '/contactppepca.html',
      //   destination: '/contact',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
