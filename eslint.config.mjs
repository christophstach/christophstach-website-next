import { defineConfig, globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            eqeqeq: "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },

    },
    globalIgnores([
        "node_modules",
        ".pnp",
        "**/.pnp.js",
        "coverage",
        ".next/",
        ".next/*",
        "out/",
        "build",
        "**/.DS_Store",
        "**/*.pem",
        "**/npm-debug.log*",
        "**/yarn-debug.log*",
        "**/yarn-error.log*",
        "**/.env*.local",
        "**/.vercel",
        "**/*.tsbuildinfo",
        "**/next-env.d.ts",

    ])
]);