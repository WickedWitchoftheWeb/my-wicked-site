// app/grimoire/herbs/page.tsx
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

export default function HerbsLandingPage() {
  const [query, setQuery] = useState("");
  const q = normalize(query);

  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Herb Grimoire"
        coverImage="PASTE-HERB-COVER-IMAGE-URL"
        subtitle="Click an Herb to Explore Its Magickal Profile"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Herbs are living correspondences: plant spirits that carry
            intelligence, memory, and medicine through the natural world. In
            witchcraft, they are used to cleanse, protect, bless, open roads,
            soothe grief, sharpen intuition, strengthen love, and anchor
            intention into matter.
          </p>
          <p>
            Each herb in this grimoire is treated as a complete node in the web:
            its energetic behavior, its magickal correspondences, practical ways
            to work with it, and the traditions that shaped its reputation.
          </p>
          <p>
            As this section grows, these pages will link outward into the rest
            of the Wicked Grimoire: chakras, planets, deities, tarot, crystals,
            and the magickal body. The goal is not just to list uses: it is to
            build a living reference system you can return to again and again.
          </p>
        </section>

          <div className="grimoire-divider" />

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              This Herb Grimoire is written for spiritual and magickal practice.
              It is not medical advice.
            </p>
            <p>
              Every herb page includes a Safety section near the end. If you are
              pregnant, nursing, managing a condition, or taking medication,
              double check safety details with a trusted professional source
              before consuming any plant.
            </p>
          </div>

          <h2 className="grimoire-note-heading">Wicked Note</h2>

          <div className="grimoire-text">
            <p>
              If you are new to working with herbs, start with one plant you
              already know and build a relationship slowly. Touch it, smell it,
              sit with it, and notice what it shifts in you.
            </p>
            <p>
              The fastest way to learn is to keep your practice consistent: one
              small ritual repeated with intention teaches you more than a dozen
              ingredients used once.
            </p>
            <p>
              These pages are designed to connect. When you find a correspondence
              that calls to you, follow it. That is how the grimoire reveals
              patterns.
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
              placeholder="Search Herb Grimoire"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

        </section>

        {/* Herb entries */}
        <section className="grimoire-grid">
          {(!q || normalize("Allspice").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/allspice" className="wicked-link">
                <h2 className="grimoire-card-title">Allspice</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Allspice"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Aloe").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/aloe" className="wicked-link">
                <h2 className="grimoire-card-title">Aloe</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Aloe"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Angelica").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/angelica" className="wicked-link">
                <h2 className="grimoire-card-title">Angelica</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Angelica"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Anise").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/anise" className="wicked-link">
                <h2 className="grimoire-card-title">Anise</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Anise"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ashwagandha").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/ashwagandha" className="wicked-link">
                <h2 className="grimoire-card-title">Ashwagandha</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Ashwagandha"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Basil").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/basil" className="wicked-link">
                <h2 className="grimoire-card-title">Basil</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Basil"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Bay Leaves").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/bay-leaves" className="wicked-link">
                <h2 className="grimoire-card-title">Bay Leaves</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Bay Leaves"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Beech").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/beech" className="wicked-link">
                <h2 className="grimoire-card-title">Beech</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Beech"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Belladonna").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/belladonna" className="wicked-link">
                <h2 className="grimoire-card-title">Belladonna</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Belladonna"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Bergamot").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/bergamot" className="wicked-link">
                <h2 className="grimoire-card-title">Bergamot</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Bergamot"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Blue Lotus").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/blue-lotus" className="wicked-link">
                <h2 className="grimoire-card-title">Blue Lotus</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Blue Lotus"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Borage").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/borage" className="wicked-link">
                <h2 className="grimoire-card-title">Borage</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Borage"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Caldendula").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/caldendula" className="wicked-link">
                <h2 className="grimoire-card-title">Caldendula</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Caldendula"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Caraway").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/caraway" className="wicked-link">
                <h2 className="grimoire-card-title">Caraway</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Caraway"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cardamom").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cardamom" className="wicked-link">
                <h2 className="grimoire-card-title">Cardamom</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cardamom"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Catnip").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/catnip" className="wicked-link">
                <h2 className="grimoire-card-title">Catnip</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Catnip"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cat's Claw").includes(q) || normalize("Cats Claw").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cats-claw" className="wicked-link">
                <h2 className="grimoire-card-title">Cat&apos;s Claw</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cat&apos;s Claw"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cayenne Pepper").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cayenne-pepper" className="wicked-link">
                <h2 className="grimoire-card-title">Cayenne Pepper</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cayenne Pepper"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Celery Seed").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/celery-seed" className="wicked-link">
                <h2 className="grimoire-card-title">Celery Seed</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Celery Seed"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Chamomile").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/chamomile" className="wicked-link">
                <h2 className="grimoire-card-title">Chamomile</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Chamomile"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Chervil").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/chervil" className="wicked-link">
                <h2 className="grimoire-card-title">Chervil</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Chervil"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Chicory").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/chicory" className="wicked-link">
                <h2 className="grimoire-card-title">Chicory</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Chicory"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Chives").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/chives" className="wicked-link">
                <h2 className="grimoire-card-title">Chives</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Chives"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cilantro").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cilantro" className="wicked-link">
                <h2 className="grimoire-card-title">Cilantro</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cilantro"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cinnamon").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cinnamon" className="wicked-link">
                <h2 className="grimoire-card-title">Cinnamon</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cinnamon"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cloves").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cloves" className="wicked-link">
                <h2 className="grimoire-card-title">Cloves</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cloves"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Comfrey").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/comfrey" className="wicked-link">
                <h2 className="grimoire-card-title">Comfrey</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Comfrey"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Coriander").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/coriander" className="wicked-link">
                <h2 className="grimoire-card-title">Coriander</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Coriander"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Cumin").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/cumin" className="wicked-link">
                <h2 className="grimoire-card-title">Cumin</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Cumin"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Damiana").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/damiana" className="wicked-link">
                <h2 className="grimoire-card-title">Damiana</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Damiana"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Dandelion").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/dandelion" className="wicked-link">
                <h2 className="grimoire-card-title">Dandelion</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Dandelion"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Devil's Claw").includes(q) || normalize("Devils Claw").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/devils-claw" className="wicked-link">
                <h2 className="grimoire-card-title">Devil&apos;s Claw</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Devil&apos;s Claw"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Dill").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/dill" className="wicked-link">
                <h2 className="grimoire-card-title">Dill</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Dill"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Fennel").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/fennel" className="wicked-link">
                <h2 className="grimoire-card-title">Fennel</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Fennel"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Fenugreek").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/fenugreek" className="wicked-link">
                <h2 className="grimoire-card-title">Fenugreek</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Fenugreek"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Feverfew").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/feverfew" className="wicked-link">
                <h2 className="grimoire-card-title">Feverfew</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Feverfew"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Garlic").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/garlic" className="wicked-link">
                <h2 className="grimoire-card-title">Garlic</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Garlic"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ginger").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/ginger" className="wicked-link">
                <h2 className="grimoire-card-title">Ginger</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Ginger"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Ginkgo").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/ginkgo" className="wicked-link">
                <h2 className="grimoire-card-title">Ginkgo</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Ginkgo"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Hawthorn").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/hawthorn" className="wicked-link">
                <h2 className="grimoire-card-title">Hawthorn</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Hawthorn"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Hibiscus").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/hibiscus" className="wicked-link">
                <h2 className="grimoire-card-title">Hibiscus</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Hibiscus"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Horehound").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/horehound" className="wicked-link">
                <h2 className="grimoire-card-title">Horehound</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Horehound"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Horseradish").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/horseradish" className="wicked-link">
                <h2 className="grimoire-card-title">Horseradish</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Horseradish"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Hyssop").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/hyssop" className="wicked-link">
                <h2 className="grimoire-card-title">Hyssop</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Hyssop"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Jasmine").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/jasmine" className="wicked-link">
                <h2 className="grimoire-card-title">Jasmine</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Jasmine"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lavender").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/lavender" className="wicked-link">
                <h2 className="grimoire-card-title">Lavender</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lavender"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lemon").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/lemon" className="wicked-link">
                <h2 className="grimoire-card-title">Lemon</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lemon"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

       {(!q || normalize("Lemon Balm").includes(q)) && (
  <div className="grimoire-card">
    <Link href="/grimoire/herbs/lemon-balm" className="wicked-link">
      <h2 className="grimoire-card-title">Lemon Balm</h2>
      <img
        src="PASTE-IMAGE-URL"
        alt="Lemon Balm"
        className="grimoire-card-img"
      />
    </Link>
    <div className="grimoire-divider" />
  </div>
)}

          {(!q || normalize("Lemongrass").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/lemongrass" className="wicked-link">
                <h2 className="grimoire-card-title">Lemongrass</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lemongrass"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Licorice").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/licorice" className="wicked-link">
                <h2 className="grimoire-card-title">Licorice</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Licorice"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lotus").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/lotus" className="wicked-link">
                <h2 className="grimoire-card-title">Lotus</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lotus"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Lovage").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/lovage" className="wicked-link">
                <h2 className="grimoire-card-title">Lovage</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Lovage"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Marjoram").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/marjoram" className="wicked-link">
                <h2 className="grimoire-card-title">Marjoram</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Marjoram"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Milk Thistle").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/milk-thistle" className="wicked-link">
                <h2 className="grimoire-card-title">Milk Thistle</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Milk Thistle"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Mint").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/mint" className="wicked-link">
                <h2 className="grimoire-card-title">Mint</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Mint"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Motherwort").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/motherwort" className="wicked-link">
                <h2 className="grimoire-card-title">Motherwort</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Motherwort"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Mugwort").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/mugwort" className="wicked-link">
                <h2 className="grimoire-card-title">Mugwort</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Mugwort"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Mustard").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/mustard" className="wicked-link">
                <h2 className="grimoire-card-title">Mustard</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Mustard"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Myrrh").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/myrrh" className="wicked-link">
                <h2 className="grimoire-card-title">Myrrh</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Myrrh"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nettle").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/nettle" className="wicked-link">
                <h2 className="grimoire-card-title">Nettle</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Nettle"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Nutmeg").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/nutmeg" className="wicked-link">
                <h2 className="grimoire-card-title">Nutmeg</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Nutmeg"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Oat Straw").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/oat-straw" className="wicked-link">
                <h2 className="grimoire-card-title">Oat Straw</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Oat Straw"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Olive").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/olive" className="wicked-link">
                <h2 className="grimoire-card-title">Olive</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Olive"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Orange").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/orange" className="wicked-link">
                <h2 className="grimoire-card-title">Orange</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Orange"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Paprika").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/paprika" className="wicked-link">
                <h2 className="grimoire-card-title">Paprika</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Paprika"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Papyrus").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/papyrus" className="wicked-link">
                <h2 className="grimoire-card-title">Papyrus</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Papyrus"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Parsley").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/parsley" className="wicked-link">
                <h2 className="grimoire-card-title">Parsley</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Parsley"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Passion Flower").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/passion-flower" className="wicked-link">
                <h2 className="grimoire-card-title">Passion Flower</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Passion Flower"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Pepper").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/pepper" className="wicked-link">
                <h2 className="grimoire-card-title">Pepper</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Pepper"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Peppermint").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/peppermint" className="wicked-link">
                <h2 className="grimoire-card-title">Peppermint</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Peppermint"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Plantain").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/plantain" className="wicked-link">
                <h2 className="grimoire-card-title">Plantain</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Plantain"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Pomegranate").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/pomegranate" className="wicked-link">
                <h2 className="grimoire-card-title">Pomegranate</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Pomegranate"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Poppy Seed").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/poppy-seed" className="wicked-link">
                <h2 className="grimoire-card-title">Poppy Seed</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Poppy Seed"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Rooibos").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/rooibos" className="wicked-link">
                <h2 className="grimoire-card-title">Rooibos</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rooibos"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Rose").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/rose" className="wicked-link">
                <h2 className="grimoire-card-title">Rose</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rose"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Rosemary").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/rosemary" className="wicked-link">
                <h2 className="grimoire-card-title">Rosemary</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Rosemary"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Saffron").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/saffron" className="wicked-link">
                <h2 className="grimoire-card-title">Saffron</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Saffron"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sage").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/sage" className="wicked-link">
                <h2 className="grimoire-card-title">Sage</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sage"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Salt").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/salt" className="wicked-link">
                <h2 className="grimoire-card-title">Salt</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Salt"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Skullcap").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/skullcap" className="wicked-link">
                <h2 className="grimoire-card-title">Skullcap</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Skullcap"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Solomon's Seal Root").includes(q) || normalize("Solomons Seal Root").includes(q)) && (
            <div className="grimoire-card">
              <Link
                href="/grimoire/herbs/solomons-seal-root"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Solomon&apos;s Seal Root</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Solomon&apos;s Seal Root"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sorrel").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/sorrel" className="wicked-link">
                <h2 className="grimoire-card-title">Sorrel</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sorrel"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Spearmint").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/spearmint" className="wicked-link">
                <h2 className="grimoire-card-title">Spearmint</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Spearmint"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Sunflower").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/sunflower" className="wicked-link">
                <h2 className="grimoire-card-title">Sunflower</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Sunflower"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Thistle").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/thistle" className="wicked-link">
                <h2 className="grimoire-card-title">Thistle</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Thistle"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Thyme").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/thyme" className="wicked-link">
                <h2 className="grimoire-card-title">Thyme</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Thyme"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Vanilla").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/vanilla" className="wicked-link">
                <h2 className="grimoire-card-title">Vanilla</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Vanilla"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Vervain").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/vervain" className="wicked-link">
                <h2 className="grimoire-card-title">Vervain</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Vervain"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Violet").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/violet" className="wicked-link">
                <h2 className="grimoire-card-title">Violet</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Violet"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Wasabi").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/wasabi" className="wicked-link">
                <h2 className="grimoire-card-title">Wasabi</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Wasabi"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Willow").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/willow" className="wicked-link">
                <h2 className="grimoire-card-title">Willow</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Willow"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Willow Bark").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/willow-bark" className="wicked-link">
                <h2 className="grimoire-card-title">Willow Bark</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Willow Bark"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Willow Leaves").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/willow-leaves" className="wicked-link">
                <h2 className="grimoire-card-title">Willow Leaves</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Willow Leaves"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Witch Hazel").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/witch-hazel" className="wicked-link">
                <h2 className="grimoire-card-title">Witch Hazel</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Witch Hazel"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Wormwood").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/wormwood" className="wicked-link">
                <h2 className="grimoire-card-title">Wormwood</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Wormwood"
                  className="grimoire-card-img"
                />
              </Link>
              <div className="grimoire-divider" />
            </div>
          )}

          {(!q || normalize("Yarrow").includes(q)) && (
            <div className="grimoire-card">
              <Link href="/grimoire/herbs/yarrow" className="wicked-link">
                <h2 className="grimoire-card-title">Yarrow</h2>
                <img
                  src="PASTE-IMAGE-URL"
                  alt="Yarrow"
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