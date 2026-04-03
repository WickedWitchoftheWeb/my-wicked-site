// app/grimoire/herbs/papyrus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PapyrusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Papyrus" subtitle="Cyperus papyrus">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PAPYRUS-HERO-IMAGE-URL"
              alt="Papyrus"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Papyrus holds what must be remembered: write the spell, bind the
              intent, and let the word become law.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Papyrus is a tall wetland plant native to parts of Africa and the
            Mediterranean, most famously associated with ancient Egypt. It is
            known for its strong stalks and umbrella-like crown.
          </p>

          <p>
            In traditional culture, Papyrus became one of the most important
            plant materials in human history: it was used to create a writing
            surface for records, sacred texts, contracts, and spells. That
            legacy makes Papyrus a symbol of memory, structure, and encoded
            intention.
          </p>

          <p>
            In witchcraft, Papyrus is used for written magic, sigils,
            manifestation scripting, ancestor work, sacred study, and ritual
            documentation. It is chosen when the goal is to formalize intent
            and make a working durable.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/water">Water</Link>,{" "}
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-SESHA(T)-ROUTE">Seshat</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>,{" "}
                <Link href="PASTE-PTAH-ROUTE">Ptah</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/neutral-balance">
                  Neutral / Balanced
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sodalite">
                  Sodalite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Papyrus in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PAPYRUS-WITCHCRAFT-IMAGE-URL"
              alt="Papyrus in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Scripting, sigils, written spells, contracts and boundaries,
                study magic, record keeping, ancestor work
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Confusion, forgotten intentions, scattered focus, weak
                follow-through, lost knowledge
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional reed and fiber use, historical practical material
                use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Papyrus is a vessel for intent.
                <br />
                <br />
                Write your spell clearly and keep the paper protected until the
                working is complete.
                <br />
                <br />
                Use in binding work when you need structure: rules, agreements,
                and energetic boundaries that hold.
                <br />
                <br />
                Pair with Throat Chakra focus when your voice must become
                written truth.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Papyrus</h2>

          <p>
            Use Papyrus as a surface for writing petitions, prayers, sigils,
            and spell scripts. It supports workings that require precision,
            permanence, and record.
          </p>

          <p>
            Create a small scroll for a charm bag: write the intent, roll it
            tightly, and bind it with thread to seal the working.
          </p>

          <p>
            Place written work under a candle, a crystal, or a deity image when
            consecrating the spell through focused devotion.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Papyrus is a practical ally when you need to stop improvising and
            start declaring. It helps turn vague desire into structured
            intention.
          </p>

          <p>
            Work with it when building consistent ritual systems, keeping a
            grimoire, or creating written boundaries that must be respected.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PAPYRUS-FOLKLORE-IMAGE-URL"
              alt="Papyrus Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In ancient Egypt, Papyrus was used to create scrolls for sacred
            texts, administrative records, and funerary writings. It became a
            foundation of knowledge preservation, making it inseparable from
            learning, law, and ritual language.
          </p>

          <p>
            In modern witchcraft, Papyrus carries that same current: what is
            written is held. The spell becomes a record, and the record becomes
            power.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Papyrus is primarily valued for its fibrous stalk, historically
            processed into sheets and cords. This section is used to list
            notable plant components when applicable.
          </p>

          <p>Common Constituents: Cellulose, Plant Fibers</p>
        </section>

        <div className="grimoire-divider" />

        {/* WARNING */}
        <section className="grimoire-section grimoire-text">
          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/website-general-assets/safe-for-humans.png"
              alt="Safe for humans"
              className="grimoire-img"
            />
          </div>

          <p className="grimoire-subheading">Warning</p>

          <p>
            Papyrus is primarily used as a historical material and ritual plant
            ally rather than a common ingestible herb. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting herbal preparations. This grimoire is
            written for spiritual and educational purposes and is not medical
            advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/herbs" className="grimoire-footer-link">
              ← Back to Herbs
            </Link>
          </p>

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