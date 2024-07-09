"use client"

import { useTransform, useScroll, motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const imageDarken = useTransform(scrollYProgress, [0, 0.1], [0, 0.5])

  return (
    <main>
      <div className="h-[120vh] w-full flex items-center justify-center">
        Section
      </div>
      <div className="relative z-10 w-full overflow-x-clip">
        <section ref={targetRef} className="relative z-10 h-[400vh]">
          <div className="sticky top-0">
            <div className="flex justify-center">
              <motion.div className="origin-top">
                <motion.img
                  src="https://images.unsplash.com/photo-1720180320321-2a3d719d14f8?q=80&w=3512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-[100vh] max-h-none w-full"
                />
                <motion.div
                  className="h-screen w-screen fixed flex z-50  top-0 left-0 items-center justify-center"
                  style={{
                    opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
                    y: useTransform(
                      scrollYProgress,
                      [0, 0.75, 1],
                      ["0%", "0%", "-100%"]
                    ),
                  }}
                >
                  <h1 className="text-white font-bold text-5xs text-center">
                    Hey this is a message
                  </h1>
                </motion.div>

                <motion.div
                  style={{ opacity: imageDarken }}
                  className="absolute inset-0 z-20 bg-black"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-[120vh] w-full flex items-center justify-center">
        Section
      </div>
    </main>
  )
}
