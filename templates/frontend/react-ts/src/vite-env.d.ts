/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PRODUCTION: string;
    readonly VITE_BASEURL: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}