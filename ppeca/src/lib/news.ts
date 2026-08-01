const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const BASE_URL = `${API_BASE_URL}/api/newses`;

export async function getLatestNews(limit = 3) {
  const res = await fetch(
    `${BASE_URL}?pagination[limit]=${limit}&sort=publishedAt:desc`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data.data ?? [];
}

export async function getAllNews(
  page = 1,
  pageSize = 8
) {
  const res = await fetch(
    `${BASE_URL}?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    return {
      news: [],
      totalPages: 1,
    };
  }

  const data = await res.json();

  return {
    news: data.data.map(formatNews),
    totalPages: data.meta.pagination.pageCount,
  };
}

export async function getNewsBySlug(slug: string) {
  const res = await fetch(
    `${BASE_URL}?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data.data?.[0] ?? null;
}

export function formatNews(news: any) {
  return {
    ...news,
    NewsImage: {
      url: news.NewsImage?.url
        ? `${API_BASE_URL}${news.NewsImage.url}`
        : undefined,
    },
    publishedAt: new Date(news.publishedAt).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour12: true,
    }),
  };
}