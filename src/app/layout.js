import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Banner from "@/components/Banner";
import AboutMe from "@/components/About";
import TechStacks from "@/components/TechStacks";
import SkillsSection from "@/components/Skills";
import QualificationSection from "@/components/Quality";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raklin Chakma | Portfolio App",
  description: "Born to be a coder",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll >
<Navbar/>
        <Banner/>
        <AboutMe/>
        <TechStacks/>
        <SkillsSection/>
        <QualificationSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
        {children}

        </SmoothScroll>
        </body>
    </html>
  );
}
