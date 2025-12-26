import PolicyHeader from '../../components/facts/PolicyHeader'
import PoliciesAndRegulations from '../../components/facts/PoliciesAndRegulations'
import PakistanPetroleumInformation from '../../components/facts/PakistanPetroleumInformation'
import PakistanPetroleumCards from '../../components/facts/PakistanPetroleumCards'

export default function Facts() {
  return (
    <main className="md:p-10 p-5 bg-[#f8fafc] flex-col flex gap-8 md:gap-16">
        <PolicyHeader/>
        <PoliciesAndRegulations/>
        <PakistanPetroleumInformation/>
        <PakistanPetroleumCards/>
    </main>
  );
}
