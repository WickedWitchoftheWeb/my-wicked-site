"use client";
// app/grimoire/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../components/grimoire/SecondaryHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GrimoireIndex() {
   const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <>
      <SecondaryHeader />

      <main className="grimoire-wrap">
        <div className="grimoire-container">
          <section className="grimoire-section">
            <h1 className="grimoire-title">Wicked&apos;s Virtual Grimoire</h1>

            <div className="grimoire-index-search">
             <input
  className="grimoire-index-input"
  type="text"
  placeholder="Search the Wicked Grimoire"
  value={q}
  onChange={(e) => setQ(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const trimmed = q.trim();
      if (!trimmed) return;

      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }}
/>
            </div>

            <p className="grimoire-callout">Knowledge is Power</p>
          </section>

          <div className="grimoire-divider" />

          <section className="grimoire-section grimoire-content">
            <p>
              <Link className="grimoire-footer-link" href="/grimoire/source">
                Source
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/alchemy">
                Alchemy
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/astrology">
                Astrology
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/chakras">
                Chakras
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/codex">
                Codex
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/the-cosmos"
              >
                The Cosmos
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/colors">
                Colors
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/craft-tools"
              >
                Craft Tools
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link" href="/grimoire/crystals-stones">
                Crystals &amp; Stones
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/deities">
                Deities
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/divination"
              >
                Divination
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/dream-craft"
              >
                Dream Craft
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/elements">
                Elements
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/energy-grimoire"
              >
                Energy Grimoire
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/greencraft"
              >
                Greencraft
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/herbs">
                Herb Grimoire
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/metals">
                Metals
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/mythology">
                Mythology
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/numerology"
              >
                Numerology
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/parts-ofthe-magickal-body"
              >
                Parts of the Magickal Body
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/parts-ofthe-spiritual-self"
              >
                Parts of the Spiritual Self
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/sigils">
                Sigils
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/spell-book"
              >
                Spell Book
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/tarot">
                Tarot
              </Link>
            </p>

            <p>
              <Link className="grimoire-footer-link" href="/grimoire/timing">
                Timing
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/vibration-scale"
              >
                Vibrational Scale of Human Consciousness
              </Link>
            </p>

            <p>
              <Link
                className="grimoire-footer-link"
                href="/grimoire/witch-weather"
              >
                Witch Weather
              </Link>
            </p>
          </section>

          <section className="grimoire-section">
            <h2 className="grimoire-subheading">Other Resources</h2>
            <div className="grimoire-divider" />

            <div className="grimoire-content">
              <p>
                <Link className="grimoire-footer-link" href="#">
                  Book Craft
                </Link>
              </p>
            </div>
          </section>

          <footer className="grimoire-footer">
            <p>
              <Link href="/" className="grimoire-footer-link">
                ← Back to Domicile
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}