import aboutUsHero_BG from "../../public/images/aboutUsHero_BG.jpg"
import Secretariat_img from "../../public/images/Secretariat_img.png";

import industry_views from "../../public/images/svg_images/industry_views.svg";
import petroleum_form from "../../public/images/svg_images/petroleum_form.svg";
import recommendations from "../../public/images/svg_images/recommendations.svg";
import represent_petroleum_industry from "../../public/images/svg_images/training.svg";
import research_and_innovation from "../../public/images/svg_images/research_and_innovation.svg";
import training from "../../public/images/svg_images/training.svg";
import info_and_dataSharing from "../../public/images/svg_images/info_and_dataSharing.svg";
import tech_development from "../../public/images/svg_images/tech_development.svg";

import roleSec_side_img from "../../public/images/roleSec_side_img.png";

import Img1 from "../../public/images/about_sec_img1.jpg";
import Img2 from "../../public/images/about_sec_img2.jpg";

import PPL_LOGO from "../../public/images/companies_logo/PPL_LOGO.png";
import PRIME_LOGO from "../../public/images/companies_logo/PRIME_LOGO.png";
import PGNIG_LOGO from "../../public/images/companies_logo/PGNIG_LOGO.jpg";
import POL_LOGO from "../../public/images/companies_logo/POL_LOGO.png";
import SAIF_LOGO from "../../public/images/companies_logo/SAIF_LOGO.jpg";
import UEP_LOGO from "../../public/images/companies_logo/UEP_LOGO.jpg";
import AEPL_LOGO from "../../public/images/companies_logo/AEPL_LOGO.jpg";
import GHPL_LOGO from "../../public/images/companies_logo/GHPL_LOGO.png";
import KPOGCL_LOGO from "../../public/images/companies_logo/KPOGCL_LOGO.png";
import MARI_LOGO from "../../public/images/companies_logo/MARI_LOGO.png";
import MOL_LOGO from "../../public/images/companies_logo/MOL_LOGO.jpg";
import OGX_LOGO from "../../public/images/companies_logo/OGX_LOGO.png";
import OP_LOGO from "../../public/images/companies_logo/OP_LOGO.jpg";
import KUFPEC_LOGO from "../../public/images/companies_logo/KUFPEC_LOGO.png";
import members_sec_BG from "../../public/images/members_sec_BG.jpg";
import chairman1 from "../../public/images/chairman_ppepca.png";

import heroBg from "../../public/images/heroBg.png";

// ABOUT PAGE DATA
export const ABOUT_HERO_DATA = {
  title: "About PPEPCA",
  description:
    "Serving Pakistan's upstream petroleum sector through collaboration, policy advocacy and community development.",
  cta: {
    label: "Let's Connect",
    href: "/contact",
  },
  backgroundImage: {
    src: aboutUsHero_BG,
    alt: "Industrial refinery background",
  },
};

export const ABOUT_HISTORY_SECTION_DATA = {
  heading: "HISTORY",
  paragraphs: [
    "In the eighties, with the rising curve of activities and the unprecedented surge in the petroleum exploration and production (E&P) activities necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest. As a result of consultations between the concerned companies a need was felt to establish an organization which, while playing an advisory role, could safeguard the interests of member companies. In 1988 the few companies engaged in exploration and production of petroleum formed an umbrella organization originally conceived under the name and style of Petroleum Exploration and Production Companies Advisory Committee (PEPCAC), as a representative body of local and foreign companies operating in Pakistan at that time. In May 1995, the organization was registered as a company, limited by guarantee, without any share capital, under the new title of Pakistan Petroleum Exploration and Production Companies Association (PPEPCA).",
    "PPEPCA has thus grown out of its member companies engaged in petroleum exploration and production activities. Its establishment was an important landmark in the history of petroleum industry of Pakistan. It was culmination of endeavors, spread over a long period, of five private sector companies namely Mari Gas, Oxy, POL, PPL, and a public sector company, OGDCL. PPEPCA now, comprises (14) members, (8) of which are foreign E&P companies. PPEPCA has recognition and support of the Ministry of Energy (Petroleum Division).",
  ],
};

