"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { type Lang, nav, switchPath, ui } from "@/lib/i18n";
import { site } from "@/lib/site";

type NavListProps = { lang: Lang; variant: "bar" | "drawer"; onNavigate?: () => void };

function NavList({ lang, variant, onNavigate, pathname }: NavListProps & { pathname: string | null }) {
  const isActive = (href: string) => {
    if (pathname === null) return false;
    if (href === "/" || href === "/en") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <ul>
      {nav[lang].map((item) => {
        const active = isActive(item.href);
        const link = (
          <Link
            href={item.href}
            className={variant === "bar" && active ? "on" : undefined}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
        return variant === "bar" ? (
          <li key={item.href}>{link}</li>
        ) : (
          <li key={item.href} className={active ? "on" : undefined}>
            <div className="mrow">{link}</div>
          </li>
        );
      })}
    </ul>
  );
}

function ActiveNavList(props: NavListProps) {
  return <NavList {...props} pathname={usePathname()} />;
}

function Nav(props: NavListProps) {
  return (
    <Suspense fallback={<NavList {...props} pathname={null} />}>
      <ActiveNavList {...props} />
    </Suspense>
  );
}

function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? (lang === "en" ? "/en" : "/");
  const href = switchPath(pathname, lang);
  return (
    <Link
      href={href}
      className="lang-switch"
      hrefLang={ui[lang].otherLang}
      lang={ui[lang].otherLang}
      aria-label={ui[lang].language}
      title={ui[lang].language}
    >
      {ui[lang].languageShort}
    </Link>
  );
}

export function SiteHeader({ lang = "fr" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const home = lang === "en" ? "/en" : "/";
  const support = lang === "en" ? "/en/support" : "/soutenir";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-head${stuck ? " stuck" : ""}`}>
      <div className="head-in">
        <Link href={home} className="brand" aria-label={`${site.name} — ${ui[lang].home}`}>
          <Image
            src="/images/logo.png"
            alt=""
            width={512}
            height={512}
            className="brand-img"
            priority
          />
          <span className="brand-word">
            <strong>Cri de Cœur</strong>
            <small>{lang === "en" ? "Foundation of a Mother" : "Fondation d’une Mère"}</small>
          </span>
        </Link>

        <nav className="navbar" aria-label="Navigation principale">
          <Nav lang={lang} variant="bar" />
        </nav>

        <Suspense fallback={<span className="lang-switch">{ui[lang].languageShort}</span>}>
          <LangSwitch lang={lang} />
        </Suspense>

        <Link href={support} className="nav-cta">
          {ui[lang].support}
        </Link>

        <button
          type="button"
          className={`burger${open ? " on" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mback${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={`mmenu${open ? " open" : ""}`}
        aria-label="Navigation mobile"
        inert={!open}
      >
        <div className="mmenu-head">
          <Link href={home} className="brand" onClick={() => setOpen(false)}>
            <Image src="/images/logo.png" alt="" width={500} height={500} className="brand-img" />
            <span className="brand-word">
              <strong>Cri de Cœur</strong>
              <small>{lang === "en" ? "Foundation" : "Fondation"}</small>
            </span>
          </Link>
          <button
            type="button"
            className="mclose"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="mmenu-social">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Facebook — ${site.name}`}
          >
            <Icon name="facebook" size={20} />
          </a>
          <a
            href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp — ${site.name}`}
          >
            <Icon name="whatsapp" size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label={`Email — ${site.name}`}>
            <Icon name="mail" size={20} />
          </a>
        </div>

        <div className="mmenu-list">
          <Nav lang={lang} variant="drawer" onNavigate={() => setOpen(false)} />
          <div className="mmenu-foot">
            <Link href={support} className="btn btn-light" onClick={() => setOpen(false)}>
              {ui[lang].support}
              <Icon name="heart" size={16} />
            </Link>
            <Suspense fallback={null}>
              <LangSwitch lang={lang} />
            </Suspense>
            <Link
              href={lang === "en" ? "/en/support#contact" : "/#contact"}
              className="btn btn-brand mmenu-contact-btn"
              onClick={() => setOpen(false)}
            >
              <Icon name="mail" size={16} />
              {ui[lang].contact}
            </Link>
            <div className="mmenu-contact">
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={16} />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
