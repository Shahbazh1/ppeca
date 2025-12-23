// data/companies.ts
export interface CompaniesData {
  id: number;
  name: string;
  logo: string; // path to image
  address: string;
  ceo: string;
  ceoDesignation: string;
  description: string[];
  telephone: string;
  fax: string;
  website: string;
}

export const companies: CompaniesData[] = [
  {
    id: 1,
    name: "Al-Haj Enterprises (Private) Limited",
    logo: "/images/POL_logo.png",
    address: "Street No. 29, Plot No. 145, Etihad Plaza, I & T Centre, Sector G-9/1, Islamabad",
    ceo: "Mr. Taj Mohammad Afridi",
    ceoDesignation: "Chief Executive Officer",
    description: [
      "Al-Haj Enterprises (Private) Limited (AEPL) is a recently incorporated Pakistani Exploration and Production Company. AEPL is a part of the AL-Haj Group of Companies involved in Logistics, Oil and Goods Transportation, Textiles, Metals and manufactures of light and heavy vehicles.",
      "Al-Haj Group through its subsidy, AL-Haj FAW Motors has a Joint Venture with China for manufacturing of light and heavy transport vehicles.",
      "Al-Haj Enterprises (Private) Limited (AEPL) was awarded two (2) Blocks i.e. Block No. 3271-6 Potwar South and Block No. 3169-4 Baska North, during the bid round held in 2013. To-date AEPL has completed acquisition of 135kms of new2-D Seismic in Potwar South Block.",
      "AEPL’s major shareholder is Senator Taj Muhammad Afridi. AEPL has a strong Technical and Management team comprising of senior personnel from the industry."
    ],
    telephone: "92 (51) 2264460-63",
    fax: "92 (51) 2264465",
    website: "#",
  },
  {
    id: 2,
    name: "Another Company",
    logo: "/images/another_logo.png",
    address: "Some address here",
    ceo: "Mr. John Doe",
    ceoDesignation: "CEO",
    description: ["Description paragraph 1", "Description paragraph 2"],
    telephone: "123456789",
    fax: "987654321",
    website: "#",
  },
];
