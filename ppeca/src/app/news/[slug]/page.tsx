import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const revalidate = 300;

async function getNewsBySlug(slug: string) {
  const res = await fetch(
    `${API_BASE_URL}/api/newses?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const response = await getNewsBySlug(slug);
  const news = response?.data?.[0];

  if (!news) {
  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="flex gap-2 items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#004a26]">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-[#004a26]">News & Events</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Not Available</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <h1 className="text-3xl font-bold text-[#0a2540] mb-4">
          News Not Available
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          This news article may have been removed or is no longer available.
          Please explore other latest news and updates.
        </p>

        <Link
          href="/news"
          className="inline-flex px-6 py-3 bg-[#004a26] text-white font-semibold hover:bg-[#00361d] transition"
        >
          View All News
        </Link>
      </div>
    </article>
  );
}


  const imageUrl = news.NewsImage?.url
    ? `${API_BASE_URL}${news.NewsImage.url}`
    : null;

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Breadcrumb */}
      <div className=" border-b border-gray-200 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="flex gap-2 items-center font-['Open_Sans'] text-[13px] sm:text-[14px] text-gray-500">
            <Link href="/" className="hover:text-[#004a26]">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-[#004a26]">News & Events</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-none">
              {news.NewsTitle}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-4 mb-4 font-['Open_Sans']">
          <span className="bg-[#004a26] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
            {news.Category || "CATEGORY"}
          </span>
          <p className="text-[13px] sm:text-[14px] text-gray-500 italic leading-[1.5]">
            Published on{" "}
            {new Date(news.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0a2540] leading-[1.1] mb-8">
          {news.NewsTitle}
        </h1>

        {/* Featured Image */}
        {imageUrl && (
          <div className="relative w-full aspect-video md:aspect-[21/9] mb-10 shadow-lg overflow-hidden rounded-sm">
            <Image
              src={imageUrl}
              alt={news.NewsImage.alternativeText || news.NewsTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content Body */}
        <div className="font-['Open_Sans'] text-[#0A2540] text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] space-y-4">
          {news.NewsDescription}
        </div>

        {/* Source Link */}
        {news.NewsUrl && (
          <div className="mt-12 pt-8 border-t border-gray-100 font-['Open_Sans']">
            <a
              href={news.NewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#004a26] text-[#004a26] font-semibold text-[13px] sm:text-[14px] hover:bg-[#004a26] hover:text-white transition-colors duration-200"
            >
              Read Original Source
              <span className="ml-2">→</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
