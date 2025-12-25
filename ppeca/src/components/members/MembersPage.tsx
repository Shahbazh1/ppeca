// components/CompanyCard.tsx
'use client'
export const dynamic = "force-dynamic";

import React from "react";
import { useSearchParams } from "next/navigation";
import AEPL_LOGO from "../../../public/images/POL_logo.png";
import POL_logo from "../../../public/images/companies_logo/AEPL_LOGO.jpg";
import GHPL_LOGO from "../../../public/images/companies_logo/GHPL_LOGO.png";
import KPOGCL_LOGO from "../../../public/images/companies_logo/KPOGCL_LOGO.png";
import KUFPEC_LOGO from "../../../public/images/companies_logo/KUFPEC_LOGO.png";
import MARI_LOGO from "../../../public/images/companies_logo/MARI_LOGO.png";
import MOL_LOGO from "../../../public/images/companies_logo/MOL_LOGO.jpg";
import OGX_LOGO from "../../../public/images/companies_logo/OGX_LOGO.png";
import UEP_LOGO from "../../../public/images/companies_logo/UEP_LOGO.jpg";
import OP_LOGO from "../../../public/images/companies_logo/OP_LOGO.jpg";
import PGNIG_LOGO from "../../../public/images/companies_logo/PGNIG_LOGO.jpg";
import POL_LOGO from "../../../public/images/companies_logo/POL_LOGO.png";
import PPL_LOGO from "../../../public/images/companies_logo/PPL_LOGO.jpg";
import PRIME_LOGO from "../../../public/images/companies_logo/PRIME_LOGO.png";
import SAIF_LOGO from "../../../public/images/companies_logo/SAIF_LOGO.jpg";



import Image from "next/image";
import { Suspense } from "react";

