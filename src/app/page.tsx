"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { FaLocationPin } from "react-icons/fa6";
import { GridBackgroundDemo } from "@/components/GridBackground";
import { Card } from "@/components/Card";
import { MusicPlayer } from "./component/MusicPlayer";
import { ShareButton } from "./component/ShareButton";
import { Pet } from "./component/Pet";
export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GridBackgroundDemo />

      <div className="absolute inset-0 z-10">
        <nav className="px-4 sm:px-6 md:px-8 py-4 md:py-8 w-full max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-mono text-lg sm:text-xl md:text-2xl">flamebamboo.xyz</h1>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ShareButton />
          </div>
        </nav>

        <div className="px-2 sm:px-4 md:px-8 py-4 md:py-8 mt-0 md:mt-12 w-full max-w-5xl mx-auto">
          <Card>
            <section className="space-y-6 mb-10 md:mb-16">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10">
                <div className="flex flex-col justify-center items-start gap-3 w-full md:w-auto">
                  <div className="flex items-center gap-3 bg-[#B1AB86] dark:bg-gray-800 w-max p-2 md:p-3 rounded-2xl shadow-md">
                    <FaLocationPin className="text-lg sm:text-xl text-[#FEFAE0] dark:text-white" />
                    <h3 className="text-lg sm:text-xl text-[#FEFAE0] dark:text-white font-light">Malaysia</h3>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-Collager leading-tight">Hey, I&apos;m Flamebamboo</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl">
                    16y/o dropout, unemployed full-stack developer, content creator & dream tech entrepreneur.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl">
                    I post every single day on social media documenting my growth of becoming a tech entrepreneur, sharing my projects, and learning experiences. Just reach out
                    anytime!
                  </p>
                </div>
                <img src="/profilepicture.jpg" alt="Profile" className="w-32 sm:w-40 md:w-48 lg:w-56 aspect-square rounded-full border-2 border-white shadow object-cover" />
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Github button */}
                <a
                  href="https://github.com/flamebamboo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg border-t-2 border-l-2 border-r-4 border-b-4 border-black bg-purple-600 hover:bg-purple-700 text-white transition-colors shadow"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 mr-2">
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  GitHub
                </a>
                {/* Instagram button */}
                <a
                  href="https://www.instagram.com/flamebamboo.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg border-t-2 border-l-2 border-r-4 border-b-4 border-black bg-pink-500 hover:bg-pink-700 text-white transition-colors shadow"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2476 2476" id="instagram" className="mr-2 w-6 h-6 fill-white">
                    <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                  </svg>
                  Instagram
                </a>
                {/* Youtube button */}
                <a
                  href="https://www.youtube.com/@flamebamboo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg border-t-2 border-l-2 border-r-4 border-b-4 border-black bg-red-500 hover:bg-red-700 text-white transition-colors shadow"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 mr-2">
                    <rect x="2" y="3" width="20" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <polygon points="10,9 16,12 10,15 10,9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  </svg>
                  Youtube
                </a>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Featured Public Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
            {/* Featured Content Section */}
            <section className="mt-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Featured Content</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* My Story (Shorts) */}
                <a
                  href="https://youtube.com/shorts/vxBS8Ilqdhg?si=vxz-Vtm23fHoHgft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <img src="https://img.youtube.com/vi/vxBS8Ilqdhg/hqdefault.jpg" alt="Featured Video" className="w-full aspect-video object-cover rounded-lg shadow mb-3" />
                  <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">I never fitted in school.</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">My Story (Shorts)</p>
                </a>
                {/* Macropad Series */}
                <a
                  href="https://youtube.com/shorts/7tvncrJ1KWo?si=zmJieDxIqnWJPGlq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <img src="https://img.youtube.com/vi/7tvncrJ1KWo/hqdefault.jpg" alt="Featured Video" className="w-full aspect-video object-cover rounded-lg shadow mb-3" />
                  <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">Building Custom Macropads</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Macropad Series</p>
                </a>
                {/* PixFocus */}
                <a
                  href="https://youtube.com/shorts/2icRAhrTaVw?si=IX6SAglDwpvMEsjM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <img src="https://img.youtube.com/vi/2icRAhrTaVw/hqdefault.jpg" alt="Featured Video" className="w-full aspect-video object-cover rounded-lg shadow mb-3" />
                  <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">Pixfocus</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Lessons I learnt from building a gamified app</p>
                </a>
                {/* Islamic*/}
                <a
                  href=" https://youtube.com/shorts/wImAVUD6nEg?si=BEzK6EGGac2QfCGt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <img src="https://img.youtube.com/vi/wImAVUD6nEg/hqdefault.jpg" alt="Featured Video" className="w-full aspect-video object-cover rounded-lg shadow mb-3" />
                  <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">Islamic</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">These are the Quran verses that motivates me</p>
                </a>
              </div>
            </section>
          </Card>
          <Pet />
        </div>
      </div>
      <MusicPlayer />
    </main>
  );
}

{
  /* things to add
    - make the site more responsive done
   - cursor icon done
   
   - background music and mute icons bottom right corner that is fixed done


  
  
*/
}
{
  /* things to add
    - make the site more responsive done
   - cursor icon done
   
   - background music and mute icons bottom right corner that is fixed done


  
  
*/
}
