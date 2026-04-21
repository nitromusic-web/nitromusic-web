import { defineConfig, s } from 'velite'

/**
 * Velite collections — 로컬 마크다운(`content/posts/*.md`)을 컴파일해서
 * `.velite/index.js`로 타입화된 JSON + `public/static/blog/*` 자산으로 배출.
 *
 * Next.js 라우트는 `import { posts } from '#site/content'`로 읽어 SSG.
 */

const posts = {
  name: 'Post',
  pattern: 'posts/**/*.md',
  schema: s
    .object({
      title: s.string().max(160),
      slug: s.slug('posts'),
      category: s.string(),
      subtitle: s.string().optional(),
      thumbnail: s.string().optional(),
      publishedAt: s.isodate(),
      views: s.number().default(0),
      readTime: s.string().optional(),
      audience: s.array(s.string()).default([]),
      excerpt: s.string().optional(),
      featured: s.boolean().default(false),
      related: s.array(s.string()).default([]),
      metadata: s.metadata(),
      body: s.markdown(),
      raw: s.raw(),
    })
    .transform((data) => ({
      ...data,
      url: `/blog/${data.slug}`,
    })),
}

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static/blog',
    base: '/static/blog/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
