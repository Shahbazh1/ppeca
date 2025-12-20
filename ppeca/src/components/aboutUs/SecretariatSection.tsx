import Image from "next/image";
import Secretariat_img from '../../../public/images/Secretariat_img.png'

const SecretariatSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-8 py-10 pb-16">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Heading */}
          <h1 className="mb-4 lg:text-[30px] xl:text-[36px] font-bold tracking-[2px] text-[#0b3a63]">
            SECRETARIAT
          </h1>

          {/* Paragraphs */}
          <div className="space-y-5 lg:text-[14px]  xl:text-[15px] leading-5 text-[#0b3a63]">
            <p>
              The Secretariat is located in Islamabad and has dedicated staff to
              look after the day to day running of the affairs of PPEPCA.
            </p>

            <p>
              In accordance with the Trade Organization Rules the Secretariat is
              headed by a Secretary General who has overall responsibility of
              PPEPCA and has specific responsibilities also, which includes:
            

            {/* Bullet List */}
            <ul className="list-disc pl-6 ">
              <li>
                Defining, setting out and meeting assigned yearly targets of
                PPEPCA.
              </li>
              <li>
                Interacting with senior Govt. functionaries on behalf of the
                Chairman PPEPCA Excom.
              </li>
            </ul>
</p>
            <p>
              The PPEPCA budget for the year is approved by the Excom and funded
              through yearly membership fee invoiced to companies based on their
              production numbers with a cap.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1  h-[330px] shrink-0 overflow-hidden rounded-lg border-2 border-[#14a637]">
  <Image
    src={Secretariat_img} // replace with your actual image path
    alt="PPEPCA Secretariat Meeting"
    className="object-cover w-full h-full"
    priority 
  />
</div>

      </div>
    </section>
  );
};

export default SecretariatSection;
