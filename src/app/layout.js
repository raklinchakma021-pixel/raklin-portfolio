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
import FadeIn from "@/components/FadeIn";

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
<FadeIn>
        <Banner/>
  
</FadeIn>
       

          <FadeIn delay={0.1}>
            <AboutMe />
          </FadeIn>

          <FadeIn delay={0.2}>
            <TechStacks />
          </FadeIn>

          <FadeIn delay={0.3}>
            <SkillsSection />
          </FadeIn>
                <FadeIn delay={0.4}>
            <QualificationSection />
          </FadeIn>

          <FadeIn delay={0.5}>
            <ProjectsSection />
          </FadeIn>

          <FadeIn delay={0.6}>
            <ContactSection />
          </FadeIn>
        <Footer/>
        {children}

        </SmoothScroll>
        </body>
    </html>
  );
}
