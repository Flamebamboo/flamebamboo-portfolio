import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500 py-8">
          Software Engineer
        </h1>
      </div>
    </div>
  );
}
