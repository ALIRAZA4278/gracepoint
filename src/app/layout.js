import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const fifthAvenue = localFont({
  src: "../../public/font/fifth avenue.ttf",
  variable: "--font-fifth-avenue",
});

export const metadata = {
  title: "GracePoint Medical Staffing - Premier Healthcare Staffing Solutions",
  description: "GracePoint Medical Staffing is a premier healthcare staffing agency providing highly qualified professionals to healthcare facilities. Built on professionalism, reliability, and excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${fifthAvenue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
