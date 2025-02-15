import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">
        Homepage
      </h1>
      <Link href="/articles/breaking-news-123?lang=en">
        Read in English
      </Link>
      <Link href="/articles/breaking-news-123?lang=fr">
        Read in French
      </Link>
      <Link href="/articles/breaking-news-123?lang=es">
        Read in Spanish
      </Link>
    </>
  );
}
