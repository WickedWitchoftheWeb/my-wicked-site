// app/grimoire/08-deities/gaia-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Gaia" subtitle="Goddess of the Earth">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/gaia/gaia.png"
              alt="Gaia"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              You are not separate from the Earth.
              <br />
              You are the Earth learning its own name.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO (INLINE, NO COMPONENT) */}
        <section className="zodiac-intro">
          <p>
            Across every culture and every age, humanity has given names and faces
            to the forces that shape existence. Goddesses and Gods are not distant
            myths locked in the past — they are living archetypes, expressions of
            power, consciousness, nature, and cosmic law.
          </p>

          <p>
            Within the Grimoire, deities are honored as embodiments of specific
            energies: creation and destruction, love and war, wisdom and chaos,
            death and rebirth. Each carries their own mythology, symbols,
            correspondences, and lessons, yet all emerge from the same universal
            source.
          </p>

          <p>
            Goddesses appear here first, not as lesser counterparts, but as primordial
            forces of creation, transformation, and sovereignty. Gods follow as agents
            of order, motion, and manifestation. Together, they form a divine balance —
            mirrors of the inner and outer worlds we navigate every day.
          </p>

          <p>
            This section is a living archive. As the Grimoire grows, so too will the
            pantheons represented here. Whether you approach these deities through
            devotion, study, magic, or symbolism, you are stepping into a lineage as
            old as humanity itself.
          </p>
        </section>

       {/* CORE ESSENCE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Core Essence</h2>
  <p>
    Gaia is the living foundation — the breath beneath roots, the intelligence
    inside soil, stone, seed, and bone. She is not a distant “nature goddess.”
    She is the primordial body of Earth itself: the force that holds you, feeds
    you, grows you, and receives you again.
  </p>
  <p>
    Her current is slow power. It restores stability, strengthens resilience,
    and returns you to what is real. Gaia teaches that healing is not a rush —
    it is a rhythm. And abundance is not a fantasy — it is the result of
    alignment, stewardship, and care.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/gaia-goddess/mythology"
      className="deity-link"
    >
      Explore Gaia’s Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES (RIGHT UNDER CORE ESSENCE) */}
