import LatestNewsHero from '../../components/news/LatestNewsHero';
import NewsLetters from '../../components/news/\NewsLetters';
import InveryData from '../../components/news/InveryData';
import DirectoryOfTrainingProviders from '../../components/news/DirectoryOfTrainingProviders'

export default function Page() {
  return (
    <>
    <LatestNewsHero />
      <div className='xl:px-[4.875rem] lg:px-[4.3875rem] md:px-[3.9rem] sm:px-[3.4125rem] px-[2.925rem] bg-[#f8fafc]'>
        
      <NewsLetters />
      <InveryData/>
      <DirectoryOfTrainingProviders/>
      </div>
    </>
  );
}
