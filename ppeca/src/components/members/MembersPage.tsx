// components/CompanyCard.tsx
'use client'
export const dynamic = "force-dynamic";

import React from "react";
import { useSearchParams } from "next/navigation";
import AEPL_LOGO from "../../../public/images/companies_logo/AEPL_LOGO-removebg-preview.png";
import GHPL_LOGO from "../../../public/images/companies_logo/GHPL_LOGO-removebg-preview.png";
import KPOGCL_LOGO from "../../../public/images/companies_logo/KPOGCL_LOGO-removebg-preview.png";
import KUFPEC_LOGO from "../../../public/images/companies_logo/KUFPEC_LOGO.png";
import KUFPEC_NEW_LOGO from '../../../public/images/companies_logo/KUFPEC_NEW_LOGO.png'
import MARI_LOGO from "../../../public/images/companies_logo/MARI_LOGO-removebg-preview.png";
import MOL_LOGO from "../../../public/images/companies_logo/MOL_LOGO-removebg-preview.png";
import OGX_LOGO from "../../../public/images/companies_logo/OGX_LOGO.png";
import UEP_LOGO from "../../../public/images/companies_logo/UEP_LOGO.jpg";
import UEP_NEW_LOGO from '../../../public/images/companies_logo/UEP_NEW_LOGO.jpeg';
import OP_LOGO from "../../../public/images/companies_logo/OP_LOGO.jpg";
import PGNIG_LOGO from "../../../public/images/companies_logo/PGNIG_LOGO-removebg-preview.png";
import POL_LOGO from "../../../public/images/companies_logo/POL_LOGO-removebg-preview.png";
import PPL_LOGO from "../../../public/images/companies_logo/PPL_LOGO-removebg-preview.png";
import PRIME_LOGO from "../../../public/images/companies_logo/PRIME_LOGO-removebg-preview.png";
import SAIF_LOGO from "../../../public/images/companies_logo/SAIF_LOGO-removebg-preview.png";



import Image from "next/image";
import { Suspense } from "react";