<section className="zodiac-note">
  <section className="zodiac-attributes">
    <h2
      className="zodiac-note-subheading"
      style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}
    >
      Correspondences
    </h2>

    <div className="zodiac-attr">
      <h3 className="zodiac-attr-label">Element</h3>
      <p className="zodiac-attr-value">
        <Link href="/grimoire/11-elements/earth" className="deity-link">
          Earth
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/02-moon"
                  className="deity-link"
                >
                  Moon
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/01-sunday"
                  className="deity-link"
                >
                  Sunday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
               <Link
               href="/grimoire/03-chakras/01-root-chakra"
               className="deity-link"
               >
                Root, <span></span>
               </Link>
                <Link
                  href="/grimoire/03-chakras/04-heart-chakra"
                  className="deity-link"
                >
                  Heart
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/green" className="deity-link">
                  Green
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/brown" className="deity-link">
                  Brown
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/iron" className="deity-link">
                  Iron
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/moss-agate"
                  className="deity-link"
                >
                  Moss Agate
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/green-aventurine"
                  className="deity-link"
                >
                  Green Aventurine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/dandelion" className="deity-link">
                  Dandelion
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/comfrey" className="deity-link">
                  Comfrey
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/basil" className="deity-link">
                  Basil
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
              </p>
            </div>
          </section>
        </section>

        {/* MYTHOLOGICAL ORIGINS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Mythological{"\u00A0\u00A0"} Origins
          </h2>
          <p>
            In Greek cosmology, Gaia is the original Earth — the great mother of
            existence, the living ground from which gods, titans, mountains, seas,
            and all forms of life emerge. She is not “of” the world. She is the world:
            the embodiment of creation through substance, structure, and fertile law.
          </p>
          <p>
            Her mythology carries the ancient truth that life is built, not wished
            into being. Gaia represents the sacred reality of cycles: birth, growth,
            harvest, decay, and renewal — not as punishment, but as the way life stays
            alive.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Gaia governs grounding, stability, fertility, nourishment, protection, and
            the slow-building power of growth. She strengthens resilience, restores
            nervous-system steadiness, and supports any work rooted in sustainability:
            health, home, finances, long-term goals, and the courage to build a life
            that can hold you.
          </p>
          <p>
            Her power is especially present when you are reclaiming your body, repairing
            your relationship with rest, and returning to the kind of consistency that
            creates safety from the inside out.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Gaia’s symbols include soil, stone, caves, springs, trees, mountains, seeds,
            and the imagery of the living world as a sacred body. Her presence is often
            felt as quiet steadiness — a deep exhale in the chest, a return to the
            moment, and the sense of being held by something ancient and real.
          </p>
        </section>

       {/* GAIA IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Gaia in Practice</h2>
  <p>
    Work with Gaia when you need grounding, stability, and restoration. She is
    potent for home blessings, protection work rooted in boundaries, healing
    routines, financial steadiness, and rebuilding your foundation after chaos.
  </p>
  <p>
    Gaia teaches you to stop abandoning the basics. Drink water. Sleep. Eat real
    food. Move your body gently. Build the habit. Keep the promise. Her magic
    is not flashy — it is dependable.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/gaia-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF GAIA HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Gaia Has Chosen You
  </h2>
  <p>
    If Gaia has chosen you, your body becomes your compass. You may suddenly
    feel unable to ignore fatigue, hunger, stress, or environments that drain
    you. Survival stops being abstract — it becomes personal.
  </p>
  <p>
    Her presence often arrives through practical urges: cleaning, organizing,
    tending your space, cooking nourishing food, simplifying finances, or
    restoring daily rhythms that were neglected during chaos.
  </p>
  <p>
    Signs may appear through soil, plants, stones, repetitive grounding
    imagery, or a growing discomfort with anything unsustainable — physically,
    emotionally, or energetically.
  </p>
  <p>
    Most of all, if Gaia has chosen you, your life begins to reward consistency.
    When you tend the foundation, stability grows. When you ignore the basics,
    imbalance shows up quickly — not as punishment, but as feedback.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offer Gaia clean water, bread, fruit, grains, flowers, or a candle lit in
            gratitude. She is honored through stewardship: tending plants, cleaning your
            home with intention, composting what can be returned, and making choices that
            reduce harm.
          </p>
          <p>
            Devotion to Gaia is lived. It looks like consistency, care, and the decision
            to treat your life as something worth tending — not only in ritual, but in
            the mundane.
          </p>
        </section>

        {/* GAIA VS TERRA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gaia vs Terra</h2>
          <p>
            Gaia and Terra are related, but not interchangeable. Gaia carries a distinctly
            Greek cosmological current — primordial, vast, and foundational: the Earth as
            origin and organizing intelligence. Terra, in the Roman current, often emphasizes
            the cultivated Earth: the land as providence, agriculture, and the stability of
            society built upon soil.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Gaia as Earth-as-source and
            Terra as Earth-as-civilization — one is origin; the other is structure.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Gaia moves through the Great Mother, the Foundation, the Keeper of Cycles,
            and the Living Sanctuary — not as roles to perform, but as currents of power.
            The Great Mother nourishes. The Foundation stabilizes. The Keeper of Cycles
            teaches timing and renewal. The Living Sanctuary reminds you that safety is
            built through care.
          </p>
          <p>
            In her highest expression, Gaia is devotion that sustains — the power to build
            a life that can hold you.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as stagnation, fear of change, clinging to what is familiar,
            or confusing comfort with alignment. When grounding becomes avoidance and stability
            becomes rigidity, the current distorts.
          </p>
          <p>
            Gaia’s corrective wisdom is simple: stay rooted, but keep growing. Stability is
            meant to support life — not trap it.
          </p>
        </section>

        {/* GAIA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gaia in the Modern World</h2>
          <p>
            Today, Gaia appears wherever someone chooses sustainability over burnout. She
            lives in the person rebuilding their health, creating a calmer home, tending
            a garden, or learning to rest without guilt. Her energy is also present in
            Earth-honoring choices — the daily, practical devotion of stewardship.
          </p>
          <p>
            She reminds us that spirituality without embodiment is unfinished. The body
            is sacred. The home is sacred. The mundane is where the magic holds.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Gaia teaches that stability is not stagnation — it is nourishment that endures. Her
    power is patient, generative, and relentless in its ability to support life when it
    is honored correctly.
  </p>
  <p>
    She asks you to return to the fundamentals: your body, your breath, your routines,
    and the ground beneath your feet. What you neglect at the root will eventually
    collapse above it.
  </p>
  <p>
    Walk with Gaia when you are ready to rebuild from the foundation up — to care for
    what sustains you, to move in rhythm instead of urgency, and to treat consistency as
    a sacred act.
  </p>
  <p>
    Her blessing arrives as resilience: a nervous system that can rest, a life that can
    recover, and a sense of belonging that does not depend on external validation. Through
    her, you learn that growth is safest when it is grounded.
  </p>
  <p>
    Gaia reminds you that the earth does not rush — yet everything grows. Tend what
    sustains you. Honor the cycles. Let your life take root where you stand.
  </p>
</section>







        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/01-goddesses-landing"
              className="zodiac-footer-link"
            >
              ← Back to Goddesses
            </Link>
          </p>

          <p>
            <Link href="/grimoire/08-deities" className="zodiac-footer-link">
              ← Back to Deities
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}