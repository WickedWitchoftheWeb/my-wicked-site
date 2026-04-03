"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import SecondaryHeader from "../../components/grimoire/SecondaryHeader";
import { WICKED_SEARCH_INDEX } from "../../lib/wickedSearchIndex";
import type { WickedSearchItem } from "../../lib/wickedSearchIndex";

function normalize(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ");
}

function getDisplayTitle(item: WickedSearchItem) {
  const source = item.title || "";

  if (/zodiacs$/i.test(source)) {
    return "The Twelve Signs";
  }

  const match = source.match(/zodiacs?\s+(.+)$/i);
  if (match && match[1]) return match[1].trim();

  return source;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const urlQ = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(urlQ);

  useEffect(() => {
    setQuery(urlQ);
  }, [urlQ]);

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];

    return WICKED_SEARCH_INDEX.filter((item: WickedSearchItem) => {
      const haystack = normalize(
        [
          item.title,
          item.breadcrumb ?? item.section ?? "",
          item.snippet ?? "",
          item.bodyText ?? "",
          item.keywords ?? "",
          item.href,
        ].join(" ")
      );

      return haystack.includes(q);
    }).slice(0, 50);
  }, [query]);

  const showResults = query.trim().length > 0;

  return (
    <main className="grimoire-wrap">
      <div className="grimoire-container grimoire-content">
        <section className="grimoire-section">
          <h1 className="grimoire-title">Search</h1>

          <div className="grimoire-index-search">
            <input
              className="grimoire-index-input"
              type="text"
              placeholder="Search the Wicked Site"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grimoire-divider" />
        </section>

        {showResults && (
          <section className="grimoire-section">
            {results.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <div className="grimoire-search-results">
                {results.map((item) => (
                  <div key={item.href} className="grimoire-search-result">
                    <Link className="grimoire-search-title" href={item.href}>
                      {getDisplayTitle(item)}
                    </Link>

                    {item.snippet ? (
                      <p className="grimoire-search-snippet">{item.snippet}</p>
                    ) : item.breadcrumb ? (
                      <p className="grimoire-search-snippet">
                        {item.breadcrumb}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <>
      <SecondaryHeader />
      <Suspense fallback={null}>
        <SearchContent />
      </Suspense>
    </>
  );
}