// /app/layout.js

import Navbar from "./component/Navbar/page";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Pet Shop",
  description: "Pet Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
