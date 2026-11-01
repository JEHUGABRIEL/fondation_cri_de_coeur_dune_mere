import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { paragraphs } from "@/lib/content";
import { getPost, getPosts } from "@/lib/content";
import { postsEn } from "@/lib/en-content";
import { formatDate } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found" };
  const en = postsEn[post.slug];
  return {
    title: en?.title ?? post.title,
    description: en?.excerpt ?? post.excerpt,
    alternates: {
      canonical: `/en/news/${post.slug}`,
      languages: {
        fr: `/actualites/${post.slug}`,
        en: `/en/news/${post.slug}`,
      },
    },
  };
}

export default async function ArticleEn({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const en = postsEn[post.slug];
  const body = en?.body ?? paragraphs(post.body);
  const meta = en?.meta ?? post.meta;
  const all = await getPosts();
  const index = all.findIndex((row) => row.id === post.id);
  const next = index >= 0 ? all[index + 1] : undefined;

  return (
    <>
      <PageHero
        lang="en"
        current={en?.title ?? post.title}
        parents={[{ label: "News", href: "/en/news" }]}
        title={en?.title ?? post.title}
        image={post.image}
        imageAlt={en?.imageAlt ?? post.imageAlt}
      >
        <p className="post-date">
          <Icon name="calendar" size={16} />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, "en")}</time>
          <span>·</span>
          <span>{en?.category ?? post.category}</span>
        </p>
      </PageHero>

      <article className="section wrap two align-start">
        <div className="article-body">
          {en?.quote ?? post.quote ? (
            <blockquote>« {en?.quote ?? post.quote} »</blockquote>
          ) : null}
          {body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {meta.length > 0 ? (
            <dl className="article-meta">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <aside>
          <div className="aside-box">
            <h4>About this article</h4>
            <p>
              Published on {formatDate(post.publishedAt, "en")} in {en?.category ?? post.category}.
            </p>
            <Link href="/en/news" className="line-more">
              All news
            </Link>
          </div>
          <div className="aside-box brand">
            <h4>Support our work</h4>
            <p>
              Every contribution funds a concrete action for a mother, a girl or a
              family in Bangui.
            </p>
            <Link href="/en/support" className="btn">
              Support us
              <Icon name="heart" size={16} />
            </Link>
          </div>
          {next ? (
            <div className="aside-box">
              <h4>Read next</h4>
              <div className="side-next">
                <Image
                  src={next.image}
                  alt=""
                  width={320}
                  height={220}
                  sizes="(max-width: 980px) 40vw, 140px"
                />
                <Link href={`/en/news/${next.slug}`}>
                  {postsEn[next.slug]?.title ?? next.title}
                </Link>
              </div>
            </div>
          ) : null}
        </aside>
      </article>

      <CtaBand
        eyebrow="Act with us"
        title="A protected mother, a girl in school, an independent woman."
        text="Partner, volunteer or donor: your contribution matters."
        primaryLabel="Support us"
        primaryHref="/en/support"
        secondaryLabel="Contact us"
        secondaryHref="/en/support#contact"
      />
    </>
  );
}
