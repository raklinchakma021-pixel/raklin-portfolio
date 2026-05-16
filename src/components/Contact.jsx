import Link from "next/link";
import {
  Mail,
 
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden w-11/12 mx-auto bg-white px-6 py-24 dark:bg-black"
    >
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="mx-auto max-w-5xl">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-violet-500">
            Contact Me
          </p>

          <h2 className="text-4xl font-black text-black dark:text-white sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Have a project idea or want to collaborate? Feel free to contact me
            through email, LinkedIn, or WhatsApp.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          
          {/* Gmail */}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raklinchakma021@gmail.com"
            className="group rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-red-500/10 p-4 text-red-500">
              <Mail className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white">
              Gmail
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              raklinchakma021@gmail.com
            </p>

            <div className="mt-6 inline-flex items-center text-sm font-semibold text-violet-500">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/raklin-chakma/"
            target="_blank"
            className="group rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-500">
              <LiaLinkedin className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Connect with me professionally
            </p>

            <div className="mt-6 inline-flex items-center text-sm font-semibold text-violet-500">
              Visit Profile
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/8801609981948"
            target="_blank"
            className="group rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-green-500/10 p-4 text-green-500">
              <MessageCircle className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Chat with me directly
            </p>

            <div className="mt-6 inline-flex items-center text-sm font-semibold text-violet-500">
              Start Chat
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}