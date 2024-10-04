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
        <header>
          <Navbar />
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
