import { getLatestNews } from "@/src/lib/news";
import LatestNewsHeroClient from "./LatestNewsHeroClient";

export default async function LatestNewsHero() {
  const newsItems = await [getLatestNews(3)];

  return <LatestNewsHeroClient newsItems={newsItems} />;
}