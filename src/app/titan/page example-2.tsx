"use client"

import React, { useState } from "react"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import Wrapper from "@/app/titan/components/Wrapper"
import { cn } from "@/utils"

export default function Day17() {
  const [expand, setExpand] = useState(false)

  const onClickHandler = () => setExpand(!expand)

  return (
    <>
      <div className="relative flex h-dvh w-full flex-col items-center justify-center bg-white text-black">
        <Wrapper>
          <div>
            <MotionConfig
              transition={{
                duration: 2,
                type: "spring",
                bounce: 0.2,
              }}
            >
              {/* Header */}
              <motion.header
                layout
                // animate={{
                //   height: expand ? 300 : "auto",
                // }}
                style={{ aspectRatio: expand ? "1/1" : "" }}
                className={cn(
                  "relative isolate flex flex-col",
                  expand
                    ? "items-start justify-end w-32 h-32"
                    : "items-center justify-center"
                )}
              >
                <motion.button
                  layoutId="user-avatar"
                  className="aspect-square overflow-hidden bg-red-800"
                  onClick={onClickHandler}
                  style={{
                    borderRadius: 34,
                  }}
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1774123575248830466/e0rbeSop_400x400.jpg"
                    className="pointer-events-none h-full w-full object-cover"
                  />
                </motion.button>

                <AnimatePresence>
                  {expand && (
                    <motion.button
                      layoutId="user-avatar"
                      className="absolute inset-0 -z-10 aspect-square overflow-hidden bg-red-800"
                      style={{ borderRadius: 0 }}
                      onClick={onClickHandler}
                    >
                      <motion.img
                        src="https://pbs.twimg.com/profile_images/1774123575248830466/e0rbeSop_400x400.jpg"
                        className="pointer-events-none h-full w-full object-cover"
                      />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Shadow
              {expand && (
              )} */}
              </motion.header>
            </MotionConfig>
          </div>
        </Wrapper>
      </div>
    </>
  )
}
