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
    <main className="relative min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-900">
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

      {/* Floating Glass */}
      <div className="absolute left-28 bottom-40 h-16 w-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-3xl" />
      <div className="absolute right-24 top-40 h-24 w-24 rotate-12 rounded-[28px] border border-white/40 bg-white/20 backdrop-blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-8 w-fit rounded-[36px] border border-white/50 bg-white/60 p-6 backdrop-blur-3xl shadow-[0_30px_80px_rgba(24,119,242,.15)]"
          >
            <img src={logo} alt="logo" className="h-24 w-24 rounded-3xl" />
          </motion.div>

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/50 px-6 py-3 backdrop-blur-xl shadow-lg">
            <span className="h-3 w-3 rounded-full bg-[#1877F2] animate-pulse" />
            <span className="font-medium text-slate-700">
              Google Play • Coming Soon
            </span>
          </div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[1.05]"
          >
            The Future of{" "}
            <span className="bg-gradient-to-r from-[#0F62FE] via-[#1877F2] to-[#69B2FF] bg-clip-text text-transparent">
              Learning
            </span>
            <br />
            Begins Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600"
          >
            <span className="font-semibold text-slate-900">
              Aasher Learning
            </span>{" "}
            is an initiative of{" "}
            <span className="font-semibold text-[#1877F2]">
              Aasher Foundation
            </span>
            , built to inspire curiosity, empower learners and make quality
            education accessible through a beautiful mobile-first experience.
          </motion.p>

          {/* Play Store Card */}

          <motion.button
            type="button"
            onClick={() => setShowDialog(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group relative mx-auto mt-14 flex w-fit items-center gap-5 overflow-hidden rounded-[30px] border border-white/60 bg-white/35 px-8 py-5 backdrop-blur-3xl shadow-[0_20px_80px_rgba(24,119,242,.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(24,119,242,.30)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/15 to-transparent" />
            <div className="absolute -top-10 left-1/2 h-28 w-44 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

            <img
              src={playStore}
              alt="Play Store"
              className="relative z-10 h-14 w-14 rounded-2xl"
            />

            <div className="relative z-10 text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Google Play
              </p>

              <h3 className="mt-1 text-2xl font-semibold">Coming Soon</h3>
            </div>

            <FiArrowRight className="relative z-10 ml-6 text-2xl text-[#1877F2] transition group-hover:translate-x-1" />
          </motion.button>

          {/* Features */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={item.title}
                className="group rounded-[30px] border border-white/60 bg-white/40 p-7 backdrop-blur-3xl shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#1877F2]/10 text-3xl text-[#1877F2] transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-2 text-slate-500">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Tags */}

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {["Education", "Interactive Learning", "Mobile First"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/60 bg-white/50 px-5 py-2 text-sm font-medium text-[#1877F2] backdrop-blur-xl"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#1877F2]/30 to-transparent" />

          {/* Footer */}

          <footer className="space-y-5">
            <h2 className="text-xl font-semibold">Aasher Learning</h2>

            <p className="text-slate-500">
              An initiative of{" "}
              <span className="font-semibold text-[#1877F2]">
                Aasher Foundation
              </span>
            </p>

            <a
              href="https://prakity.com"
              target="_blank"
              rel="noreferrer"
              className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/50 px-4 py-2 backdrop-blur-xl transition hover:scale-105"
            >
              <img
                src={prakityLogo}
                alt="Prakity Technologies"
                className="h-9 w-9 rounded-full object-cover"
              />

              <span className="font-medium text-slate-700">
                Designed &amp; Developed by{" "}
                <span className="text-[#1877F2]">Prakity Technologies</span>
              </span>
            </a>

            <p className="pt-2 text-sm text-slate-400">
              © {new Date().getFullYear()} Aasher Learning. All Rights Reserved.
            </p>
          </footer>
        </div>
      </section>
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
                className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/55 p-8 text-center shadow-[0_30px_100px_rgba(24,119,242,.18)] backdrop-blur-3xl"
              >
                {/* Glass reflection */}

                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />

                <div className="relative z-10">
                  <img
                    src={playStore}
                    alt="Play Store"
                    className="mx-auto h-20 w-20 rounded-3xl"
                  />

                  <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    Coming Soon
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Aasher Learning is currently under development and will be
                    available soon on Google Play.
                    <br />
                    <br />
                    Thank you for your patience and support.
                  </p>

                  <button
                    onClick={() => setShowDialog(false)}
                    className="mt-8 rounded-full bg-[#1877F2] px-8 py-3 font-medium text-white transition hover:bg-[#166FE5]"
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
