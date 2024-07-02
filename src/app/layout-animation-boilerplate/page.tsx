"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

import PageHeader from "@/components/PageHeader"

export default function Page() {
  const [activeTab, setActiveTab] = useState<null | {
    id: string
    title: string
    description: string
  }>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveTab(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <PageHeader title="Card Layout">
      <div className="rounded-lg relative w-full flex items-center justify-center bg-zinc-50 h-96 mt-2">
        <>
          <ul className="relative flex w-96 flex-col items-center gap-2">
            {TABS.map((tab, i) => (
              <motion.li
                className="flex w-full cursor-pointer p-4 bg-white text-zinc-500 hover:text-zinc-900 hover:shadow ring-1 ring-zinc-900/5 items-center justify-between group"
                layoutId={`card-${tab.id}`}
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab)
                }}
                style={{ borderRadius: 4 }}
              >
                <motion.div
                  className="flex items-center justify-between w-full"
                  layoutId={`container-${tab.id}`}
                >
                  <motion.h2 layoutId={`title-${tab.id}`}>
                    {tab.title}
                  </motion.h2>
                  <button tabIndex={0}>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      className="fill-inherit rotate-0 group-hover:opacity-80 opacity-40 transition-opacity duration-200"
                    >
                      <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                    </motion.svg>
                  </button>
                </motion.div>
              </motion.li>
            ))}
          </ul>

          <AnimatePresence>
            {activeTab ? (
              <div className="absolute z-10">
                <motion.div
                  layoutId={`card-${activeTab.id}`}
                  className="flex w-[400px] h-[200px] flex-col items-start gap-2 overflow-hidden p-4 pb-1 ring-1 ring-zinc-900/10 bg-white shadow-2xl"
                  style={{ borderRadius: 12 }}
                >
                  <motion.div
                    className="w-full flex justify-between items-center"
                    layoutId={`container-${activeTab.id}`}
                  >
                    <motion.h2 layoutId={`title-${activeTab.id}`}>
                      {activeTab.title}
                    </motion.h2>
                    <button
                      onClick={() => setActiveTab(null)}
                      className="hover:bg-red-50 hover:text-red-500 focus:bg-red-50 focus:text-red-500 focus:outline-red-500 transition-colors text-zinc-900/60 group rounded p-1 -m-1"
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 45 }}
                        exit={{ rotate: 0 }}
                        className="fill-current transition-opacity duration-200"
                      >
                        <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                      </motion.svg>
                    </button>
                  </motion.div>
                  <motion.p
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="text-sm text-zinc-500 h-full pb-3 leading-relaxed"
                  >
                    {activeTab.description}
                  </motion.p>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </>
      </div>
    </PageHeader>
  )
}

const TABS = [
  {
    id: "layout-animations",
    title: "Layout Animations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
  },
  {
    id: "framer-motion",
    title: "Framer Motion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
  },
  {
    id: "react-spring",
    title: "React Spring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
  },
]
