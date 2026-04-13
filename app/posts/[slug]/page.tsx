import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { getPostBySlug, posts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo nao encontrado"
    };
  }

  return {
    title: `${post.title} | Lucas Winter`,
    description: post.description
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell post-shell">
      <SiteHeader />

      <article className="post-layout">
        <Link href="/" className="back-link">
          Voltar para a home
        </Link>

        <header className="post-header">
          <span className="pill">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>

          <div className="post-meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>{post.tags.join(" · ")}</span>
          </div>
        </header>

        <div className="post-content">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
