"use client";

import { useCallback, useRef } from "react";

export function ShareButton() {
  const sharing = useRef(false);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: "flamebamboo.xyz",
      text: "Check out Flamebamboo's portfolio!",
      url: window.location.href,
    };
    if (navigator.share) {
      if (sharing.current) return;
      sharing.current = true;
      try {
        await navigator.share(shareData);
      } catch {
        // ignore user cancel or error
      } finally {
        sharing.current = false;
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  }, []);

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center px-3 py-2 rounded-lg border-t-2 border-l-2 border-r-4 border-b-4 border-black bg-yellow-400 hover:bg-yellow-500 text-black transition-colors shadow"
      aria-label="Share"
      type="button"
    >
      {/* Outline share icon, similar style to GitHub SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 mr-2">
        <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8.5 13.5l6.5 4M15 6.5l-6.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Share
    </button>
  );
}