// Array of company details
const companyData = [
  {
    id: 11,
    logo: AEPL_LOGO,
    name: "Al-Haj Enterprises (Private) Limited",
    address:
      "Street No. 29, Plot No. 145, Etihad Plaza, I & T Centre, Sector G-9/1, Islamabad",
    ceo: "Mr. Taj Mohammad Afridi",
    designation: "Chief Executive Officer",
    description: [
  "Al-Haj Enterprises (Private) Limited (AEPL) is a recently incorporated Pakistani Exploration and Production Company. AEPL is a part of the AL-Haj Group of Companies involved in Logistics, Oil and Goods Transportation, Textiles, Metals, and manufactures of light and heavy vehicles.",
  "Al-Haj Group, through its subsidiary AL-Haj FAW Motors, has a Joint Venture with China for manufacturing of light and heavy transport vehicles.",
  "Al-Haj Enterprises (Private) Limited (AEPL) was awarded two Blocks: Block No. 3271-6 Potwar South and Block No. 3169-4 Baska North, during the bid round held in 2013.",
  "To-date, AEPL has completed acquisition of 135 kms of new 2-D Seismic in Potwar South Block. The data is now being processed with the acquisition contractors, M/s Geofizyka Krakow of Poland. Preparations are in hand to start 2-D Seismic Acquisition in Block No. 3169-4 Baska North shortly.",
  "AEPL’s major shareholder is Senator Taj Muhammad Afridi. AEPL has a strong Technical and Management team comprising senior personnel from the industry.",
  "AEPL’s vision and mission is to become a leading Exploration and Production Company, expanding its operations both locally and abroad."
],
    telephone: "92 (51) 2264460-63",
    fax: "92 (51) 2264465",
    website: "#",
  },
  {
    id: 4,
    logo: GHPL_LOGO, // Replace GHPL_logo with the actual imported logo variable if available
    name: "Government Holdings (Private) Limited",
    address: "Petroleum House, 5th & 7th Floor, Sector G-5/2, Islamabad",
    ceo: "Mr. Masood Nabi",
    designation: "CEO/Managing Director",
    description: [
  "Government Holdings (Private) Limited (GHPL) was established in 2000 as a private limited company, 100% owned by the Government of Pakistan and registered under the Companies Ordinance, 1984. Paid-up Capital of the company is Rs. 250 Million.",
  "The company was created to separate the commercial and regulatory functions previously handled jointly by the Ministry of Petroleum & Natural Resources. Government of Pakistan’s shares in upstream petroleum joint ventures acquired under petroleum policies prior to Petroleum Policy 2001 were transferred to GHPL, making it the vehicle to manage those interests. The 5% carried interest in all concessions at the exploration stage and 15%-25% shareholding in case of commercial discovery was withdrawn in Petroleum Policy 2001. GHPL was, however, given the right to make investments on a full participation basis like any other local company in on-shore petroleum E&P joint ventures.",
  "GHPL participates in all Joint Ventures as a non-operator. Currently, there are 56 upstream petroleum joint ventures on-shore with GHPL working interest: 21 Onshore Exploration Licenses with 5% carried interest and 35 Development & Production Leases with 12.5% to 25% working interest. GHPL’s average production share was 43,742 BOE/Day in 2009.",
  "GHPL acts as a Licensee in off-shore joint ventures, holding interests in 17 offshore exploration licenses under Production Sharing Agreements (PSAs). It ensures implementation of agreed work programmes and approval/recording of budgets/expenditures by these joint ventures.",
  "GHPL is a non-operating partner with local and foreign oil and gas exploration and production companies functioning as operators. Major operating companies in partnership with GHPL include BP, BHP Billiton, Eni, OMV, Petronas Carigali, Paige, Nikoresources, Hycarbex, MOL, OPII, OGDCL, PPL, POL, and PEL.",
  "Secretary MP&NR is the Chairman of the company’s Board of Directors.",
  "For more detailed information, please visit GHPL’s website: www.ghpl.com.pk."
]
,
    telephone: "92 (51) 9211247, 92 (51) 9213972",
    fax: "92 (51) 051-9211236-37, 051-9211239-40",
    website: "https://www.ghpl.com.pk",
  },
  {
    id: 12,
    logo: KUFPEC_NEW_LOGO, // Replace KUFPEC_logo with the actual imported logo variable if available
    // name: "Kirthar Pakistan Holdings B.V. (Formerly known as Premier – KUFPEC Pakistan B.V)",
    name:"KUFPEC Pakistan",
    address:
      "3rd Floor, ONE Expressway, Gulberg Greens Entrance, Islamabad Expressway, Postal Code 44000, Islamabad, Pakistan",
    ceo: "Mr. Ali Taha Al Temimi",
    designation: "Country Manager",
    description: [
      "Kuwait Foreign Petroleum Exploration Company K.S.C.C. (KUFPEC) was established in 1981 as a wholly owned subsidiary of Kuwait Petroleum Corporation (KPC), owned by the State of Kuwait. The principal activities of KUFPEC are the exploration, development and production of oil and gas in both on-shore and off-shore, outside the State of Kuwait. KUFPEC is currently active in 10 countries, in 3 core regions spanning over 5 continents. KUFPEC is active in Asia and Euro-Africa Region (Pakistan, Yemen, Malaysia Indonesia, United Kingdom, Mauritania and Egypt) and Canada & Australia Region; (Australia and Canada) and engaged in exploration, development and production of oil and gas.",
      "KUFPEC has been operating in Pakistan through its subsidiaries i.e., Kirthar Pakistan B.V., PKP Kirthar B.V., KUFPEC Pakistan B.V., PKP Exploration 2 Limited, and PKP Kadanwari Limited (the “KUFPEC Subsidiaries”).  ",
      "KUFPEC Subsidiaries have working interests in Qadirpur (13.25%), Bhit / Badhra (34%), Kadanwari (15.79%), and Zamzama (9.375%) gas fields, where gas fields are operated by Oil & Gas Development Company Limited (OGDCL), Prime Pakistan Limited (formerly known as Eni Pakistan Limited) and Orient Petroleum (OPL). All these gas producing fields cater for domestic, commercial, and industrial sector needs.  Sui Northern Gas Pipelines Limited (SNGPL) and Sui Southern Gas Company Limited (SSGCL) are major customers of KUFPEC Subsidiaries.",
      "KUFPEC Pakistan through its subsidiary- Kirthar Pakistan B.V. assumed the role of Operator E&P Company in Pakistan with the award of “Jati” Exploration Block on Government- to- Government basis in October 2012 in Sindh Province; 2nd Exploration Block “Paharpur” was awarded in March 2015 in KP Province and 3rd Exploration Block “Makhad” was signed on 22nd May 2019 with the Government of Pakistan.  ",
      "KUFPEC Pakistan is a key member of Pakistan Petroleum Exploration and Production Companies Association (PPEPCA) where its presence, while having Chairmanship of PPEPCA and foreign producer of gas is recognized as amongst the main partners to the Government of Pakistan in meeting country’s energy challenges successfully for over past two decades.",
      "KUFPEC Pakistan assets are being managed through its Area Office Pakistan, Islamabad."
    ],
    telephone: "92 (51) 8494400",
    fax: "92 (51) 8484400",
    website: "https://www.kufpec.com.pk",
    email: "mail@kufpec.com.pk",
  },
  {
    id: 14,
    logo: KPOGCL_LOGO, // Replace KPOGCL_logo with the actual imported logo variable if available
    name: "Khyber Pakhtunkhwa Oil and Gas Company Limited (KPOGCL)",
    address:
      "3rd Floor, Ali Towers, University Road (Opposite Custom’s House), Peshawar, Pakistan",
    ceo: "Mr. Nasir Khan",
    designation: "Chief Executive Officer",
    description: [
      "Khyber Pakhtunkhwa Government (KPK), being cognizant of Oil & Gas reserves, established Khyber Pakhtunkhwa Oil and Gas Company Limited (KPOGCL) - a landmark achievement of the present Government. KPOGCL is not only entrusted with the responsibility of carrying out Exploration and Production (E&P) activities itself, but is also responsible for attracting more E&P Companies by ensuring them the requisite security and first-hand sharing of technological data, thus acting as a Fast Track implementation of E&P.",
      "KPOGCL, being KPK Government sponsored, acts as an interface between the E&P Companies and all other Government related agencies, performing the role of 'One Window of Operations'. It is also the Provincial Holding Company (PHC) under the Petroleum Policy – 2012 and facilitates E&P companies.",
      "The company promotes all E&P activities throughout KPK by investing in producing and exploration blocks and procurement of heavy equipment (e.g., rigs and seismic data acquisition recorders), aimed at generating revenue and fulfilling the province's and country’s energy requirements.",
      "The company is a member of the Production & Exploration Companies Association (PPEPCA) and is run by an independent Board of Directors, mostly experts from the private sector. Though newly established, with strong support from the KPK Government, KPOGCL has rapidly developed its capabilities to engage in all E&P activities while ensuring security for other E&P companies operating in the region.",
      "With KPK Government determined to boost the province's economy, communication infrastructure has been improved, and hidden reserves of oil and gas are being developed initially through indigenous institutions led by KPOGCL and later through multinational E&P companies. KPOGCL continues its role as 'One Window of Operation' facilitating fast-track implementation of E&P, generating revenue, creating jobs, and stimulating economic activity worth billions.",
    ],
    telephone: "92 (91) 9216029, 92 (91) 9216283",
    fax: "92 (91) 9216295",
    website: "#", // Add actual website if available
  },
  {
    id: 3,
    logo: MARI_LOGO, // Replace MARI_logo with the actual imported logo variable if available
    name: "MariEnergies Limited – Corporate Profile (FY 2025)",
    address:
      "Plot No. 21, Mauve Area, 3rd Road, G-10/4, P.O. Box O. No. 1614, Islamabad",
    ceo: "Mr. Faheem Haider",
    designation: "Managing Director/CEO",
    description: [
    "MariEnergies Limited is Pakistan’s one of the largest indigenous Exploration & Production (E&P) company, playing a pivotal role in the country’s energy security and economic development. The name MARI originates from the Mari Gas Field—the largest gas field in Pakistan—discovered in 1957, forming the foundation of the company’s legacy.",

    "Core Strengths & Operations (as of FY 2025): MariEnergies operates a diversified upstream portfolio spanning exploration, development, and production of hydrocarbons. As of FY 2025, the company manages 72 licenses and 15 Development & Production Leases covering approximately 155,703 square kilometers, including one offshore block in Abu Dhabi.",

    "Production capacity stands at approximately 127,000 barrels of oil equivalent per day (BOE/day). Total reserves and resources (2P + 2C) are estimated at around 952 million BOE as of 30 June 2025. Between FY 2020 and FY 2025, the company invested over USD 1.1 billion in exploration and development activities.",

    "Market Position & Ownership (FY 2025): MariEnergies is listed on the Pakistan Stock Exchange (PSX) with a market capitalization of approximately USD 3.2 billion as of 9 January 2026. The company is part of the Fauji Foundation Group, Pakistan’s largest social hybrid enterprise.",

    "Shareholding structure comprises Fauji Foundation holding 40% with management rights, Government of Pakistan 20%, OGDCL 20%, and General Public 20%.",

    "Strategic Outlook – Vision 2030: MariEnergies aims to strengthen its core business by targeting production of 150–175 thousand BOE per day by 2030 while maintaining a 100% reserve replacement ratio and increasing oil contribution to around 30% of total production.",

    "The company plans to diversify beyond hydrocarbons by expanding into critical minerals such as copper and gold, technology, data centers, renewables, and green hydrogen, allocating 20–30% of future investments to diversified sectors.",

    "ESG & Sustainability initiatives focus on carbon footprint reduction through carbon capture and CO₂ utilization projects, enhanced governance frameworks, operational efficiency, and continued community development and CSR programs.",

    "Mari Services Division, established in 2014, serves as the company’s in-house integrated E&P services arm, providing seismic acquisition, drilling, processing, and reservoir characterization services, particularly in technically complex and security-sensitive areas.",
  
    "Value Creation & National Contribution (FY 2020–FY 2025): Over the five-year period ending FY 2025, MariEnergies contributed approximately USD 1.7 billion to the national exchequer, delivered a total shareholder return of ~410%, achieved market capitalization growth of ~689%, and invested over PKR 13 billion in CSR initiatives.",
  ],
    telephone: "92 (51) 2297683-4, 051-111-410-410",
    fax: "92 (51) 2297686",
    website: "#", // Add actual website if available
  },
  {
    id:9,
    logo: MOL_LOGO, // Replace MOL_logo with the actual imported logo variable if available
    name: "MOL Pakistan Oil and Gas Co. B.V.",
    address:
      "Islamabad Stock Exchange Towers, Floor No. 17, 55-B, Jinnah Avenue, Islamabad",
    ceo: "Mr. Laszlo Zsolt Adam",
    designation: "Managing Director/Chief Executive Officer",
    description: [
  "MOL strives to promote the welfare of the community and is actively engaged in community development in the TAL concession area. The company has provided basic health unit facilities at Gurguri and surrounding areas, constructed an eight-bed hospital, and upgraded various schools and boys' colleges in Kohat and Hangu.",
  "In 2002, MOL built an examination hall for 100 students near the Boys School at Gurguri.",
  "The company is planning to drill two water wells in the villages of Gurguri and Urbashi, and repair the road from Terri to Gurguri."
]
,
    telephone: "92 (51) 111-665-725, 92 (51) 2655801-10",
    fax: "92 (51) 2655828",
    website: "#", // Add actual website if available
  },
  {
    id: 1,
    logo: OGX_LOGO, // Replace OGDCL_logo with the actual imported logo variable if available
    name: "Oil and Gas Development Company Limited (OGDCL)",
    address: "OGDCL House, F-6/1, Jinnah Avenue, Islamabad",
    ceo: "Mr. Ahmed Hayat Lak",
    designation: "Managing Director/CEO",
    description: [
  "OGDCL, the local market leader in terms of reserves, production, and acreage, and the first Pakistani company to list its shares on the London Stock Exchange, is poised to expand E&P activity.",
  "Equipped with its first professionally developed Business and Strategic Plan, a debt-free balance sheet, and healthy cash reserves, OGDCL is ready to take on the challenges of an internationally listed company.",
  "Created under an ordinance in 1961, OGDCL undertakes exploration, development, and promotion of oil & gas prospects in Pakistan. The company has grown into a fully integrated E&P business with a highly qualified professional human resource base capable of supervising all phases of E&P operations.",
  "OGDCL has a robust operational base including drilling rigs, workover rigs, geological field parties, seismic crews, engineering field crews, gas gathering & pipeline construction units, seismic data processing centre, geological analysis laboratory, wireline logging unit, cementing units, and data logging units. It also operates nine oil & gas processing plants, a mini refinery, and LPG & sulphur recovery units.",
  "The company holds 32% of Pakistan’s total exploration acreage and has interests in 46 concessions, with 27 fully owned and 19 jointly owned. OGDCL holds the largest oil (31%) & gas (31%) reserves in the country, with a total production share of 44,000 BBL oil & over 1 BCF gas per day, including non-operated JV shares.",
  "OGDCL’s financial performance has steadily improved, with sales revenue of Rs. 96.8 billion in 2005-06, Profit After Tax of Rs. 46 billion, and Earnings per Share of Rs. 10.69. Balance sheet total reached Rs. 121.3 billion.",
  "The company follows an aggressive growth strategy to expand indigenous production, enable foreign participation, and fast-track development of current and future projects without compromising quality and transparency.",
  "OGDCL is a responsible corporate citizen, providing medical, social, and welfare facilities to local communities. This includes employment opportunities, construction of roads, schools, scholarships, clean drinking water, charitable donations, and financial assistance to improve the quality of life of local communities."
],
    telephone: "92 (51) 2623111",
    fax: "92 (51) 2623113-4",
    website: "#", // Add actual website if available
  },
  {
    id: 10,
    logo: OP_LOGO, // Replace ORIENT_logo with the actual imported logo variable if available
    name: "Orient Petroleum Inc.",
    address:
      "Plot No. 18-A & 19-A, PTET Tele-House, Mauve Area, Sector G-10/4, P.O. Box #1325, Islamabad, Pakistan",
    ceo: "Mr. Kamran Ahmed",
    designation: "Chief Executive Officer",
    description: [
  "Orient Petroleum Inc. (“ORIENT PETROLEUM”) is an Oil and Gas Exploration and Production Company registered under the laws of the Cayman Islands with limited liability. Prior to March 31, 1995, Orient Petroleum Inc. was a wholly owned subsidiary of Occidental International Exploration and Production Company (OIEPC). Effective that date, OIEPC sold its entire capital stock holding in Orient Petroleum Inc (OPI).",
  "As of today, Orient Petroleum is Operator of three Leases namely Dhurnal Mining Lease, Bhangali and Ratana D&P Leases. Orient Petroleum is non-operating Joint Venture Partner in Mehar, Sofiya & Sinjhoro Block D&P Leases and Kohlu, Mehar & Sinjhoro Exploration Licences. In addition, Orient Petroleum is also operating three Exploration Licences Sakhi Sarwar, Harnai South and Marwat Blocks.",
  "Orient Petroleum has entered into successful joint ventures with prominent local and foreign companies involved in E&P business in Pakistan including Oil & Gas Development Company Limited, Attock Oil Company Limited, Pakistan Oilfields Limited, United Energy Pakistan, Government Holdings (Private) Limited and Zaver Petroleum Corporation (Pvt.) Limited.",
  "OPI has carried out several obligated and non-obligated community welfare projects for the local community which include but are not limited to free eye camps, supply of free medicines, construction of classrooms for schools, construction of community roads, supply of IT equipment in schools, solar tube wells for supply of drinking water to locals, and agro/forest-based entrepreneur programs for poor farmers and landowners.",
  "ORIENT PETROLEUM is proud of the fact that it is harnessing and utilizing the vast experience, expertise, and technical know-how of professional Pakistani nationals having over 150 years of related experience. It also provides employment to over 400 well-trained and dedicated employees working to meet the company’s common goals and vision.",
  "The company takes pride in its team's capabilities to engineer and embark upon technically and economically viable projects. ORIENT PETROLEUM is home to many financial and technical innovations in its field of business that have enhanced the company’s existing reputation and provided major impetus to its overall growth of the company."
]
,
    telephone: "92 (51) 2351000-7",
    fax: "92 (51) 2351044",
    website: "#", // Add actual website if available
  },
  {
    id: 7,
    logo: PGNIG_LOGO, // Replace PGNiG_logo with the actual imported logo variable if available
    name: "Polish Oil and Gas Company - Pakistan Branch (ORLEN S.A)",
    address: "6th Floor, Ufone Tower, Jinnah Avenue, Blue Area, Islamabad 44000, Pakistan",
    ceo: "Mr. Andrzej Kaczorowski",
    designation: "Managing Director",
    description: [
      "Polskie Górnictwo Naftowe i Gazownictwo (PGNiG), also known as the Polish Oil and Gas Company (POGC), is a branch office of ORLEN Spółka Akcyjna. Since beginning operations in Pakistan in May 1997, it has been actively involved in hydrocarbon exploration and production as an Operator. POGC currently holds working interest in three blocks, operating the Kirthar and Baran blocks, while Musakhel is non-operated.",
      "POGC made discovery of Rehman gas field in 2009 and started extended well test (EWT) production from it in 2013 hence, becoming the first tight gas producer in Pakistan. In 2015, POGC made a second discovery by drilling Rizq-1 well in the Kirthar Block. This year also marks the commissioning of the Rehman Production Facility (RPF) which was constructed to process the gas produced from Rehman and Rizq fields. In 2023, POGC made a third discovery Rayyan-1 in the Kirthar Block which has been supplying gas to National Grid since July 2024. In 2025, the company made its fourth discovery, Rafat-1, also in the Kirthar Block. The well tested at a flow rate of approximately 1 MMSCFD and is currently under long-duration testing. Although this was a relatively small discovery, it reinforces POGC’s commitment to unlocking Pakistan’s hydrocarbon potential and contributing to the country’s energy security.",
      "Baran Block, located on the boundary of Sindh & Baluchistan Baran Block, located along the boundary of Sindh and Baluchistan provinces and covering an area of 2,475 km², was awarded to POGC on December 5, 2023, for a three-year license period. POGC, as the operator, holds a 59% working interest, with joint venture partners Pakistan Petroleum Ltd. holding 31% and Prime Global Energies Ltd. holding 10%. Currently, the block is under exploration phase and seismic activities are in progress. As of December 2025, the full 337 line-kilometers (L.km) of planned 2D seismic acquisition have been completed, and 96 square kilometers (sq. km) of 3D seismic data have been acquired.",
      "POGC also acquired a 25% interest in the Musakhel license block as non-operator in central Pakistan, the license partners are Pakistan Petroleum Ltd. as the Operator with (37.2% interest), Oil & Gas Development Company Ltd. (35.3% interest), and Government Holdings Pvt. Ltd. (2.5% interest). To date, out of the total work commitment of 601 Work Units (WU), 388 WU have been discharged, and by the end of 2026, drilling and testing of the first exploratory well are planned to be completed. ",
      "Until now, POGC has drilled 18 wells in Kirthar Block comprising 5 exploratory, 3 appraisal and 10 development wells. POGC has invested ~US$477 million in Pakistan, with ~US$385 million in the Kirthar Block. The current production from producing wells stands at ~ 50 MMScfd, which is planned to be further increased with continued development of existing fields and other exploratory prospects in the portfolio. ",
      "Beyond its core exploration and production operations, POGC is deeply committed to Corporate Social Responsibility in District Dadu, Sindh, where it maintains a long-standing presence, delivering meaningful and transformative impact through inclusive, sustainable programs focused on underserved communities including providing clean water, enhancing healthcare access via medical camps and awareness campaigns, installing solar power solutions to ensure reliable electricity for schools, and promoting youth development through sports, fitness events, and community engagement initiatives.",


]
,
    telephone: "(+92 51) 111 765 474",
    fax: "(+92 51) 231 04 97",
    website: "#", // Add actual website if available
  },
  {
    id: 6,
    logo: POL_LOGO, // Replace POL_logo with the actual imported logo variable if available
    name: "Pakistan Oilfields Ltd",
    address: "POL House, Morgah, Rawalpindi",
    ceo: "Shuaib A. Malik",
    designation: "Chief Executive",
    description: [
      "Pakistan Oilfields Ltd (POL) is a leading oil and gas exploration and production company in Pakistan, engaged in upstream petroleum activities, contributing significantly to the country’s energy sector.",
    ],
    telephone: "92 (51) 5487589-97",
    fax: "92 (51) 5487598, 92 (51) 5487599",
    website: "#", // Add actual website if available
  },
  {
    id: 2,
    logo: PPL_LOGO, // Replace PPL_logo with the actual imported logo variable if available
    name: "Pakistan Petroleum Ltd",
    address: "P.I.D.C, Dr. Ziauddin Ahmed Road, P.O. Box No. 3942, Karachi",
    ceo: "Mr. Imran Abbasy",
    designation: "Managing Director & CEO",
    description: [
  "Pakistan Petroleum Limited (PPL), the pioneer of the natural gas industry in Pakistan, has been a frontline player in the energy sector since the mid-1950s. As a major supplier of natural gas, PPL contributes over 20 percent of the country’s total natural gas supplies and also produces crude oil, Natural Gas Liquid and Liquefied Petroleum Gas.",
  "The company’s history dates back to June 1950 with the establishment of a public limited company, with major shareholding by Burmah Oil Company (BOC) of the United Kingdom for exploration, prospecting, development and production of oil and natural gas resources. In September 1997, BOC sold its equity in PPL to the Government of Pakistan. Subsequently, the government reduced its holding through an initial public offer in June 2004, Benazir Employees Stock Option Scheme in August 2009, and a Secondary Public Offering in 2014.",
  "PPL has established two subsidiaries, PPL Europe E&P Limited and PPL Asia E&P B.V. The company has assigned its interest in Block 8 Iraq, under the Exploration, Development and Production Service Contract with Midland Oil Company, Iraq, to PPL Asia E&P B.V.",
  "PPL operates 13 producing fields across the country including Sui (Pakistan’s largest gas field), Adhi, Kandhkot, Chachar, Mazarani, Adam, Adam West, Shadadpur, Shahdadpur West, Shahdadpur East, Zafir, Fazal and Dhok Sultan. The company also holds working interest in 23 partner-operated producing fields, including Qadirpur, the country’s second largest gas field.",
  "As a major stakeholder in securing a safe energy future for Pakistan, PPL pursues an aggressive exploration agenda aimed at enhancing hydrocarbon recovery and replenishing reserves. Together with its subsidiaries, PPL has a portfolio of 48 exploration assets, of which it operates 28 including one contract in Iraq, while 20 blocks, including three offshore leases in Pakistan and one onshore concession in Yemen, are operated by joint venture partners.",
  "Over the years, PPL has developed reliable infrastructure for providing clean and safe energy through sustainable exploitation of indigenous natural resources while adhering to the highest standards of health and safety and minimizing the ecological footprint of its operations. As a result, 16 of the company’s fields and facilities are certified for ISO 9001 QMS, while 13 fields and facilities are certified for OHSAS 18001.",
  "PPL has played a significant role as a responsible corporate citizen since the inception of its commercial activities in Sui. In 2001, the PPL Welfare Trust was established to bring geographical and thematic diversity to the company’s CSR programme, focusing on education, health, infrastructure development and socio-economic uplift of disadvantaged communities in and around its operating areas as well as in urban centers.",
  "In recognition of its CSR initiatives, PPL has been adjudged the largest corporate giver for 15 consecutive years from 2004 to 2018 by the Pakistan Centre for Philanthropy."
]
,
    telephone: "92-21-111-568-568",
    fax: "92-21-35651480-89, 92-21-35680005",
    website: "#", // Add actual website if available
  },
  {
    id: 8,
    logo: PRIME_LOGO, // Replace PGEL_logo with the actual imported logo variable if available
    name: "Prime Global Energies Limited",
    address:
      "5th Floor, The Forum, Khayaban-e-Jami, Box No. 12369, Clifton, Karachi",
    ceo: "Mr. Kamran Ajmal Mian",
    designation: "Chief Executive Officer",
    description: [
  "With an average production of 1.7 Mboed and revenue totalling Euro 74 billion in 2005, PGEL is one of the most important integrated energy companies in the world, operating in oil and gas, power generation, petrochemicals, oilfield services, construction and engineering. In these businesses, the company has a strong competitive edge and leading international market positions.",
  "PGEL is listed on the Italian and New York Stock Exchange.",
  "PGEL has been operating in Pakistan since 2000. PGEL Pakistan is the operator of the Bhit and Kadanwari gas producing fields and is a partner in third-party operated fields including Zamzama, Sawan, Miano and Rehmat.",
  "With a yearly average net equity production of over 50,875 boepd, PGEL Pakistan ranks as the largest foreign producer in the Pakistan E&P sector.",
  "PGEL Pakistan is the operator of Gorakh, Mithi, Rajar, Umarkot and Thar onshore exploration blocks and holds two offshore exploration licences 'M' and 'N' in the Indus Delta. PGEL Pakistan is also a partner in the Middle Indus onshore exploration blocks of Mubarak, South West Miano, Gambat and Latif."
]
,
    telephone: "92 (21) 35879951-80",
    fax: "92 (21) 35838394-5",
    website: "#", // Add actual website if available
  },
  {
    id: 13,
    logo: SAIF_LOGO, // Replace SEL_logo with the actual imported logo variable if available
    name: "Saif Energy Limited",
    address:
      "4th Floor, Wazir Arcade, Plot No. 95-96, Business Square, Block C, Gulberg Green, IBECHS, Islamabad",
    ceo: "Mr. Jehangir Saifullah Khan",
    designation: "Chief Executive Officer",
    description: [
  "Saif Energy Ltd (SEL) is a Saif Group company. The Saif Group was founded over eighty years ago by Khan Faizullah Khan, beginning with a diesel-fired power plant supplying electricity to Bannu City in Khyber Pakhtunkhwa (then NWFP), Pakistan.",
  "Over the years, the Saif Group has expanded its operations across multiple sectors including Power Generation, Oil and Gas Exploration, Textiles, Real Estate Development, IT, and Telecommunications.",
  "The Group has a strong history of forming successful alliances with world-renowned companies such as Etisalat, Falag Telecom, Fusion Telecom Inc., Iridium Satellite LLC, Itochu Corporation, Motorola, Tyco Electronics, Nichimen Corporation, Olivetti, OMV, Tullow Oil plc, Orascom Telecom, and Siemens, which has strengthened its technical and managerial expertise.",
  "SEL is Pakistan’s first local private sector company to receive ISO 9001:2000 certification for Quality Management in Oil and Gas exploration and production activities.",
  "Established under the Government of Pakistan’s policies, SEL aims to develop a strong indigenous exploration and production base to minimize foreign exchange outlay.",
  "SEL is also Pakistan’s first oil and gas exploration company to acquire 3D seismic surveys at the exploration stage, a strategy later adopted by other companies.",
  "The company has successfully executed several oil and gas exploration initiatives, resulting in multiple discoveries.",
  "SEL continues to evaluate new onshore blocks to further expand its oil and gas exploration portfolio."
]
,
    telephone: "92 (51) 5913012-13",
    fax: "92 (51) 5912852",
    website: "#",
  },
  {
    id: 5,
    logo: UEP_NEW_LOGO, // Replace UEPL_logo with the actual imported logo variable if available
    name: "United Energy Pakistan Limited",
    address:
      "17th Floor, The Sky Tower – East Wing. Dolmen City, HC 3, Block 4, Scheme 5, Clifton, Karachi, Pakistan.",
    ceo: "Mr. M. Zaheer Alam - President",
    designation: "",
    description: [
"United Energy Pakistan (UEP) is a subsidiary of the Hong Kong-listed international energy company, United Energy Group (UEG), which has E&P operations in Pakistan, Iraq, Egypt and Uzbekistan. As the leading foreign oil and gas exploration and production company in Pakistan, UEP’s footprint spans over 26,000 square kilometers in Sindh, Baluchistan and Punjab.   ",
"Our history stretches over four decades, with the business experiencing a change in ownership several times from UTP to ARCO and subsequently to BP. In 2011, UEG acquired control of this asset from BP, marking a new era of growth for the company. ",
"Backed by UEG’s technical and financial support, UEP has invested over $5 billion since 2011. These funds have been used for aggressive exploration and development activities, such as conducting 7,800 square kilometers of 3D seismic acquisition, drilling more than 400 wells and making around 100 discoveries. UEP has also embarked on exciting new exploration ventures, such as conducting 1,100-line kilometers of 2D seismic with more planned.  ",
"Along with strengthening production and profitability, UEP is committed to building a business that contributes to the well-being of its workforce and stakeholders. The company is acutely aware of its operating environment and places significant emphasis on preserving the safety and welfare of everyone engaged in or impacted by its operations. ",
"Over the years, UEP has invested in a rich social investment portfolio that is aligned with the UN’s Sustainable Development Goals (SDGs) and focuses on eight out of seventeen SDGs, including helping provide primary and secondary education, access to clean drinking water, partnership for goals, decent work and economic growth, affordable and clean energy, innovation, gender equality, and quality health services for the local communities. Our CSR projects are implemented in partnership with district administrations and leading NGOs, including The Citizens Foundation (TCF) and Aga Khan University (AKU). ",
"We maintain meaningful educational partnerships with leading institutions such as NUST, Mehran University, Sukkur Institute of Allied Sciences, & other leading Educational Institutes in Pakistan, offering scholarships to deserving students. Through these initiatives, we invest in potential, nurture talent, and help shape the leaders of tomorrow, ensuring a brighter future for our communities and our industry. ",
"Recognizing the need for basic necessities, like clean water, we have also established over 58 Solar powered Reverse Osmosis plants, and through these plants, more than 100,000 people in interior Sindh now have access to clean drinking water. ",
"In terms of health services, UEP has helped over 12 million people by establishing more than 27 facilities in 7 districts and donating numerous medical supplies. These include surgical equipment, ultrasound machines, X-ray machines, ambulances, eye equipment, dental equipment, laboratory equipment, and more. ",
"We also contribute to local development and welfare in the areas in which we operate through job creation. Our Operator Training Program is one of a kind in the industry. It provides a unique opportunity for the local youth in our concession areas to build a career in the oil and gas sector. Additionally, we build capacity by working with local businesses and have actively developed the expertise of several local contractors. Our contract companies have grown in scale and skills. Several local contractors are now managing major civil construction projects in our operating areas and providing employment opportunities for surrounding communities.  ",
"The core strength of UEP is its expertise and spirit of exploration, but what energizes us is the spirit of the people we work with. UEP remains resolute in its unwavering dedication to using innovation to drive success and to empower the local community. ",
]
,
    telephone: "+92-21-3561-1194, +92-21-3561-1198",
    fax: "+92-21-3561-0634",
    website: "https://uep.com.pk/", // Add actual website if available
  },
];

