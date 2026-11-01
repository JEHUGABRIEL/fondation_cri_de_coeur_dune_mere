import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getPosts } from "@/lib/content";
import { postsEn } from "@/lib/en-content";
import { formatDate } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "News",
  alternates: { canonical: "/en/news", languages: { fr: "/actualites", en: "/en/news" } },
  description:
    "News from the Cri de Cœur d’une Mère Foundation: health campaigns, scholarships, partnerships and field work in Bangui.",
};

export default async function NewsEn() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        lang="en"
        current="News"
        title={
          <>
            News from <em>the field.</em>
          </>
        }
        intro="Health campaigns, scholarships, partner meetings: the highlights of the Foundation’s work with mothers, children and young women."
        image="/images/fondation/kits-enfants.webp"
        imageAlt="Children holding their school kits"
      />

      <section className="section wrap">
        <div className="news-layout">
          <div>
            <SectionHeading
              kicker="News"
              title={
                <>
                  <span className="lt">Our latest</span>{" "}
                  <span className="hd">stories.</span>
                </>
              }
            />
            <div className="post-list">
              {posts.map((post) => {
                const en = postsEn[post.slug];
                return (
                  <article className="post-row" key={post.id}>
                    <Link
                      href={`/en/news/${post.slug}`}
                      className="post-media"
                      aria-label={`Read: ${en?.title ?? post.title}`}
                    >
                      <Image
                        src={post.image}
                        alt={en?.imageAlt ?? post.imageAlt}
                        width={1024}
                        height={704}
                        sizes="(max-width: 980px) 92vw, 46vw"
                      />
                    </Link>
                    <div className="post-body">
                      <p className="kicker">{en?.category ?? post.category}</p>
                      <p className="post-date">
                        <Icon name="calendar" size={16} />
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt, "en")}
                        </time>
                      </p>
                      <h2>
                        <Link href={`/en/news/${post.slug}`}>{en?.title ?? post.title}</Link>
                      </h2>
                      <p>{en?.excerpt ?? post.excerpt}</p>
                      <Link href={`/en/news/${post.slug}`} className="line-more">
                        Read more
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside>
            <div className="aside-box">
              <h4>The Foundation’s journal</h4>
              <p>
                Highlights of our work with mothers, children and young women in
                Bangui and neighbouring municipalities.
              </p>
            </div>
            <h3 className="side-h">Explore</h3>
            <div className="aside-box">
              <ul>
                <li>
                  <Link href="/en/programmes">Our programmes</Link>
                </li>
                <li>
                  <Link href="/en/actions">Our work in the field</Link>
                </li>
              </ul>
            </div>
            <div className="aside-box brand">
              <h4>Help our work live on</h4>
              <p>
                Share our posts, talk about our programmes or support an action:
                your voice matters.
              </p>
              <Link href="/en/support" className="btn">
                Support us
                <Icon name="heart" size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Spread the word"
        title="One story can change a path."
        text="Share our posts, talk about our programmes or support an action: your voice matters."
        primaryLabel="Support our work"
        primaryHref="/en/support"
        secondaryLabel="Contact us"
        secondaryHref="/en/support#contact"
      />
    </>
  );
}