// Array of company details
const companyData = [
  {
    id: 1,
    logo: POL_logo,
    name: "Al-Haj Enterprises (Private) Limited",
    address:
      "Street No. 29, Plot No. 145, Etihad Plaza, I & T Centre, Sector G-9/1, Islamabad",
    ceo: "Mr. Taj Mohammad Afridi",
    designation: "Chief Executive Officer",
    description: [
      "Al-Haj Enterprises (Private) Limited (AEPL) is a recently incorporated Pakistani Exploration and Production Company. AEPL is a part of the AL-Haj Group of Companies involved in Logistics, Oil and Goods Transportation, Textiles, Metals and manufactures of light and heavy vehicles.",
      "Al-Haj Group through its subsidy, AL-Haj FAW Motors has a Joint Venture with China for manufacturing of light and heavy transport vehicles.",
      "Al-Haj Enterprises (Private) Limited (AEPL) was awarded two (2) Blocks i.e. Block No. 3271-6 Potwar South and Block No. 3169-4 Baska North, during the bid round held in 2013. To-date AEPL has completed acquisition of 135kms of new2-D Seismic in Potwar South Block.",
      "AEPL’s major shareholder is Senator Taj Muhammad Afridi. AEPL has a strong Technical and Management team comprising of senior personnel from the industry.",
    ],
    telephone: "92 (51) 2264460-63",
    fax: "92 (51) 2264465",
    website: "#",
  },
  {
    id: 2,
    logo: GHPL_LOGO, // Replace GHPL_logo with the actual imported logo variable if available
    name: "Government Holdings (Private) Limited",
    address: "Petroleum House, 5th & 7th Floor, Sector G-5/2, Islamabad",
    ceo: "Mr. Masood Nabi",
    designation: "CEO/Managing Director",
    description: [
      "Government Holdings (Private) Limited (GHPL) was established in the year 2000 as a private limited company, 100% owned by the Government of Pakistan and registered under the Companies Ordinance, 1984. Paid up Capital of the company is Rs. 250 Million.",
      "The company was created to separate the commercial and regulatory functions as these were being jointly handled by the Ministry of Petroleum & Natural Resources. Government of Pakistan’s shares in upstream petroleum joint ventures acquired under the petroleum policies prior to the introduction of Petroleum Policy 2001 were transferred to it and GHPL became the vehicle to manage those interests. The provision regarding Government of Pakistan’s 5% carried interest in all concessions at the exploration stage and shareholding of 15% to 25% in case of commercial discovery depending upon the zone was withdrawn in the Petroleum Policy 2001; GHPL was however given right to make investment on full participation basis like any other local company in on-shore petroleum E&P joint ventures.",
      "GHPL participates in all Joint Ventures as non-operator. There are currently 56 upstream petroleum joint ventures on-shore with GHPL working interest; 21 Onshore Exploration Licenses with 5% carried interest and 35 Development & Production Leases with 12.5% to 25% working interest. GHPL average production share was 43,742 BOE/Day in 2009.",
      "GHPL acts as a Licensee in the off-shore joint ventures. It has an interest in 17 offshore exploration licenses under Production Sharing Agreements (PSAs). It ensures implementation of agreed work programmes and approval/recording of budgets/expenditures by these joint ventures.",
      "GHPL is non-operating partner with local and foreign oil and gas exploration and production companies functioning as operator. Major operating companies in partnership with GHPL are BP, BHP Billiton, Eni, OMV, Petronas Carigali, Paige, Nikoresources, Hycarbex, MOL, OPII, OGDCL, PPL, POL and PEL.",
      "Secretary MP&NR is the Chairman of the company’s Board of Directors.",
    ],
    telephone: "92 (51) 9211247, 92 (51) 9213972",
    fax: "92 (51) 051-9211236-37, 051-9211239-40",
    website: "https://www.ghpl.com.pk",
  },
  {
    id: 3,
    logo: KUFPEC_LOGO, // Replace KUFPEC_logo with the actual imported logo variable if available
    name: "Kirthar Pakistan Holdings B.V. (Formerly known as Premier – KUFPEC Pakistan B.V)",
    address:
      "3rd Floor, ONE Expressway, Gulberg Greens Entrance, Islamabad Expressway, Postal Code 44000, Islamabad, Pakistan",
    ceo: "Mr. Ali Taha Al Temimi",
    designation: "Country Manager",
    description: [
      "Kuwait Foreign Petroleum Exploration Company (KUFPEC) was established by its parent company Kuwait Petroleum Corporation (KPC) in 1981. KUFPEC is an international oil company engaged in exploration, development and production of crude oil and gas both onshore and offshore, outside Kuwait. To this end, KUFPEC is active in Africa, Middle East, Far East and Australia and South East Asia. Over years, KUFPEC has successfully expanded its operations in these four (4) regions and acquired exploration and production licenses in 13 countries.",
      "Pakistan operations come under Middle East Region, which currently manages 16 projects in four (4) countries. Those projects, representing a good balance between exploration, development and producing properties, make the Middle East Region one of KUFPEC’s most important sources of revenue, to which Pakistan makes a substantial contribution.",
      "KUFPEC has been active in Pakistan since the mid-1980’s, with its first acquisition in the second half of that decade and first production in the mid-1990’s. As one of the country’s most significant foreign investors, the Company has, currently, four (4) producing interests, two (2) developing gas fields, and two (2) exploration blocks. These assets are held and managed through Pakistan based subsidiary company KUFPEC Pakistan Holdings B.V.",
      "KUFPEC’s first and oldest producing investment in Pakistan is the Kadanwari Gas Field, located in Sindh Province, where it holds 15.789% working interest. Other producing fields include Qadirpur (13.25%), Zamzama (9.375%) and Bhit (6%), all located in Sindh. All these are gas producing fields and cater for domestic, commercial and industrial sector needs.",
      "Two exploration interests that KUFPEC has in Pakistan include: a) onshore Dadhar (22.81%) in Baluchistan and b) Indus Offshore (12.50%), Block E 2365-1. Two assets in development stage include Badhra (6%) in Sindh adjoining Bhit field and Zarghun South (3.75%) in Baluchistan. Both will be brought on-stream in 2008. Further exploitation is being carried out in Kadanwari, Qadirpur, and Zamzama assets.",
      "KUFPEC remains committed to this vital area and is actively seeking further suitable opportunities.",
    ],
    telephone: "92 (51) 8494400",
    fax: "92 (51) 8484400",
    website: "https://www.kufpec.com.pk",
    email: "mail@kufpec.com.pk",
  },
  {
    id: 4,
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
    id: 5,
    logo: MARI_LOGO, // Replace MARI_logo with the actual imported logo variable if available
    name: "Mari Energies Limited",
    address:
      "Plot No. 21, Mauve Area, 3rd Road, G-10/4, P.O. Box O. No. 1614, Islamabad",
    ceo: "Mr. Faheem Haider",
    designation: "Managing Director/CEO",
    description: [
      "Mari Energies Limited is a leading energy company in Pakistan, engaged in exploration, development, and production of oil and gas resources. The company focuses on sustainable energy practices and aims to contribute significantly to the country's energy sector.",
    ],
    telephone: "92 (51) 2297683-4, 051-111-410-410",
    fax: "92 (51) 2297686",
    website: "#", // Add actual website if available
  },
  {
    id: 6,
    logo: MOL_LOGO, // Replace MOL_logo with the actual imported logo variable if available
    name: "MOL Pakistan Oil and Gas Co. B.V.",
    address:
      "Islamabad Stock Exchange Towers, Floor No. 17, 55-B, Jinnah Avenue, Islamabad",
    ceo: "Mr. Laszlo Zsolt Adam",
    designation: "Managing Director/Chief Executive Officer",
    description: [
      "MOL strives to promote the welfare of the community. It is actively engaged in community development in TAL concession area. The company has provided basic health unit facilities at Gurguri and surrounding areas, constructed an eight-bed hospital, and upgraded various schools and boys' colleges in Kohat and Hangu.",
      "In 2002, MOL built an examination hall for 100 students near the Boys School at Gurguri. The company is also planning to drill two water wells in the villages of Gurguri and Urbashi, and repair the road from Terri to Gurguri.",
    ],
    telephone: "92 (51) 111-665-725, 92 (51) 2655801-10",
    fax: "92 (51) 2655828",
    website: "#", // Add actual website if available
  },
  {
    id: 7,
    logo: OGX_LOGO, // Replace OGDCL_logo with the actual imported logo variable if available
    name: "Oil and Gas Development Company Limited (OGDCL)",
    address: "OGDCL House, F-6/1, Jinnah Avenue, Islamabad",
    ceo: "Mr. Ahmed Hayat Lak",
    designation: "Managing Director/CEO",
    description: [
      "OGDCL, the local market leader in terms of reserves, production and acreage, and the first Pakistani Company to list its shares on the London Stock Exchange, is poised to expand E&P activity.",
      "Equipped with its first professionally developed Business and Strategic Plan, a debt-free balance sheet, and healthy cash reserves, OGDCL is ready to take on the challenges of an internationally listed company.",
      "Created under an ordinance in 1961, OGDCL undertakes exploration, development & promotion of oil & gas prospects in Pakistan. The company has grown into a fully integrated E&P business with a highly qualified professional human resource base capable of supervising all phases of E&P business.",
      "OGDCL has a robust operational base including drilling rigs, workover rigs, geological field parties, seismic crews, engineering field crews, gas gathering & pipeline construction units, seismic data processing centre, geological analysis laboratory, wireline logging unit, cementing units, and data logging units. It operates nine oil & gas processing plants, a mini refinery, and LPG & sulphur recovery units.",
      "The company holds 32% of Pakistan’s total exploration acreage and has interests in 46 concessions, with 27 fully owned and 19 jointly owned. OGDCL holds the largest oil (31%) & gas (31%) reserves in the country, with a total production share of 44,000 BBL oil & over 1 BCF gas per day, including non-operated JV shares.",
      "OGDCL’s financial performance has steadily improved, with sales revenue of Rs. 96.8 billion in 2005-06, Profit After Tax of Rs. 46 billion, and Earnings per Share of Rs. 10.69. Balance sheet total reached Rs. 121.3 billion.",
      "The company follows an aggressive growth strategy to expand indigenous production, enabling foreign participation and fast-track development of projects without compromising quality and transparency.",
      "OGDCL is also a responsible corporate citizen, providing medical, social and welfare facilities to local communities, employment opportunities, infrastructure, schools, scholarships, clean drinking water, charitable donations, and financial assistance to improve quality of life.",
    ],
    telephone: "92 (51) 2623111",
    fax: "92 (51) 2623113-4",
    website: "#", // Add actual website if available
  },
  {
    id: 8,
    logo: OP_LOGO, // Replace ORIENT_logo with the actual imported logo variable if available
    name: "Orient Petroleum Inc.",
    address:
      "Plot No. 18-A & 19-A, PTET Tele-House, Mauve Area, Sector G-10/4, P.O. Box #1325, Islamabad, Pakistan",
    ceo: "Mr. Kamran Ahmed",
    designation: "Chief Executive Officer",
    description: [
      "Orient Petroleum Inc. (“ORIENT PETROLEUM”) is an Oil and Gas Exploration and Production Company registered under the laws of the Cayman Islands with limited liability. Prior to March 31, 1995, Orient Petroleum Inc. was a wholly owned subsidiary of Occidental International Exploration and Production Company (OIEPC). Effective that date, OIEPC sold its entire capital stock holding in Orient Petroleum Inc (OPI).",
      "Orient Petroleum is the operator of three leases: Dhurnal Mining Lease, Bhangali and Ratana D&P Leases. It is a non-operating Joint Venture Partner in Mehar, Sofiya & Sinjhoro Block D&P Leases and Kohlu, Mehar & Sinjhoro Exploration Licences. Additionally, Orient Petroleum operates three Exploration Licences: Sakhi Sarwar, Harnai South, and Marwat Blocks.",
      "Orient Petroleum has entered into successful joint ventures with prominent local and foreign E&P companies in Pakistan including Oil & Gas Development Company Limited, Attock Oil Company Limited, Pakistan Oilfields Limited, United Energy Pakistan, Government Holdings (Private) Limited, and Zaver Petroleum Corporation (Pvt.) Limited.",
      "OPI has carried out numerous community welfare projects including free eye camps, supply of medicines, construction of classrooms and community roads, provision of IT equipment in schools, solar tube wells for drinking water, and agro/forest-based entrepreneurial programs for farmers.",
      "Orient Petroleum leverages the expertise of professional Pakistani nationals with over 150 years of combined experience and employs over 400 well-trained and dedicated staff. The company takes pride in its team's capabilities to engineer technically and economically viable projects, introducing financial and technical innovations that enhance its reputation and drive growth.",
    ],
    telephone: "92 (51) 2351000-7",
    fax: "92 (51) 2351044",
    website: "#", // Add actual website if available
  },
  {
    id: 9,
    logo: PGNIG_LOGO, // Replace PGNiG_logo with the actual imported logo variable if available
    name: "Polish Oil and Gas Company - Pakistan Branch",
    address: "6th Floor, Ufone Tower, Jinnah Avenue, Blue Area, Islamabad",
    ceo: "Mr. Andrzej Kaczorowski",
    designation: "Managing Director",
    description: [
      "PGNiG, also known as Polish Oil and Gas Company (POGC), operates in Pakistan as a branch office of PGNiG Group Poland, majority-owned by the Polish Government.",
      "PGNiG began operations in Pakistan in May 1997 and has been conducting petroleum exploration and production activities as an Operator. Before acquiring the Kirthar Concession (Block No. 2667-7), PGNiG operated four other concessions: Khanpur West, Sabzal, Mekhtar, and Sabzal South. It also held a 40% working interest in an exploration block in Nawabshah, Sindh as a Non-Operating Partner.",
      "PGNiG acquired the Kirthar Block in District Dadu, Sindh, as Operator in 2005. Pakistan Petroleum Limited (PPL) farmed-in as a Joint Venture Partner in 2006. The Rehman-1 well was discovered in 2009, with extended well test production starting in 2013, making it the first 'Tight Gas' producer in Pakistan. The Rehman field was granted a Development and Production Lease in 2017 for 25 years.",
      "In 2015, PGNiG discovered the Rizq-1 well in Kirthar Block and commissioned the Rehman Production Facility (RPF) to process gas from Rehman and Rizq fields. Gas from Rizq field was added to the national grid in November 2016. RPF capacity was increased from 15 to 40 MMScfd in 2017, and the Rizq field appraisal program was completed in 2018, granting a 25-year D&PL.",
      "PGNiG has drilled 11 wells in Kirthar Block: 3 exploratory, 3 appraisal, and 5 development wells. Total investment in Pakistan exploration and production activities is approximately US$233 million, with ~US$216 million invested in Kirthar Block, including well drilling, Rehman Production Facility construction and augmentation, and ~50 km of sales gas transport pipeline.",
      "Current production from Kirthar Block wells is ~35 MMScfd, planned to increase to ~80 MMScfd with continued development. PGNiG actively pursues development of Rehman & Rizq fields and aims to expand its footprint in Pakistan’s upstream sector, contributing to the country’s energy security.",
    ],
    telephone: "92 (51) 111 756 474",
    fax: "92 (21) 2310497",
    website: "#", // Add actual website if available
  },
  {
    id: 10,
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
    id: 11,
    logo: PPL_LOGO, // Replace PPL_logo with the actual imported logo variable if available
    name: "Pakistan Petroleum Ltd",
    address: "P.I.D.C, Dr. Ziauddin Ahmed Road, P.O. Box No. 3942, Karachi",
    ceo: "Mr. Imran Abbasy",
    designation: "Managing Director & CEO",
    description: [
      "Pakistan Petroleum Limited (PPL) is a pioneer of the natural gas industry in Pakistan, contributing over 20% of the country’s total natural gas supplies alongside production of crude oil, Natural Gas Liquid, and Liquefied Petroleum Gas.",
      "Founded in June 1950 with major shareholding by Burmah Oil Company (BOC), PPL became fully Pakistani-owned after BOC sold its equity in 1997. The government later reduced its holding through public offerings and employee stock schemes.",
      "PPL has two subsidiaries, PPL Europe E&P Limited and PPL Asia E&P B.V., and operates 13 producing fields across Pakistan, including Sui, Adhi, Kandhkot, Chachar, Mazarani, Adam, Shadadpur, Shahdadpur, Zafir, Fazal, and Dhok Sultan. It also holds working interest in 23 partner-operated fields, including Qadirpur.",
      "PPL has a portfolio of 48 exploration assets, operating 28 itself and 20 through joint venture partners, including one contract in Iraq and three offshore leases in Pakistan and one onshore concession in Yemen.",
      "The company maintains high standards of health, safety, and environmental responsibility. 16 fields and facilities are ISO 9001 certified, and 13 are OHSAS 18001 certified.",
      "PPL actively engages in CSR initiatives through the PPL Welfare Trust, focusing on education, health, infrastructure, and socio-economic upliftment of communities. It has been recognized as the largest corporate giver for 15 consecutive years (2004–2018) by the Pakistan Centre for Philanthropy.",
    ],
    telephone: "92-21-111-568-568",
    fax: "92-21-35651480-89, 92-21-35680005",
    website: "#", // Add actual website if available
  },
  {
    id: 12,
    logo: PRIME_LOGO, // Replace PGEL_logo with the actual imported logo variable if available
    name: "Prime Global Energies Limited",
    address:
      "5th Floor, The Forum, Khayaban-e-Jami, Box No. 12369, Clifton, Karachi",
    ceo: "Mr. Kamran Ajmal Mian",
    designation: "Chief Executive Officer",
    description: [
      "With an average production of 1.7 Mboed and revenue totaling Euro 74 billion in 2005, PGEL is one of the most important integrated energy companies in the world, operating in oil and gas, power generation, petrochemicals, oilfield services, construction, and engineering.",
      "PGEL is listed on the Italian and New York Stock Exchange and has been operating in Pakistan since 2000. PGEL Pakistan operates the Bhit and Kadanwari gas producing fields and is a partner in third-party operated fields: Zamzama, Sawan, Miano, and Rehmat.",
      "PGEL Pakistan has a yearly average net equity production of over 50,875 boepd, ranking it as the largest foreign producer in the Pakistan E&P sector.",
      "PGEL Pakistan also operates Gorakh, Mithi, Rajar, Umarkot, and Thar onshore exploration blocks and holds two offshore exploration licences 'M' & 'N' in the Indus Delta. It is additionally a partner in Middle Indus onshore exploration blocks: Mubarak, South West Miano, Gambat, and Latif.",
    ],
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
      "Saif Energy Ltd (SEL) is part of the Saif Group, which was founded over eighty years ago by Khan Faizullah Khan. The Group operates in Power Generation, Oil and Gas Exploration, Textiles, Real Estate Development, IT, and Telecommunications.",
      "SEL has formed successful alliances with world-renowned companies such as Etisalat, Falag Telecom, Fusion Telecom Inc., Iridium Satellite LLC, Itochu Corporation, Motorola, Tyco Electronics, Nichimen Corporation, Olivetti, OMV, Tullow Oil plc, Orascom Telecom, and Siemens, enhancing its technical and managerial expertise.",
      "SEL is Pakistan’s first local private sector company to receive ISO 9001:2000 certification for Quality Management in Oil and Gas exploration and production. It was also the first company to acquire 3D seismic surveys at the exploration stage, a strategy now adopted by other companies.",
      "SEL has successfully executed several oil and gas exploration initiatives with multiple discoveries and continues to evaluate new onshore blocks to expand its exploration portfolio.",
      "The company focuses on minimizing foreign exchange outlay while developing a strong indigenous base in Pakistan’s E&P sector.",
    ],
    telephone: "92 (51) 5913012-13",
    fax: "92 (51) 5912852",
    website: "www.saifenergy.com",
  },
  {
    id: 14,
    logo: UEP_LOGO, // Replace UEPL_logo with the actual imported logo variable if available
    name: "United Energy Pakistan Limited (UEPL)",
    address:
      "3rd Floor, Bahria Complex, 24, Moulvi Tamizuddin Khan Road, Karachi-2",
    ceo: "Mr. Zaheer Alam",
    designation: "President",
    description: [
      "United Energy Pakistan Limited (UEPL) assumed control of oil and gas exploration and production assets managed by BP Pakistan in September 2011, focusing on the entire process from site assessment to first production.",
      "UEPL operates across eight districts in Sindh province (Badin, Tando Mohammad Khan, Tando Allahyar, Thatta, Hyderabad (rural), Matiari, Sanghar, and Mirpurkhas) with 9 onshore producing and exploration blocks and 4 offshore exploration blocks in the Arabian Sea. It recently won two new exploration blocks, Digri and Sanghar South.",
      "The company is a subsidiary of United Energy Group (UEG), a Hong Kong-listed company engaged in upstream oil and gas operations, including exploration, development, and production, with projects in China, North America, South America, and Central Asia.",
      "UEPL has a 100% Pakistani workforce, including all senior leadership positions, and runs an Operator Training Programme that has trained nearly 300 operators from local communities.",
      "Partners in Pakistan include Government Holdings Private Limited, OGDCL, Pakistan Petroleum Limited, Zaver Petroleum Corporation Limited, and Bow Energy Resources.",
      "UEPL actively invests in community development, supporting health, education, and infrastructure projects, including schools, colleges, health centers, and initiatives with UNDP. The company also provides humanitarian aid during natural disasters such as floods and earthquakes.",
    ],
    telephone: "021-35610205-8, 021-35611194-6, 021-35610638-46",
    fax: "021-35610634, 021-35610966",
    website: "#", // Add actual website if available
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
          className="xl:w-[144px] xl:h-[144px] lg:w-[129.6px] lg:h-[129.6px] md:w-[116.64px] md:h-[116.64px] sm:w-[105px] sm:h-[105px] h-[94.5px] w-[94.5px] rounded-full bg-white object-contain"
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
              target="_blank"
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