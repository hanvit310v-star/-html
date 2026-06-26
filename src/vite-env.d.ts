/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare const __APP_VERSION__: string;
