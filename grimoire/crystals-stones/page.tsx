// app/grimoire/crystals-stones/page.tsx
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

export default function CrystalsLandingPage() {
  const [query, setQuery] = useState("");

  const q = useMemo(() => normalize(query), [query]);

  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Crystal Grimoire"
        coverImage="PASTE-CRYSTAL-COVER-IMAGE-URL"
        subtitle="Click a Crystal to Explore Its Magickal Profile"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Crystals and stones are Earth&apos;s memory made solid: mineral
            structures formed through pressure, time, heat, and element. In
            witchcraft, they are used to amplify intention, protect the aura,
            ground the nervous system, open perception, and anchor ritual work
            into the body and the home.
          </p>
          <p>
            Each crystal in this grimoire is treated as a complete node in the
            web: its energetic behavior, its magickal correspondences, practical
            ways to work with it, and the symbolism that shaped its reputation.
          </p>
          <p>
            As this section grows, these pages will link outward into the rest
            of the Wicked Grimoire: chakras, planets, deities, tarot, herbs, and
            the magickal body. The goal is not just to list meanings: it is to
            build a living reference system you can return to again and again.
          </p>
        </section>

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              This Crystal Grimoire is written for spiritual and magickal
              practice. It is not medical advice.
            </p>
            <p>
              Crystals are supportive tools, not replacements for professional
              care. If a practice involves physical contact, ingestion, or any
              health related claim, safety and discernment come first.
            </p>
          </div>

          <h2 className="grimoire-note-heading">Wicked Note</h2>

          <div className="grimoire-text">
            <p>
              When working with crystals, consistency matters more than quantity.
              One stone used with intention, repeatedly, becomes a reliable
              ally.
            </p>
            <p>
              Notice what a crystal changes: thought patterns, sleep, mood,
              courage, boundaries, focus. That is how relationship replaces
              guessing.
            </p>
            <p>
              These pages are designed to connect. When a correspondence calls
              to you, follow it. That is how the grimoire reveals patterns.
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
              placeholder="Search Crystal Grimoire"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* Crystal entries */}
        <section className="grimoire-grid">
          {(!q || normalize("Agate").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/agate" className="wicked-link">
                <h2 className="grimoire-card-title">Agate</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Agate"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Blue Lace Agate").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/agate/blue-lace-agate"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Blue Lace Agate</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Blue Lace Agate"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Fire Agate").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/agate/fire-agate"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Fire Agate</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Fire Agate"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Moss Agate").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/agate/moss-agate"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Moss Agate</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Moss Agate"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Alexandrite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/alexandrite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Alexandrite</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/crystals/alexandrite-hero.png"
                  alt="Alexandrite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Amazonite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/amazonite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Amazonite</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/crystals/amazonite-hero.png"
                  alt="Amazonite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Amber").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/amber" className="wicked-link">
                <h2 className="grimoire-card-title">Amber</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/crystals/amber-hero.png"
                  alt="Amber"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Amethyst").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/amethyst"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Amethyst</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/crystals/amethyst-hero.png"
                  alt="Amethyst"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ametrine").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/ametrine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Ametrine</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/crystals/ametrine-hero.png"
                  alt="Ametrine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Aquamarine").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/aquamarine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Aquamarine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Aquamarine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Aventurine").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/aventurine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Aventurine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Aventurine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Green Aventurine").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/aventurine/green-aventurine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Green Aventurine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Green Aventurine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Peach Aventurine").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/aventurine/peach-aventurine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Peach Aventurine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Peach Aventurine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Azurite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/azurite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Azurite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Azurite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Bloodstone").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/bloodstone"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Bloodstone</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Bloodstone"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Calcite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/calcite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Calcite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Calcite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Orange Calcite").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/calcite/orange-calcite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Orange Calcite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Orange Calcite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Carnelian").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/carnelian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Carnelian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Carnelian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Citrine").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/citrine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Citrine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Citrine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Emerald").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/emerald"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Emerald</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Emerald"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Fluorite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/fluorite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Fluorite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Fluorite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Garnet").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/garnet"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Garnet</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Garnet"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Granite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/granite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Granite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Granite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Hematite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/hematite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Hematite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Hematite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Jade").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/jade" className="wicked-link">
                <h2 className="grimoire-card-title">Jade</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Jade"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Jasper").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/jasper"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Jasper</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Jasper"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Jet").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/jet" className="wicked-link">
                <h2 className="grimoire-card-title">Jet</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Jet"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Labradorite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/labradorite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Labradorite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Labradorite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lapis Lazuli").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/lapis-lazuli"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Lapis Lazuli</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lapis Lazuli"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lepidolite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/lepidolite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Lepidolite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lepidolite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Malachite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/malachite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Malachite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Malachite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Moonstone").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/moonstone"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Moonstone</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Moonstone"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Obsidian").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/obsidian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Obsidian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Obsidian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Black Obsidian").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/obsidian/black-obsidian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Black Obsidian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Black Obsidian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Fire Obsidian").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/obsidian/fire-obsidian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Fire Obsidian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Fire Obsidian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Rainbow Obsidian").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/obsidian/rainbow-obsidian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Rainbow Obsidian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rainbow Obsidian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Snowflake Obsidian").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/obsidian/snowflake-obsidian"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Snowflake Obsidian</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Snowflake Obsidian"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Onyx").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/onyx" className="wicked-link">
                <h2 className="grimoire-card-title">Onyx</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Onyx"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Pearl").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/pearl"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Pearl</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Pearl"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Peridot").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/peridot"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Peridot</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Peridot"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Pyrite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/pyrite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Pyrite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Pyrite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Quartz").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/quartz"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Quartz</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Quartz"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Clear Quartz").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/quartz/clear-quartz"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Clear Quartz</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Clear Quartz"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Rose Quartz").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/quartz/rose-quartz"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Rose Quartz</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rose Quartz"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Smoky Quartz").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/quartz/smoky-quartz"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Smoky Quartz</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Smoky Quartz"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Rhodonite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/rhodonite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Rhodonite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rhodonite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ruby").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/crystals-stones/ruby" className="wicked-link">
                <h2 className="grimoire-card-title">Ruby</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Ruby"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sapphire").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/sapphire"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Sapphire</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sapphire"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Blue Sapphire").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/sapphire/blue-sapphire"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Blue Sapphire</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Blue Sapphire"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {q && normalize("Yellow Sapphire").includes(q) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/sapphire/yellow-sapphire"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Yellow Sapphire</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Yellow Sapphire"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Selenite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/selenite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Selenite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Selenite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sodalite").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/sodalite"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Sodalite</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sodalite"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sunstone").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/sunstone"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Sunstone</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sunstone"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Tiger's Eye").includes(q) || normalize("Tigers Eye").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/tigers-eye"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Tiger&apos;s Eye</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Tiger&apos;s Eye"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Topaz").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/topaz"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Topaz</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Topaz"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Tourmaline").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/tourmaline"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Tourmaline</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Tourmaline"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Zircon").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/crystals-stones/zircon"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Zircon</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Zircon"
                  className="grimoire-card-img"
                />
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