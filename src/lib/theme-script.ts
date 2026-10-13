// Kept free of "use client" so the server layout can inline the script string.

export const STORAGE_KEY = "theme";

/** Runs inline in <head> before first paint: a saved choice wins, otherwise the OS preference. */
export const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}})()`;
