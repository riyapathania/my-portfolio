export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Hi, I’m Riya Pathania 👋
        </h1>
        <p className="text-lg mb-6">
          I’m an AI & Computer Engineering student at Purdue building elegant, thoughtful solutions at the intersection of software and research. This is my digital portfolio.
        </p>
        <img
          src="https://via.placeholder.com/400x200.png?text=Welcome+to+my+Portfolio"
          alt="Portfolio Banner"
          className="mx-auto rounded-xl shadow-md mb-8"
        />
        <a
          href="/projects"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-xl text-lg transition"
        >
          See My Projects →
        </a>
      </section>
    </main>
  );
}

