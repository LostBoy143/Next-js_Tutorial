import Link from "next/link";
export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{
    lang?: "en" | "es" | "fr";
  }>;
}) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>News articles {articlesId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link
          href={`/articles/${articlesId}?lang=en`}
        >
          English
        </Link>
        <Link
          href={`/articles/${articlesId}?lang=fr`}
        >
          French
        </Link>
        <Link
          href={`/articles/${articlesId}?lang=es`}
        >
          Spanish
        </Link>
      </div>
    </div>
  );
}
