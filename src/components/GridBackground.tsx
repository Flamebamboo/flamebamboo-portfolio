import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 dark:bg-black bg-[#819067] dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#819067] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 flex items-center justify-center"></div>
    </div>
  );
}
