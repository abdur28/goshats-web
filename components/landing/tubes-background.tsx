"use client";

import { useEffect, useRef } from "react";

export function TubesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !canvasRef.current) return;
    initialized.current = true;

    let app: { dispose?: () => void } | undefined;

    (async () => {
      try {
        // @ts-expect-error CDN module loaded at runtime
        const { default: TubesCursor } = await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js");

        if (!canvasRef.current) return;

        app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#006B3F", "#DAA520", "#254834"],
            lights: {
              intensity: 200,
              colors: ["#10B981", "#DAA520", "#006B3F", "#F5E6B8"],
            },
          },
        });
      } catch {
        // Fallback: gradient background already set via parent CSS
      }
    })();

    return () => app?.dispose?.();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="tubes-canvas"
      className="absolute inset-0 z-0 w-full h-full"
    />
  );
}
