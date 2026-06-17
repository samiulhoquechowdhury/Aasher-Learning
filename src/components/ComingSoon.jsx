import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiBookOpen, FiLayers } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1877F214,transparent_40%)]" />
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#1877F2]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#1877F2]/10 blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:72px_72px]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 w-fit rounded-[32px] bg-white p-5 shadow-[0_25px_80px_rgba(24,119,242,.15)] ring-1 ring-[#1877F2]/10"
          >
            <img
              src={logo}
              alt="Aasher Learning"
              className="h-24 w-24 rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1877F2]/15 bg-white/80 px-5 py-2 text-sm backdrop-blur"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#1877F2] animate-pulse" />
            Launching Soon on Google Play
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-5xl font-bold tracking-tight md:text-7xl leading-tight"
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
            transition={{ delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600"
          >
            <span className="font-semibold text-slate-900">
              Aasher Learning
            </span>{" "}
            is an initiative of{" "}
            <span className="font-semibold text-[#1877F2]">
              Aasher Foundation
            </span>
            , built to inspire curiosity, empower learners, and make quality
            education accessible through a modern mobile-first experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {[
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
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-[#1877F2]/5 backdrop-blur"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-2xl text-[#1877F2]">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-slate-500">{item.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="group mt-14 inline-flex items-center gap-3 rounded-full bg-[#1877F2] px-8 py-4 font-medium text-white shadow-[0_20px_50px_rgba(24,119,242,.35)] transition hover:-translate-y-1 hover:bg-[#166FE5]"
          >
            Coming Soon
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </motion.button>

          <div className="mx-auto mt-16 flex flex-wrap justify-center gap-3">
            {["Education", "Interactive Learning", "Mobile First"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-[#1877F2]/10 px-5 py-2 text-sm font-medium text-[#1877F2]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#1877F2]/30 to-transparent" />

          <footer className="space-y-3 text-center">
            <h2 className="text-xl font-semibold">Aasher Learning</h2>
            <p className="text-slate-600">
              An initiative of{" "}
              <span className="font-semibold text-[#1877F2]">
                Aasher Foundation
              </span>
            </p>
            <p className="text-slate-600">
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-[#1877F2]">
                Prakity Technologies
              </span>
            </p>
            <p className="pt-3 text-sm text-slate-400">
              © {new Date().getFullYear()} Aasher Learning. All Rights Reserved.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
