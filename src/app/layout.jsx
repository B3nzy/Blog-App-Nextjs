import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Next App Tutorials By Lama",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between min-h-screen m-auto">
          <header className="sticky top-0 z-[60]">
            <Navbar />
          </header>
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
