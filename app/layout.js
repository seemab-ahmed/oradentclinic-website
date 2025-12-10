import { Jost, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/component/navbar/Header";
import Footer from "@/component/footer";
import TopBar from "@/component/navbar/TopBar";
import AOSWrapper from "@/component/AOSWrapper";
import GoogleReview from '@/component/GoogleReview';

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "Oradent Dental",
  description: "Oradent Dental",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${jost.variable} ${openSans.variable} antialiased`}
      >
        <AOSWrapper>
          <TopBar />
          <Header />
          {children}
          <GoogleReview />
          <Footer />
        </AOSWrapper>


      </body>
    </html>
  );
}