const MembersPage: React.FC = () => {


  const searchParams = useSearchParams();
  const companyId = searchParams?.get("id");

  const company = companyData.find((c) => c.id === Number(companyId));

  // const company = companyData[1]; // For now, we only have one company
if (!company) return <div>Company not found!</div>;

  return (
    <div className="bg-[#f8fafc] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 font-['Open_Sans']">
      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-6 text-center">
        <Image
          src={company.logo}
          alt="Company Logo"
          className="xl:w-[144px] xl:h-[144px] lg:w-[129.6px] lg:h-[129.6px] md:w-[116.64px] md:h-[116.64px] sm:w-[105px] sm:h-[105px] h-[94.5px] w-[94.5px] rounded-lg object-contain"
          loading="lazy"
        />
        <h1 className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-semibold mt-4 text-[#334155] font-['Open_Sans']">
          {company.name}
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-7xl mx-auto p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md relative overflow-hidden">
        <div className="space-y-4">
          {/* Company Address */}
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">
              Companies' Name & Postal Address:
            </h2>
            <p className="text-[#334155] text-sm mt-1">{company.address}</p>
          </div>

          {/* Name & Designation */}
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">
              Name & Designation:
            </h2>
            <p className="text-[#334155] text-sm mt-1">
              {company.ceo}{" "}
              <span className="font-medium">{company.designation}</span>
            </p>
          </div>

          {/* Description */}
          <div className="text-[#334155] text-sm space-y-2 leading-relaxed">
            {company.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h2 className="text-[#334155] font-semibold text-sm">
                Telephone (PABX):
              </h2>
              <p className="text-[#334155] text-sm mt-1">{company.telephone}</p>
            </div>

            <div>
              <h2 className="text-[#334155] font-semibold text-sm">Fax:</h2>
              <p className="text-[#334155] text-sm mt-1">{company.fax}</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <a
              // target="_blank"
              href={company.website}
              className="inline-block bg-[#16A831] hover:bg-[#128a28] text-[#F8FAFC] font-semibold px-6 py-2 rounded  transition"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#16A8311F] rounded-full opacity-50 -mb-3 -mr-5 hidden sm:block"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#16A8311F] rounded-full opacity-50 mb-20 mr-12 hidden sm:block"></div>
      </div>
    </div>
  );
};

export default MembersPage;