export const ABOUT_SECRETARIAT_SECTION_DATA = {
  heading: "SECRETARIAT",
  paragraphs: [
    "The Secretariat is located in Islamabad and has dedicated staff to look after the day-to-day running of the affairs of PPEPCA.",
    "In accordance with the Trade Organization Rules, the Secretariat is headed by a Secretary General who has overall responsibility of PPEPCA and has specific responsibilities, which include:",
  ],
  responsibilities: [
    {
      id: 1,
      text: "Defining, setting out, and meeting assigned yearly targets of PPEPCA.",
    },
    {
      id: 2,
      text: "Interacting with senior Govt. functionaries on behalf of the Chairman PPEPCA Excom.",
    },
  ],
  closingParagraph:
    "The PPEPCA budget for the year is approved by the Excom and funded through yearly membership fee invoiced to companies based on their production numbers with a cap.",
  imageData: {
    src: Secretariat_img,
    alt: "Secretariat staff meeting at PPEPCA office in Islamabad",
  },
};

export const ABOUT_cardData = [
  {
    img: petroleum_form,
    title: "Petroleum forum",
    desc: "To provide a forum for petroleum companies to discuss common issues and develop joint strategies.",
  },
  {
    img: industry_views,
    title: "Industry views",
    desc: "To convey members' collective views on petroleum industry issues like legislation, taxation, transport, trade, safety, and labor.",
  },
  {
    img: represent_petroleum_industry,
    title: "Represent petroleum industry",
    desc: "To represent the E&P sector at all government levels on upstream-related issues.",
  },
  {
    img: recommendations,
    title: "Recommendations",
    desc: "To review upstream operations and propose measures that promote national self-sufficiency and optimal resource use.",
  },
  {
    img: research_and_innovation,
    title: "Research & Innovation",
    desc: "To perform or sponsor research and development initiatives relevant to the petroleum exploration and production industry.",
  },
  {
    img: training,
    title: "Training",
    desc: "To arrange training programs, courses, and seminars to enhance technical skills and professional expertise within the industry.",
  },
  {
    img: info_and_dataSharing,
    title: "Information & Data Sharing",
    desc: "To compile, collect, and circulate accurate, reliable, and up-to-date information on petroleum exploration, development, and production in Pakistan.",
  },
  {
    img: tech_development,
    title: "Technology Development",
    desc: "To develop plans for transferring and advancing suitable upstream technology in consultation with PPEPCA members.",
  },
];

export const ABOUT_ROLE_DATA = {
  title: "Our Role",
  paragraphs: [
    "In the eighties, with the rising curve of activities and the unprecedented surge in petroleum exploration and production (E&P) activities, necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest. As a result of consultations between the concerned companies a need was felt to establish an organization which, while playing an advisory role, could safeguard the interest of its member companies. In 1988 the few companies engaged in exploration and production of petroleum formed an umbrella organization originally conceived under the name and style of Petroleum Exploration and Production Companies Advisory Committee (PEPCAC), as a representative body of local and foreign companies operating in Pakistan at that time. In May 1995, the organization was registered as a company, limited by guarantee, without any share capital, under the new title of ‘Pakistan Petroleum Exploration and Production Companies Association’ (PPEPCA).",
    "PPEPCA has thus grown out of its member companies engaged in petroleum exploration and production activities. Its establishment was an important landmark in the history of petroleum industry of Pakistan. It was culmination of endeavors, spread over a long period, of five private sector companies namely; Mari Gas, Oxy, POL, PPL, UTP and a public sector company- OGDCL. PPEPCA now, comprises (14) members, (8) of which are foreign E&P companies.",
    "PPEPCA has recognition and support of the Ministry of Energy (Petroleum Division).",
  ],
  image: roleSec_side_img,
  imageAlt: "Petroleum Industry Role",
};

export const ABOUT_CSR_SECTION_DATA = {
  heading: "CORPORATE SOCIAL RESPONSIBILITY",
  subHeading: "Member Community Work",
  description:
    "Whichever company works to add 2-3 paragraphs on the work done by each in their area.",
  cta: {
    label: "Newsletter",
    href: "/news",
    ariaLabel: "Read Corporate Social Responsibility Newsletter",
  },
};

export const ABOUT_MEMBERSHIP_SECTION_DATA = {
  heading: "Membership",
  paragraphs: [
    {
      id: 1,
      label: "",
      text: "PPEPCA Membership shall be open to all the Petroleum Exploration and Production Companies operating in Pakistan.",
    },
    {
      id: 2,
      label: "Qualifications:",
      text: "Membership shall be limited to Petroleum Exploration and Production Companies, and their subsidiaries, engaged in exploration and production of petroleum in Pakistan either as operator and/or working interest owner under a Petroleum Concession Agreement signed with the President of Pakistan. It shall be a requirement for membership that the intending Member must have a registered place of business, or at least a liaison office, within Pakistan.",
    },
    {
      id: 3,
      label: "Admission:",
      text: "PPEPCA by majority vote of the Committee may admit any Exploration and Production Company not already a member, to become a Member, if it is in the interest of PPEPCA and provided such company meets the qualifications mentioned in these Articles. New members must be formally proposed and seconded by an existing member and elected by a majority vote of the Committee. The membership fee shall be prescribed by the Committee from time to time.",
    },
    {
      id: 4,
      label: "Contributions:",
      text: "Every Member shall pay the annual contribution for each year in advance. The annual contribution calls shall be based on approved budget expenditure. Members shall make the contributions at the beginning of each year based on assessments made by the Committee any approved by the General Body.",
    },
  ],
  cta: {
    label: "Become a Member",
    path: "/members/membershipform",
    ariaLabel: "Navigate to membership form",
  },
};

