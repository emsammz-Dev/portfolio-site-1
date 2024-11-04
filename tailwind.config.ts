import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "bg-about": "url('/backgroundProfile/image.webp')",
        "bg-about3": "url('/backgroundProfile/image3.webp')",
        "bg-about4": "url('/backgroundProfile/image4.webp')",
        "bg-about5": "url('/backgroundProfile/image5.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
