export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
          The Wicked Witch of the Web
        </p>

        <h1 className="text-5xl md:text-7xl font-light">
          Welcome to the Wicked Web
        </h1>

        <p className="max-w-xl mx-auto text-zinc-400 text-lg">
          A living digital grimoire, portal, and cosmic toolkit for spells,
          stars, sovereignty, and self-creation.
        </p>
      </div>
    </main>
  );
}