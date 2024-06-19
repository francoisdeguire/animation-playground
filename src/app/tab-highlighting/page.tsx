"use client"

import PageHeader from "@/components/PageHeader"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const TABS = ["All", "New", "Popular"]

export default function Page() {
  const [activeTab, setActiveTab] = useState("All")
  const [temp, setTemp] = useState("none")

  return (
    <PageHeader title="Tab Highlighting">
      <div className="rounded-lg w-full bg-zinc-100 h-96 mt-2">
        <div className="w-full h-full flex items-center justify-center">
          {TABS.map((tab) => (
            <motion.li
              layout
              className={clsx(
                "relative cursor-pointer px-3 py-1 outline-none transition-colors list-none",
                activeTab === tab
                  ? "text-zinc-950 underline underline-offset-4"
                  : "text-zinc-500 "
              )}
              tabIndex={0}
              key={tab}
              onFocus={() => setActiveTab(tab)}
              onMouseOver={() => setTemp(tab)}
              onMouseLeave={() => setTemp("none")}
              onClick={() => setActiveTab(tab)}
            >
              <AnimatePresence>
                {temp === tab ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.2,
                      bounce: 0.05,
                    }}
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-lg bg-zinc-900/5"
                  />
                ) : null}
              </AnimatePresence>
              <span className="relative text-inherit">{tab}</span>
            </motion.li>
          ))}
        </div>
      </div>
    </PageHeader>
  )
}
