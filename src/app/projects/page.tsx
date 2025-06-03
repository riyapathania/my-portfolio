export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Hi, I’m Riya Pathania 👋
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        I’m a passionate AI student at Purdue, building intuitive tech to solve real-world problems.
        Welcome to my portfolio site!
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-purple-700">
              Team 55: Java Marketplace App
            </h3>
            <p className="text-gray-700 mb-2">
              A multithreaded Java Swing marketplace app with user auth, messaging, listings, and
              thread-safe persistence.
            </p>
            <a
              href="https://github.com/kbansal18/TeamProject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
