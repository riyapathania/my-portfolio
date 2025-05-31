export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center text-center p-10">
      <div>
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          Hi, I’m Riya Pathania 👋
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          I’m a passionate undergraduate at Purdue University, majoring in Artificial Intelligence. 
          I love building intelligent systems, exploring quantum research, and applying my creativity 
          through full-stack development. ✨
        </p>
        <div className="mt-6">
          <a
            href="/projects"
            className="text-pink-600 underline hover:text-pink-800"
          >
            View My Projects →
          </a>
        </div>
      </div>
    </main>
  );
}


