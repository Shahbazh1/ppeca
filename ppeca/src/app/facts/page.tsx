import PolicyHeader from '../../components/facts/PolicyHeader'
import PoliciesAndRegulations from '../../components/facts/PoliciesAndRegulations'
import PakistanPetroleumInformation from '../../components/facts/PakistanPetroleumInformation'
import PakistanPetroleumCards from '../../components/facts/PakistanPetroleumCards'

export default function facts() {
  return (
    <div className="py-10 px-10 bg-[#f8fafc] flex-col flex gap-16">
        <PolicyHeader/>
        <PoliciesAndRegulations/>
        <PakistanPetroleumInformation/>
        <PakistanPetroleumCards/>
    </div>
  );
}
