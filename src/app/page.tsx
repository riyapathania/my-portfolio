export default function Home() {
  return (
    <main className="p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        Hi, I’m Riya Pathania 👋
      </h1>
      <p className="text-lg mb-6">
        I’m a passionate AI student at Purdue, building intuitive tech to solve real-world problems.
        Welcome to my portfolio site!
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
        <div className="border p-4 rounded shadow-sm bg-white">
          <h3 className="text-xl font-bold text-purple-700 mb-1">Team 55: Java Marketplace App</h3>
          <p className="mb-2">A multithreaded Java Swing marketplace app with user auth, messaging, listings, and thread-safe persistence.</p>
          <a
            className="text-blue-600 underline"
            href="https://github.com/kbansal18/TeamProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
