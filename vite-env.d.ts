interface ImportMetaEnv {
  readonly VITE_EMAIL: string;
  readonly VITE_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