// HOME PAGE DATA
export const HOME_aboutContent = {
  subtitle: "About us",
  title: {
    main: "Leadership in Pakistan's",
    highlight: "Petroleum Industry",
  },
  description:
    "In the eighties, with the rising curve of activities and the unprecedented surge in the petroleum exploration and production (E&P) activities, necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest.",
  cta: {
    label: "Read More",
    href: "/about",
  },
  badge: {
    label: "Started in",
    year: "1988",
  },
  images: {
    background: {
      src: Img1,
      alt: "Petroleum Industry",
    },
    foreground: {
      src: Img2,
      alt: "Worker",
    },
  },
};

export const HOME_testimonialContent = {
  backgroundImage: {
    src: members_sec_BG,
    alt: "Oil Industry Background",
  },
  leader: {
    avatar: chairman1,
    name: "Mr. Masood Nabi",
    role: "Chairman, PPEPCA",
    quote: "", // Place quote text here if applicable
  },
  cta: {
    label: "Learn More",
    href: "/members",
  },
  memberLogos: [
    { src: OGX_LOGO, alt: "OGX Logo" },
    { src: PPL_LOGO, alt: "PPL Logo" },
    { src: MARI_LOGO, alt: "MARI Petroleum Logo" },
    { src: GHPL_LOGO, alt: "GHPL Logo" },
    { src: UEP_LOGO, alt: "UEP Logo" },
    { src: POL_LOGO, alt: "POL Logo" },
    { src: PGNIG_LOGO, alt: "PGNiG Logo" },
    { src: PRIME_LOGO, alt: "Prime Logo" },
    { src: MOL_LOGO, alt: "MOL Logo" },
    { src: OP_LOGO, alt: "OP Logo" },
    { src: AEPL_LOGO, alt: "AEPL Logo" },
    { src: KUFPEC_LOGO, alt: "KUFPEC Logo" },
    { src: SAIF_LOGO, alt: "Saif Energy Logo" },
    { src: KPOGCL_LOGO, alt: "KPOGCL Logo" },
  ],
};

export const HOME_faqContent = {
  subtitle: "FAQs",
  heading: "Find Answers to Your Common Queries",
  description:
    "We’ve gathered the questions our users ask the most to help you quickly find the answers you need. If you don’t see your question here, feel free to contact us directly.",
  cta: {
    label: "Read More",
    href: "/faqs", 
  },
  items: [
    {
      question: "What is PPEPCA and what does it do?",
      answer:
        "PPEPCA (Pakistan Petroleum Exploration Companies Association) is an industry body representing petroleum exploration companies in Pakistan. It works to promote responsible exploration, development, and best practices in the petroleum sector.",
    },
    {
      question: "How can I become a member of PPEPCA?",
      answer:
        "Membership is open to companies involved in petroleum exploration in Pakistan. Interested companies can apply through our official website or contact our membership team for guidance on requirements and procedures.",
    },
    {
      question: "Where can I find PPEPCA's policies and reports?",
      answer:
        "All our policies, annual reports, and publications are available on the 'Facts & Links' section of our website. These documents provide insight into our initiatives, compliance guidelines, and industry data.",
    },
  ] 
};

export const HOME_HERO_DATA = {
  badge: {
    full: "PPEPCA — Pakistan Petroleum Exploration and Production Companies Association",
    short: "PPEPCA — Pakistan Petroleum",
  },
  title:{
    line1: "Powering Pakistan's",
    line2: "Petroleum Future"
  },
  description:
    "Uniting industry leaders to drive collaboration, innovation, and sustainable growth across Pakistan’s upstream oil, gas & minerals future.",
  image: heroBg,
  imageAlt: "Petroleum Industry",
  buttons: {
    primary: {
      text: "Let's Connect",
      href: "/contact",
    },
    secondary: {
      text: "Learn More",
      href: "/about",
    },
  },
};

