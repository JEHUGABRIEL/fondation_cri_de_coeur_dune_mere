import Link from "next/link";

type Props = {
  page: number;
  total: number;
  perPage: number;
  /** Chemin courant, sans paramètres. */
  path: string;
  /** Paramètres à conserver (statut, filtre…). */
  params?: Record<string, string | undefined>;
};

/** Pagination des listes du back-office, dans l'esprit du BO de Restaurant M'. */
export function Pagination({ page, total, perPage, path, params = {} }: Props) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  if (pages <= 1) return null;

  const href = (target: number) => {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value && key !== "page" && key !== "ok") query.set(key, value);
    }
    if (target > 1) query.set("page", String(target));
    const suffix = query.toString();
    return suffix ? `${path}?${suffix}` : path;
  };

  const shown = [...new Set([1, page - 1, page, page + 1, pages])]
    .filter((value) => value >= 1 && value <= pages)
    .sort((a, b) => a - b);
  const from = (page - 1) * perPage + 1;
  const to = Math.min(total, page * perPage);

  return (
    <nav className="adm-pager" aria-label="Pagination">
      {page > 1 ? (
        <Link href={href(page - 1)} className="adm-btn adm-btn-ghost adm-btn-sm">
          Précédent
        </Link>
      ) : (
        <span />
      )}
      <span className="adm-row-sub">
        {from}–{to} sur {total} · page {page} / {pages}
      </span>
      {page < pages ? (
        <Link href={href(page + 1)} className="adm-btn adm-btn-ghost adm-btn-sm">
          Suivant
        </Link>
      ) : (
        <span />
      )}
      <span className="adm-sr">
        Pages : {shown.join(", ")}
      </span>
    </nav>
  );
}
