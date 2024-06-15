import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata = {
  title:
    "Philip Oyelegbin - Support Specialist | Frontend Developer | Cloud Engineer | Passionate Innovator | STEM Advocate",
  description:
    "Result-Driven Support Specialist | Frontend Developer | Cloud Engineer | Passionate Innovator | STEM Advocate",
  openGraph: {
    title:
      "Philip Oyelegbin - Support Specialist | Frontend Developer | Cloud Engineer | Passionate Innovator | STEM Advocate",
    description:
      "Result-Driven Support Specialist | Frontend Developer | Cloud Engineer | Passionate Innovator | STEM Advocate",
    url: "https://philipoyelegbin.com.ng",
    type: "website",
    locale: "en_US",
    site_name: "Philip Oyelegbin",
  },
  twitter: {
    handle: "@OyelegbinPhilip",
    site: "@OyelegbinPhilip",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montAlt.className}>
        <Navbar />
        <main className={montAlt.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
