import { ThemeToggle } from "@/components/ThemeToggle";
import { FaLocationPin } from "react-icons/fa6";
import { GridBackgroundDemo } from "@/components/GridBackground";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GridBackgroundDemo />

      <div className="absolute inset-0 z-10">
        <nav className="p-8 max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="font-mono text-xl">flamebamboo.xyz</h1>
          <ThemeToggle />
        </nav>

        <div className="p-8 mt-24">
          <Card>
            <section className="space-y-6 mb-16">
              <h2 className="text-4xl font-bold">Hey, I&apos;m Flamebamboo</h2>

              <div className="flex items-center gap-4">
                <FaLocationPin className="text-xl" />
                <h3 className="text-2xl font-mono">Malaysia</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">full-stack developer, content creator & dream tech entrepenuer.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Pixfocus",
                    description: "A pixel art gamified focus timer app",
                    tags: ["React Native", "Expo", "Tailwind", "Appwrite"],
                    url: "https://pixfocus.me", // Add your actual URL
                  },
                  {
                    title: "Lost Howls",
                    description: "A 2D platformer featuring a lost dog as a protagonist",
                    tags: ["GdScript", "Godot"],
                    url: "https://flamebamboo.itch.io/losthowls", // Add your actual URL
                  },
                ].map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                             transition-colors duration-200 
                             hover:bg-gray-50 dark:hover:bg-gray-900 
                             cursor-pointer"
                  >
                    <h4 className="font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-gray-500 dark:text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </Card>
        </div>
      </div>
    </main>
  );
}
