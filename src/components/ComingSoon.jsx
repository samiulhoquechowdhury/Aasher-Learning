// ComingSoon.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiLayers, FiPlay } from "react-icons/fi";

import logo from "../assets/logo.png";
import playStore from "../assets/play-store.png";
import prakityLogo from "../assets/prakity-logo.png";

const features = [
  {
    icon: <FiPlay />,
    title: "Google Play",
    text: "Launching Soon",
  },
  {
    icon: <FiBookOpen />,
    title: "Quality Learning",
    text: "Interactive Content",
  },
  {
    icon: <FiLayers />,
    title: "Modern Experience",
    text: "Simple & Intuitive",
  },
];

export default function ComingSoon() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <main className="relative flex h-screen flex-col overflow-hidden bg-[#F8FAFC] text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1877F214,transparent_40%)]" />

      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#1877F2]/20 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#1877F2]/10 blur-[160px]"
      />

      <div className="absolute top-1/3 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#1877F2]/10 blur-[180px]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Floating Glass accents — kept off small/short screens so the one-screen layout never overflows */}
      <div className="absolute left-24 bottom-28 hidden h-14 w-14 rounded-full border border-white/40 bg-white/20 backdrop-blur-3xl lg:block" />
      <div className="absolute right-20 top-24 hidden h-20 w-20 rotate-12 rounded-[26px] border border-white/40 bg-white/20 backdrop-blur-3xl lg:block" />

      {/* NAVBAR — logo + tagline, same liquid-glass treatment as the rest of the page */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-5"
      >
        <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/45 py-1.5 pl-1.5 pr-4 backdrop-blur-3xl shadow-[0_10px_40px_rgba(24,119,242,.12)] sm:pr-5">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-1.5 backdrop-blur-3xl">
            <img
              src={logo}
              alt="Aasher Learning"
              className="h-7 w-7 rounded-lg sm:h-9 sm:w-9 sm:rounded-xl"
            />
          </div>

          <div className="text-left leading-tight">
            <p className="text-sm font-bold tracking-tight sm:text-base">
              Aasher Learning
            </p>
            <p className="hidden text-[11px] font-medium text-slate-500 sm:block sm:text-xs">
              An initiative of{" "}
              <span className="text-[#1877f2]">Aasher Foundation</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-3 py-2 backdrop-blur-3xl shadow-[0_10px_40px_rgba(24,119,242,.12)] sm:px-4">
          <span className="h-2 w-2 rounded-full bg-[#1877F2] animate-pulse" />
          <span className="text-xs font-medium text-slate-600 sm:text-sm">
            Coming Soon
          </span>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-hidden px-5 sm:px-6">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Brand Logo — same liquid glass card as before, just scaled to fit one screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-4 w-fit rounded-[28px] border border-white/50 bg-white/60 p-3 backdrop-blur-3xl shadow-[0_20px_60px_rgba(24,119,242,.15)] sm:mb-5 sm:p-4"
          >
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 rounded-2xl sm:h-16 sm:w-16"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            The Future of{" "}
            <span className="bg-gradient-to-r from-[#0F62FE] via-[#1877F2] to-[#69B2FF] bg-clip-text text-transparent">
              Learning
            </span>{" "}
            Begins Here.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7 md:text-lg"
          >
            <span className="font-semibold text-slate-900">
              Aasher Learning
            </span>{" "}
            is an initiative of{" "}
            <span className="font-semibold text-[#1877F2]">
              Aasher Foundation
            </span>
            , built to inspire curiosity and make quality education accessible
            through a beautiful mobile-first experience.
          </motion.p>

          {/* Play Store Card */}
          <motion.button
            type="button"
            onClick={() => setShowDialog(true)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="group relative mx-auto mt-5 flex w-fit items-center gap-3 overflow-hidden rounded-[24px] border border-white/60 bg-white/35 px-5 py-3 backdrop-blur-3xl shadow-[0_15px_50px_rgba(24,119,242,.18)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_rgba(24,119,242,.30)] sm:mt-6 sm:gap-4 sm:px-6 sm:py-3.5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/15 to-transparent" />
            <div className="absolute -top-8 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

            <img
              src={playStore}
              alt="Play Store"
              className="relative z-10 h-9 w-9 rounded-xl sm:h-11 sm:w-11"
            />

            <div className="relative z-10 text-left">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Google Play
              </p>
              <h3 className="text-base font-semibold sm:text-xl">
                Coming Soon
              </h3>
            </div>

            <FiArrowRight className="relative z-10 ml-2 text-lg text-[#1877F2] transition group-hover:translate-x-1 sm:ml-3 sm:text-2xl" />
          </motion.button>

          {/* Features */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            {features.map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item.title}
                className="group rounded-2xl border border-white/60 bg-white/40 p-2.5 backdrop-blur-3xl shadow-lg sm:rounded-[26px] sm:p-5"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-xl bg-[#1877F2]/10 text-base text-[#1877F2] transition group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-1.5 text-[11px] font-semibold leading-tight sm:mt-3 sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-0.5 hidden text-xs text-slate-500 sm:mt-1 sm:block">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:mt-6 sm:gap-2.5">
            {["Education", "Interactive Learning", "Mobile First"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-[11px] font-medium text-[#1877F2] backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER — same glass treatment, condensed into one band so it never pushes the page into scroll */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 shrink-0 px-4 pb-3 sm:px-8 sm:pb-5"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 rounded-[24px] border border-white/60 bg-white/45 px-4 py-3 text-center backdrop-blur-3xl shadow-[0_10px_40px_rgba(24,119,242,.12)] sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p className="text-[11px] leading-snug text-slate-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-700">
              Aasher Learning
            </span>{" "}
            — an initiative of{" "}
            <span className="font-semibold text-[#1877F2]">
              Aasher Foundation
            </span>
          </p>

          <a
            href="https://prakity.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-3 py-1.5 backdrop-blur-xl transition hover:scale-105"
          >
            <img
              src={prakityLogo}
              alt="Prakity Technologies"
              className="h-5 w-5 rounded-full object-cover sm:h-6 sm:w-6"
            />
            <span className="text-[11px] font-medium text-slate-700 sm:text-xs">
              Designed &amp; Developed by{" "}
              <span className="text-[#1877F2]">Prakity Technologies</span>
            </span>
          </a>
        </div>
      </motion.footer>

      {/* DIALOG */}
      <AnimatePresence>
        {showDialog && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDialog(false)}
            />

            {/* Dialog */}
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/55 p-7 text-center shadow-[0_30px_100px_rgba(24,119,242,.18)] backdrop-blur-3xl sm:p-8"
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />

                <div className="relative z-10">
                  <img
                    src={playStore}
                    alt="Play Store"
                    className="mx-auto h-16 w-16 rounded-3xl sm:h-20 sm:w-20"
                  />

                  <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:mt-6 sm:text-3xl">
                    Coming Soon
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600 sm:mt-4">
                    Aasher Learning is currently under development and will be
                    available soon on Google Play.
                    <br />
                    <br />
                    Thank you for your patience and support.
                  </p>

                  <button
                    onClick={() => setShowDialog(false)}
                    className="mt-6 rounded-full bg-[#1877F2] px-8 py-3 font-medium text-white transition hover:bg-[#166FE5] sm:mt-8"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
