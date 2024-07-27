import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Aviafly",
  description: "The Cheapest Tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className && "bg-primary"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
