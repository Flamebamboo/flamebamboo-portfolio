import React, { useEffect, useRef, useState } from "react";

type Pos = { top: number; left: number };

export const Pet = () => {
  const [pos, setPos] = useState<Pos>({ top: 100, left: 100 });
  const [facingLeft, setFacingLeft] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const prevPos = useRef<Pos>(pos);

  const idleSrc = "/pet_idle.gif";
  const walkSrc = "/pet.gif";

  const moveTimeout = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const move = () => {
      const vw = window.innerWidth - 128;
      const vh = window.innerHeight - 128;
      const next = {
        top: Math.random() * vh,
        left: Math.random() * vw,
      };
      setFacingLeft(next.left < pos.left);
      setIsMoving(true);
      setPos(next);

      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 2000);
    };

    intervalRef.current = setInterval(move, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, [pos.left]);

  useEffect(() => {
    if (prevPos.current.top !== pos.top || prevPos.current.left !== pos.left) {
      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 2000);
      prevPos.current = pos;
    }
  }, [pos.top, pos.left]);

  return (
    <img
      src={isMoving ? walkSrc : idleSrc}
      alt="pet"
      style={{
        position: "fixed",
        top: pos.top,
        left: pos.left,
        width: 128,
        height: 128,
        zIndex: 100,
        pointerEvents: "none",
        transition: "top 2s linear, left 2s linear",
        transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
        imageRendering: "pixelated",
      }}
    />
  );
};
