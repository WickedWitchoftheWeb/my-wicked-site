// app/grimoire/metals/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
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

export default function MetalsLandingPage() {
  const [query, setQuery] = useState("");
  const q = normalize(query);

  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Metals Grimoire"
        subtitle="Click a Metal to Explore Its Magickal Profile"
      >
      

        <div className="grimoire-intro">
  <p>
    Metals are the bones of civilization. Before language was written in
    ink, it was carved into bronze. Before kingdoms rose, tools were
    forged. Metals carry memory in their weight. They are not just
    materials; they are milestones in human becoming.
  </p>

  <p>
    Each metal holds a distinct energetic signature shaped by its
    properties: conductivity, density, color, resistance, transformation.
    Some belong to ancient alchemy. Others are born of industry and
    innovation. Together, they form a spectrum of strength, adaptation,
    refinement, and power.
  </p>

  <p>
    In this section, you&apos;ll explore the symbolic and magickal
    correspondences of each metal: their planetary ties, elemental
    associations, zodiac alignments, colors, and mythic echoes. You&apos;ll
    also find how each metal behaves energetically and how it can be
    worked with in contemporary craft.
  </p>

  <section className="grimoire-quote">
    <p className="grimoire-quote-text">
      Metal remembers what hands have shaped it. What you forge shapes you
      in return.
    </p>
    <span className="wicked-signature">-Wicked</span>
  </section>
</div>

        {/* Search (matches Herbs style + function) */}
        <section className="grimoire-section">
          <div className="grimoire-index-search">
            <input
              className="grimoire-index-input"
              type="text"
              placeholder="Search Metals Grimoire"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Metal entries */}
        <section className="grimoire-grid">
          {(!q || normalize("Aluminum").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/aluminum" className="wicked-link">
                <h2 className="grimoire-card-title">Aluminum</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/aluminum-hero.png?updatedAt=1772238319049"
                  alt="Aluminum"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Brass").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/brass" className="wicked-link">
                <h2 className="grimoire-card-title">Brass</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/brass-hero.png"
                  alt="Brass"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Bronze").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/bronze" className="wicked-link">
                <h2 className="grimoire-card-title">Bronze</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/bronze-hero.png"
                  alt="Bronze"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cobalt").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/cobalt" className="wicked-link">
                <h2 className="grimoire-card-title">Cobalt</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/colbalt-hero.png"
                  alt="Cobalt"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Copper").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/copper" className="wicked-link">
                <h2 className="grimoire-card-title">Copper</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/copper-hero.png"
                  alt="Copper"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Electrum").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/electrum" className="wicked-link">
                <h2 className="grimoire-card-title">Electrum</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/electrum-hero.png"
                  alt="Electrum"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Gold").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/gold" className="wicked-link">
                <h2 className="grimoire-card-title">Gold</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/gold-hero.png"
                  alt="Gold"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Iron").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/iron" className="wicked-link">
                <h2 className="grimoire-card-title">Iron</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/iron-hero.png"
                  alt="Iron"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lead").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/lead" className="wicked-link">
                <h2 className="grimoire-card-title">Lead</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/lead-hero.png"
                  alt="Lead"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Mercury").includes(q) || normalize("Quicksilver").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/mercury" className="wicked-link">
                <h2 className="grimoire-card-title">Mercury</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/mercury-hero.png"
                  alt="Mercury"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nickel").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/nickel" className="wicked-link">
                <h2 className="grimoire-card-title">Nickel</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/nickel-hero.png"
                  alt="Nickel"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Pewter").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/pewter" className="wicked-link">
                <h2 className="grimoire-card-title">Pewter</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/pewter-hero.png"
                  alt="Pewter"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Platinum").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/platinum" className="wicked-link">
                <h2 className="grimoire-card-title">Platinum</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/platinum-hero.png"
                  alt="Platinum"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Silver").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/silver" className="wicked-link">
                <h2 className="grimoire-card-title">Silver</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/silver-hero.png"
                  alt="Silver"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Steel").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/steel" className="wicked-link">
                <h2 className="grimoire-card-title">Steel</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/steel-hero.png"
                  alt="Steel"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Tin").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/tin" className="wicked-link">
                <h2 className="grimoire-card-title">Tin</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/tin-hero.png"
                  alt="Tin"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Titanium").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/titanium" className="wicked-link">
                <h2 className="grimoire-card-title">Titanium</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/titanium-hero.png"
                  alt="Titanium"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Tungsten").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/tungsten" className="wicked-link">
                <h2 className="grimoire-card-title">Tungsten</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/tungsten-hero.png"
                  alt="Tungsten"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Uranium").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/uranium" className="wicked-link">
                <h2 className="grimoire-card-title">Uranium</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/uranium-hero.png"
                  alt="Uranium"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Zinc").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/metals/zinc" className="wicked-link">
                <h2 className="grimoire-card-title">Zinc</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/metals/zinc-hero.png"
                  alt="Zinc"
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