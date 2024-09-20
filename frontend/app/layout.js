import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "../components/Navbar";
config.autoAddCss = false;
import "../configs/fonts.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiyash Auto",
  description: "Used Car Sales & Repair",
  icons: {
    favicon: "icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
