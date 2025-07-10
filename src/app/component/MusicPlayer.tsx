"use client";

import { useEffect, useRef, useState } from "react";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true); // default to muted

  // Load mute state from localStorage
  useEffect(() => {
    const savedMuted = localStorage.getItem("music-muted");
    if (savedMuted === "false") {
      setMuted(false);
    }
  }, []);

  // Save mute state to localStorage and update audio mute
  useEffect(() => {
    localStorage.setItem("music-muted", muted ? "true" : "false");
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  // Play audio when unmuted
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.9;
      if (!muted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} src="/chill.mp3" autoPlay={!muted} />
      <button
        onClick={() => setMuted((m) => !m)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#B1AB86] dark:bg-gray-800 flex items-center justify-center shadow-lg border-4 border-black dark:border-gray-700 transition-colors"
        aria-label={muted ? "Unmute music" : "Mute music"}
        type="button"
      >
        {muted ? <BsFillVolumeMuteFill className="text-2xl text-[#FEFAE0] dark:text-white" /> : <BsFillVolumeUpFill className="text-2xl text-[#FEFAE0] dark:text-white" />}
      </button>
    </>
  );
}
