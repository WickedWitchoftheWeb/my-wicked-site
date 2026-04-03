// app/grimoire/tarot/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

function normalize(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ");
}

export default function TarotLandingPage() {
  const [query, setQuery] = useState("");

  const q = useMemo(() => normalize(query), [query]);

  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Tarot"
        coverImage="PASTE-TAROT-COVER-IMAGE-URL"
        subtitle="Click a Card to Explore Its Meaning"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Tarot is a symbolic language of archetypes. Each card is a mirror:
            a snapshot of a pattern, a lesson, a shadow, or a turning point.
          </p>
          <p>
            In this section, you can explore individual card meanings, their
            correspondences, and Wicked perspective. Follow links outward when a
            correspondence calls to you. That is how the grimoire reveals its
            interconnectedness.
          </p>
          <p>
            Use tarot for self reflection, decision support, and ritual clarity.
            The cards do not replace your intuition. They help you hear it.
          </p>
        </section>

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              Tarot is a tool for spiritual practice and personal insight. It is
              not medical, legal, or financial advice.
            </p>
            <p>
              If a reading activates fear, slow down. Return to breath. Ask
              better questions. The cards are honest, but you choose the
              meaning you build from them.
            </p>
          </div>

          <h2 className="grimoire-note-heading">Wicked Note</h2>

          <div className="grimoire-text">
            <p>
              Tarot becomes accurate through relationship. The more consistently
              you work with the cards, the more clearly they speak.
            </p>
            <p>
              If you feel pulled toward a correspondence, follow it. The web is
              designed to connect: planets, zodiacs, chakras, crystals, herbs,
              and the magickal body.
            </p>
          </div>

          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* SEARCH (placed under notes so results are visible) */}
        <section className="grimoire-section">
          <div className="grimoire-index-search">
            <input
              className="grimoire-index-input"
              type="text"
              placeholder="Search Tarot"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* MAJOR ARCANA */}
        <section className="grimoire-section">
          <h2 className="grimoire-heading">Major Arcana</h2>
          <div className="grimoire-divider" />
        </section>

        <section className="grimoire-grid">
          {(!q || normalize("The Fool").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/00-the-fool"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Fool</h2>
                <img
                  src="PASTE-THE-FOOL-IMAGE-URL"
                  alt="The Fool"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Magician").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/01-the-magician"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Magician</h2>
                <img
                  src="PASTE-THE-MAGICIAN-IMAGE-URL"
                  alt="The Magician"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The High Priestess").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/02-the-high-priestess"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The High Priestess</h2>
                <img
                  src="PASTE-THE-HIGH-PRIESTESS-IMAGE-URL"
                  alt="The High Priestess"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Empress").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/03-the-empress"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Empress</h2>
                <img
                  src="PASTE-THE-EMPRESS-IMAGE-URL"
                  alt="The Empress"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Emperor").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/04-the-emperor"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Emperor</h2>
                <img
                  src="PASTE-THE-EMPEROR-IMAGE-URL"
                  alt="The Emperor"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Hierophant").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/05-the-hierophant"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Hierophant</h2>
                <img
                  src="PASTE-THE-HIEROPHANT-IMAGE-URL"
                  alt="The Hierophant"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Lovers").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/06-the-lovers"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Lovers</h2>
                <img
                  src="PASTE-THE-LOVERS-IMAGE-URL"
                  alt="The Lovers"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Chariot").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/07-the-chariot"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Chariot</h2>
                <img
                  src="PASTE-THE-CHARIOT-IMAGE-URL"
                  alt="The Chariot"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Strength").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/08-strength"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Strength</h2>
                <img
                  src="PASTE-STRENGTH-IMAGE-URL"
                  alt="Strength"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Hermit").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/09-the-hermit"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Hermit</h2>
                <img
                  src="PASTE-THE-HERMIT-IMAGE-URL"
                  alt="The Hermit"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Wheel of Fortune").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/10-the-wheel-of-fortune"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Wheel of Fortune</h2>
                <img
                  src="PASTE-WHEEL-OF-FORTUNE-IMAGE-URL"
                  alt="Wheel of Fortune"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Justice").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/11-justice"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Justice</h2>
                <img
                  src="PASTE-JUSTICE-IMAGE-URL"
                  alt="Justice"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Hanged Man").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/12-the-hanged-man"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Hanged Man</h2>
                <img
                  src="PASTE-THE-HANGED-MAN-IMAGE-URL"
                  alt="The Hanged Man"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Death").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/13-death"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Death</h2>
                <img
                  src="PASTE-DEATH-IMAGE-URL"
                  alt="Death"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Temperance").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/14-temperance"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Temperance</h2>
                <img
                  src="PASTE-TEMPERANCE-IMAGE-URL"
                  alt="Temperance"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Devil").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/15-the-devil"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Devil</h2>
                <img
                  src="PASTE-THE-DEVIL-IMAGE-URL"
                  alt="The Devil"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Tower").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/16-the-tower"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Tower</h2>
                <img
                  src="PASTE-THE-TOWER-IMAGE-URL"
                  alt="The Tower"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Star").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/17-the-star"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Star</h2>
                <img
                  src="PASTE-THE-STAR-IMAGE-URL"
                  alt="The Star"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The Moon").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/18-the-moon"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Moon</h2>
                <img
                  src="PASTE-THE-MOON-IMAGE-URL"
                  alt="The Moon"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {/* If you haven’t created 19-the-sun yet, this will 404 until you do */}
          {(!q || normalize("The Sun").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/19-the-sun"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The Sun</h2>
                <img
                  src="PASTE-THE-SUN-IMAGE-URL"
                  alt="The Sun"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Judgement").includes(q) || normalize("Judgment").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/20-judgement"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Judgement</h2>
                <img
                  src="PASTE-JUDGEMENT-IMAGE-URL"
                  alt="Judgement"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("The World").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/tarot/major-arcana/21-the-world"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">The World</h2>
                <img
                  src="PASTE-THE-WORLD-IMAGE-URL"
                  alt="The World"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}
        </section>

        <div className="grimoire-divider" />

        {/* MINOR ARCANA */}
        <section className="grimoire-section">
          <h2 className="grimoire-heading">Minor Arcana</h2>
          <div className="grimoire-divider" />
        </section>

        <section className="grimoire-grid">
          {/* WANDS */}
          {(!q || normalize("Ace of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/01-ace-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Ace of Wands</h2>
                <img src="PASTE-ACE-OF-WANDS-IMAGE-URL" alt="Ace of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Two of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/02-two-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Two of Wands</h2>
                <img src="PASTE-TWO-OF-WANDS-IMAGE-URL" alt="Two of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Three of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/03-three-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Three of Wands</h2>
                <img src="PASTE-THREE-OF-WANDS-IMAGE-URL" alt="Three of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Four of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/04-four-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Four of Wands</h2>
                <img src="PASTE-FOUR-OF-WANDS-IMAGE-URL" alt="Four of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Five of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/05-five-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Five of Wands</h2>
                <img src="PASTE-FIVE-OF-WANDS-IMAGE-URL" alt="Five of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Six of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/06-six-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Six of Wands</h2>
                <img src="PASTE-SIX-OF-WANDS-IMAGE-URL" alt="Six of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Seven of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/07-seven-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Seven of Wands</h2>
                <img src="PASTE-SEVEN-OF-WANDS-IMAGE-URL" alt="Seven of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Eight of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/08-eight-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Eight of Wands</h2>
                <img src="PASTE-EIGHT-OF-WANDS-IMAGE-URL" alt="Eight of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nine of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/09-nine-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Nine of Wands</h2>
                <img src="PASTE-NINE-OF-WANDS-IMAGE-URL" alt="Nine of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ten of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/10-ten-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Ten of Wands</h2>
                <img src="PASTE-TEN-OF-WANDS-IMAGE-URL" alt="Ten of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Page of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/11-page-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Page of Wands</h2>
                <img src="PASTE-PAGE-OF-WANDS-IMAGE-URL" alt="Page of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Knight of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/12-knight-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Knight of Wands</h2>
                <img src="PASTE-KNIGHT-OF-WANDS-IMAGE-URL" alt="Knight of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Queen of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/13-queen-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">Queen of Wands</h2>
                <img src="PASTE-QUEEN-OF-WANDS-IMAGE-URL" alt="Queen of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("King of Wands").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/wands/14-king-of-wands" className="wicked-link">
                <h2 className="grimoire-card-title">King of Wands</h2>
                <img src="PASTE-KING-OF-WANDS-IMAGE-URL" alt="King of Wands" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {/* CUPS */}
          {(!q || normalize("Ace of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/01-ace-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Ace of Cups</h2>
                <img src="PASTE-ACE-OF-CUPS-IMAGE-URL" alt="Ace of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Two of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/02-two-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Two of Cups</h2>
                <img src="PASTE-TWO-OF-CUPS-IMAGE-URL" alt="Two of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Three of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/03-three-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Three of Cups</h2>
                <img src="PASTE-THREE-OF-CUPS-IMAGE-URL" alt="Three of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Four of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/04-four-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Four of Cups</h2>
                <img src="PASTE-FOUR-OF-CUPS-IMAGE-URL" alt="Four of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Five of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/05-five-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Five of Cups</h2>
                <img src="PASTE-FIVE-OF-CUPS-IMAGE-URL" alt="Five of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Six of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/06-six-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Six of Cups</h2>
                <img src="PASTE-SIX-OF-CUPS-IMAGE-URL" alt="Six of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Seven of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/07-seven-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Seven of Cups</h2>
                <img src="PASTE-SEVEN-OF-CUPS-IMAGE-URL" alt="Seven of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Eight of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/08-eight-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Eight of Cups</h2>
                <img src="PASTE-EIGHT-OF-CUPS-IMAGE-URL" alt="Eight of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nine of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/09-nine-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Nine of Cups</h2>
                <img src="PASTE-NINE-OF-CUPS-IMAGE-URL" alt="Nine of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ten of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/10-ten-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Ten of Cups</h2>
                <img src="PASTE-TEN-OF-CUPS-IMAGE-URL" alt="Ten of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Page of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/11-page-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Page of Cups</h2>
                <img src="PASTE-PAGE-OF-CUPS-IMAGE-URL" alt="Page of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Knight of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/12-knight-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Knight of Cups</h2>
                <img src="PASTE-KNIGHT-OF-CUPS-IMAGE-URL" alt="Knight of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Queen of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/13-queen-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">Queen of Cups</h2>
                <img src="PASTE-QUEEN-OF-CUPS-IMAGE-URL" alt="Queen of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("King of Cups").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/cups/14-king-of-cups" className="wicked-link">
                <h2 className="grimoire-card-title">King of Cups</h2>
                <img src="PASTE-KING-OF-CUPS-IMAGE-URL" alt="King of Cups" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {/* SWORDS */}
          {(!q || normalize("Ace of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/01-ace-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Ace of Swords</h2>
                <img src="PASTE-ACE-OF-SWORDS-IMAGE-URL" alt="Ace of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Two of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/02-two-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Two of Swords</h2>
                <img src="PASTE-TWO-OF-SWORDS-IMAGE-URL" alt="Two of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Three of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/03-three-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Three of Swords</h2>
                <img src="PASTE-THREE-OF-SWORDS-IMAGE-URL" alt="Three of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Four of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/04-four-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Four of Swords</h2>
                <img src="PASTE-FOUR-OF-SWORDS-IMAGE-URL" alt="Four of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Five of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/05-five-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Five of Swords</h2>
                <img src="PASTE-FIVE-OF-SWORDS-IMAGE-URL" alt="Five of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Six of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/06-six-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Six of Swords</h2>
                <img src="PASTE-SIX-OF-SWORDS-IMAGE-URL" alt="Six of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Seven of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/07-seven-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Seven of Swords</h2>
                <img src="PASTE-SEVEN-OF-SWORDS-IMAGE-URL" alt="Seven of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Eight of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/08-eight-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Eight of Swords</h2>
                <img src="PASTE-EIGHT-OF-SWORDS-IMAGE-URL" alt="Eight of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nine of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/09-nine-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Nine of Swords</h2>
                <img src="PASTE-NINE-OF-SWORDS-IMAGE-URL" alt="Nine of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ten of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/10-ten-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Ten of Swords</h2>
                <img src="PASTE-TEN-OF-SWORDS-IMAGE-URL" alt="Ten of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Page of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/11-page-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Page of Swords</h2>
                <img src="PASTE-PAGE-OF-SWORDS-IMAGE-URL" alt="Page of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Knight of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/12-knight-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Knight of Swords</h2>
                <img src="PASTE-KNIGHT-OF-SWORDS-IMAGE-URL" alt="Knight of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Queen of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/13-queen-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">Queen of Swords</h2>
                <img src="PASTE-QUEEN-OF-SWORDS-IMAGE-URL" alt="Queen of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("King of Swords").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/swords/14-king-of-swords" className="wicked-link">
                <h2 className="grimoire-card-title">King of Swords</h2>
                <img src="PASTE-KING-OF-SWORDS-IMAGE-URL" alt="King of Swords" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {/* PENTACLES */}
          {(!q || normalize("Ace of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/01-ace-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Ace of Pentacles</h2>
                <img src="PASTE-ACE-OF-PENTACLES-IMAGE-URL" alt="Ace of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Two of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/02-two-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Two of Pentacles</h2>
                <img src="PASTE-TWO-OF-PENTACLES-IMAGE-URL" alt="Two of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Three of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/03-three-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Three of Pentacles</h2>
                <img src="PASTE-THREE-OF-PENTACLES-IMAGE-URL" alt="Three of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Four of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/04-four-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Four of Pentacles</h2>
                <img src="PASTE-FOUR-OF-PENTACLES-IMAGE-URL" alt="Four of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Five of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/05-five-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Five of Pentacles</h2>
                <img src="PASTE-FIVE-OF-PENTACLES-IMAGE-URL" alt="Five of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Six of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/06-six-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Six of Pentacles</h2>
                <img src="PASTE-SIX-OF-PENTACLES-IMAGE-URL" alt="Six of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Seven of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/07-seven-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Seven of Pentacles</h2>
                <img src="PASTE-SEVEN-OF-PENTACLES-IMAGE-URL" alt="Seven of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Eight of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/08-eight-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Eight of Pentacles</h2>
                <img src="PASTE-EIGHT-OF-PENTACLES-IMAGE-URL" alt="Eight of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nine of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/09-nine-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Nine of Pentacles</h2>
                <img src="PASTE-NINE-OF-PENTACLES-IMAGE-URL" alt="Nine of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ten of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/10-ten-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Ten of Pentacles</h2>
                <img src="PASTE-TEN-OF-PENTACLES-IMAGE-URL" alt="Ten of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Page of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/11-page-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Page of Pentacles</h2>
                <img src="PASTE-PAGE-OF-PENTACLES-IMAGE-URL" alt="Page of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Knight of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/12-knight-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Knight of Pentacles</h2>
                <img src="PASTE-KNIGHT-OF-PENTACLES-IMAGE-URL" alt="Knight of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Queen of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/13-queen-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">Queen of Pentacles</h2>
                <img src="PASTE-QUEEN-OF-PENTACLES-IMAGE-URL" alt="Queen of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("King of Pentacles").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/tarot/minor-arcana/pentacles/14-king-of-pentacles" className="wicked-link">
                <h2 className="grimoire-card-title">King of Pentacles</h2>
                <img src="PASTE-KING-OF-PENTACLES-IMAGE-URL" alt="King of Pentacles" className="grimoire-card-img" />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}