import { Comfortaa } from "next/font/google";
import "./styles/globals.scss";
import "./styles/ui.scss";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as per your preference
});

export const metadata = {
  title: "Treasuremount",
  description: "treasuremount",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <div className="site-layout">
          <Navbar />
          <div className="site-content" id="site-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
