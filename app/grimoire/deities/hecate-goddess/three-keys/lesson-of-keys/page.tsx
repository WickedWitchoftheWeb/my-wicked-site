// app/grimoire/08-deities/hecate-goddess/key-lesson/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Lesson of the Keys" subtitle="">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/key-lesson.png"
              alt="The Lesson of the Keys"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>
        </section>

        {/* THE LESSON OF THE KEYS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Lesson of the Keys</h2>
          <p>
            In the age of gods, the cycle spun,
            <br />
            Each father fell, each son begun.
            <br />
            Sky to Time, then Law took all,
            <br />
            Thrones would rise, and thrones would fall,
            <br />
            <br />
            Uranus sank when Cronus came,
            <br />
            Then Zeus rose up to stake his claim.
            <br />
            But even he, with lightning’s call,
            <br />
            Feared the shadow of his fall.
            <br />
            <br />
            Yet one stood free of Fate’s decrees,
            <br />
            Hecate, the Keeper of the Keys.
            <br />
            No throne could tame, no chain could bind,
            <br />
            Her Power burned, one of a kind.
            <br />
            <br />
            No father’s mouth could swallow whole,
            <br />
            No son could rise to take her role.
            <br />
            Not crown, but crossroads she did own,
            <br />
            A sovereign force, she stands alone.
            <br />
            <br />
            Zeus the victor, bowed his head,
            <br />
            He knew her power was not his to spread.
            <br />
            Honor he gave, yet not her might,
            <br />
            For her torch was in endless night.
            <br />
            <br />
            And so she whispers, “Power is mine.
            <br />
            Not seized by force, nor bound by time.
            <br />
            No blade, no thunder, no king decrees,
            <br />
            Can steal the truth of the Witch’s Keys”
            <br />
            <br />
            The witch who stands where crossroads twine,
            <br />
            Holds earth and sea and star as mine.
            <br />
            No throne can break, no fate can win,
            <br />
            For she holds the crossroads deep within.
          </p>
        </section>

        {/* FOOTER LINKS */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys"
              className="zodiac-footer-link"
            >
              ← Back to Keys
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess"
              className="zodiac-footer-link"
            >
              ← Back to Hecate
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





