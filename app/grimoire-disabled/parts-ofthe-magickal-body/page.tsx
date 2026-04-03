// app/grimoire/parts-of-the-magickal-body/page.tsx
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

export default function PartsOfTheMagickalBodyLandingPage() {
  const [query, setQuery] = useState("");
  const q = normalize(query);

  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Parts of the Magickal Body"
        coverImage="PASTE-COVER-IMAGE-URL"
        subtitle="Click a Body Part to Explore Its Correspondences"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            The magickal body is a map of correspondence: a living interface
            between spirit, mind, and matter. Each region of the body holds
            symbolic language, energetic behaviors, and repeating themes that
            show up across astrology, herbs, and ritual work.
          </p>
          <p>
            This section is built as a connection hub. Each body part becomes a
            node in the web: zodiac links, plant allies, energetic functions,
            and practical ways to work with what that area represents.
          </p>
          <p>
            Use these pages to track patterns over time. When a theme repeats
            across the body, the signs, and the herbs, it is usually pointing at
            the core.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              This section is written for spiritual and magickal practice. It is
              not medical advice.
            </p>
            <p>
              If you are experiencing symptoms, pain, or concern about your
              health, seek support from a qualified professional. Use these
              pages as symbolic and energetic guidance, not diagnosis.
            </p>
          </div>

          <h2 className="grimoire-note-heading">Wicked Note</h2>

          <div className="grimoire-text">
            <p>
              Pay attention to where your energy gathers and where it goes quiet.
              The body speaks in patterns long before the mind gives language.
            </p>
            <p>
              When you find a correspondence that calls to you, follow it. That
              is how the grimoire reveals connections.
            </p>
          </div>

          <span className="wicked-signature">-Wicked</span>
        </section>

        <div className="grimoire-divider" />

        {/* Search (styled like the Wicked Search page) */}
        <section className="grimoire-section">
          <div className="grimoire-index-search">
            <input
              className="grimoire-index-input"
              type="text"
              placeholder="Search Parts of the Magickal Body"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Entries */}
        <section className="grimoire-grid">
          {(!q || normalize("Head").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/01-head"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Head</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/head3.png"
                  alt="Head"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

                    {(!q || normalize("Teeth").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/21-teeth"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Teeth</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/teeth.png"
                  alt="Teeth"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Neck").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/02-neck"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Neck</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/neck2.png"
                  alt="Neck"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Throat").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/03-throat"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Throat</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/throat2.png"
                  alt="Throat"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Shoulders").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/04-shoulders"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Shoulders</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/shoulders.png"
                  alt="Shoulders"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Arms").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/05-arms"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Arms</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/arms.png"
                  alt="Arms"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Hands").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/06-hands"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Hands</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/hands.png"
                  alt="Hands"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

              {(!q || normalize("Breasts").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/14-breasts"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Breasts</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/breasts1.png"
                  alt="Breasts"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}


          {(!q || normalize("Heart").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/07-heart"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Heart</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/heart.png"
                  alt="Heart"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lungs").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/08-lungs"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Lungs</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/lungs.png"
                  alt="Lungs"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Spine").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/09-spine"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Spine</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/spine.png"
                  alt="Spine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Digestive System").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/10-digestive-system"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Digestive System</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/digestive-system.png"
                  alt="Digestive System"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nervous System").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/11-nervous-system"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Nervous System</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/nervous-system.png"
                  alt="Nervous System"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Stomach").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/12-stomach"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Stomach</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/stomach.png"
                  alt="Stomach"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Liver").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/15-liver"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Liver</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/liver.png"
                  alt="Liver"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

               {(!q || normalize("Kidneys").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/13-kidneys"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Kidneys</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/kidneys.png"
                  alt="Kidneys"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

               {(!q || normalize("Eliminatory System").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/19-eliminatory-system"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Eliminatory System</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/eliminatory-system.png"
                  alt="Eliminatory System"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Reproductive Organs").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/16-reproductive-organs"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Reproductive Organs</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/reproductive-organs.png"
                  alt="Reproductive Organs"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}


          {(!q || normalize("Hips").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/17-hips"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Hips</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/hips.png"
                  alt="Hips"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Thighs").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/18-thighs"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Thighs</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/thighs.png"
                  alt="Thighs"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Knees").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/20-knees"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Knees</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/knees.png"
                  alt="Knees"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}


          {(!q || normalize("Shins").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/23-shins"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Shins</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/shins.png"
                  alt="Shins"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ankles").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/24-ankles"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Ankles</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/ankles.png"
                  alt="Ankles"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Feet").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/25-feet"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Feet</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/feet.png"
                  alt="Feet"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Skin").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/26-skin"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Skin</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/skin1.png"
                  alt="Skin"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Bones").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/parts-ofthe-magickal-body/22-bones"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Bones</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/bones.png"
                  alt="Bones"
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