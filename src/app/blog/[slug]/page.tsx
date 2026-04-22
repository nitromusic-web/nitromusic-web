import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "#site/content";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — NitroMusic`,
    description: post.subtitle ?? post.excerpt,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = post.related
    .map((relSlug) => posts.find((p) => p.slug === relSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article className="post">
      <header className="post-head">
        <div className="post-cat">{post.category}</div>
        <h1 className="post-title">{post.title}</h1>
        {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
        <div className="post-meta">
          <span>{formatDate(post.publishedAt)}</span>
          {post.readTime && <span>· {post.readTime}</span>}
          <span>
            · <span aria-hidden>👁</span> {post.views.toLocaleString()}
          </span>
        </div>
        {post.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.thumbnail}
            alt={post.title}
            className="post-thumb"
            loading="eager"
          />
        )}
      </header>

      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      {related.length > 0 && (
        <section className="post-related">
          <h3 className="post-related-title">다른 분들이 이어서 본 콘텐츠</h3>
          <div className="post-related-grid">
            {related.map((r) => (
              <a key={r.slug} href={r.url} className="post-related-card">
                {r.thumbnail && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.thumbnail} alt={r.title} />
                )}
                <div className="post-related-body">
                  <span className="post-related-cat">{r.category}</span>
                  <h4>{r.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
