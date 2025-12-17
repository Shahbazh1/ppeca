import Image from "next/image";
import { StaticImageData } from "next/image";

import uep_president from '../../../public/images/uep_president.png'
import sel_ceo from '../../../public/images/sel_ceo.png'
import ppl_ceo from '../../../public/images/ppl_ceo.png'
import pogc_md from '../../../public/images/pogc_md.png'
import orient_petroleum_ceo from '../../../public/images/orient_petroleum_ceo.png'
import mol_ceo from '../../../public/images/mol_ceo.png'
import mari_ceo from '../../../public/images/mari_ceo.png'
import kufpec_manager from '../../../public/images/kufpec_manager.png'
import kpogc_ceo from '../../../public/images/kpogc_ceo.png'

export default function LeadershipSection() {
  return (
    <section className="bg-white py-20 ">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-extrabold text-[#0b2b4c]">
            Leadership & Executive Committee
          </h2>
          <p className="mt-3 text-[18px] text-gray-500">
            Representing member companies and guiding PPEPCA’s mission.
          </p>
        </div>
        
        {/* Grid */}
        <div className="flex flex-col items-center gap-10 mx-12">

          {/* Row 1 */}
          <div className="flex gap-8">
            <LeaderCard
              name="Mr. Ali Taha Al Temimi"
              title="Country Manager"
              company="Kufpec"
              image={kufpec_manager}
            />
            <LeaderCard
              name="Mr. Kamran Ajmal Mian"
              title="Chief Executive Officer"
              company="PPL"
              image={ppl_ceo}
            />
            <LeaderCard
              name="Mr. Andrzej Kaczorowski"
              title="Managing Director"
              company="POGC"
              image={pogc_md}
            />
            <LeaderCard
              name="Mr. Nasir Khan"
              title="Chief Executive Officer"
              company="KPOGCL"
              image={kpogc_ceo}
            />
            <LeaderCard
              name="Mr. Faheem Haider"
              title="Managing Director/CEO"
              company="MARI"
              image={mari_ceo}
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-8">
            <LeaderCard
              name="Laszlo Zsolt Adam"
              title="Managing Director/CEO"
              company="MOL"
              image={mol_ceo}
            />
            <LeaderCard
              name="Kamran Ahmed"
              title="Chief Executive Officer"
              company="Orient Petroleum"
              image={orient_petroleum_ceo}
            />
            <LeaderCard
              name="Jehangir Saifullah Khan"
              title="Chief Executive Officer"
              company="SEL"
              image={sel_ceo}
            />
            <LeaderCard
              name="Zaheer Alam"
              title="President"
              company="UEP"
              image={uep_president}
            />
          </div>

        </div>
      </div>
    </section>
  );
}




interface Props {
  name: string;
  title: string;
  company: string;
  image: string | StaticImageData;
}
 function LeaderCard({ name, title, company, image }: Props) {
  return (
    <div className="w-[230px] rounded-xl bg-[#f6f6f6] shadow-md overflow-hidden">
      <div className="relative h-[220px] w-full bg-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 py-3 text-center">
        <h3 className="text-[15px] font-semibold text-[#0b2b4c] leading-tight">
          {name}
        </h3>

        <p className="text-[14px] text-[#0b2b4c] mt-1">
          {title}
        </p>

        <p className="text-[14px] font-medium text-green-600 mt-1">
          {company}
        </p>
      </div>
    </div>
  );
}
