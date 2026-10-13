"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Live `matchMedia` result; always false during SSR. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

let webgl: boolean | undefined;
function hasWebGL() {
  if (webgl === undefined) {
    try {
      const canvas = document.createElement("canvas");
      webgl = Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
    } catch {
      webgl = false;
    }
  }
  return webgl;
}

/**
 * True when the browser supports WebGL and the user hasn't asked for reduced motion.
 * Always false during SSR, so 3D scenes are client-only progressive enhancement.
 */
export function useCanRender3D(): boolean {
  const motionOK = useMediaQuery("(prefers-reduced-motion: no-preference)");
  return motionOK && hasWebGL();
}
