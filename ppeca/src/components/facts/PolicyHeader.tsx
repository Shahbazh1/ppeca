'use client'

import React from 'react'

const PolicyHeader: React.FC = () => {
  return (
    <section className="w-full px-10 pb-8">
      <div className="max-w-6xl">
        {/* Title */}
        <h1 className="xl:text-[42px] lg:text-[36px] leading-[1.1] font-semibold text-[#0b2f4a]">
          Gazetted Petroleum Exploration & Production
          <br />
          Policy 2012
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-[#16a831] px-10 py-2 rounded-xs text-sm font-medium text-white hover:opacity-90 transition">
            Visit
          </button>

          <button className="border-[0.5px] border-[#16A83180]/90 rounded-xs px-6 py-2 text-sm font-medium text-[#0b2f4a] hover:bg-[#0b2f4a] hover:text-white transition">
            Download
          </button>
        </div>
      </div>
    </section>
  )
}

export default PolicyHeader
