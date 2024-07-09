"use client"

import PageHeader from "@/components/PageHeader"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { useOnClickOutside } from "usehooks-ts"

export default function Page() {
  const [activeGame, setActiveGame] = useState<{
    title: string
    image: string
    description: string
    longDescription: string
  } | null>(null)

  const ref = useRef(null)
  useOnClickOutside(ref, () => setActiveGame(null))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <PageHeader title="Card Layout">
      <div className="rounded-lg relative w-full flex items-center justify-center bg-zinc-50 h-96 mt-2">
        <div className="bg-white rounded-3xl shadow-lg p-4">
          <AnimatePresence>
            {activeGame ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute z-10 inset-0 bg-[#00000033]"
              />
            ) : null}
          </AnimatePresence>
          <AnimatePresence>
            {activeGame ? (
              <div className="absolute grid place-items-center z-10 inset-0">
                <motion.div
                  ref={ref}
                  layoutId={`card-${activeGame.title}`}
                  className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden p-4 bg-white shadow-2xl"
                  style={{ borderRadius: 12 }}
                >
                  <div className="flex w-full items-center gap-4">
                    <motion.img
                      layoutId={`image-${activeGame.title}`}
                      height={56}
                      width={56}
                      alt="Game"
                      src={activeGame.image}
                      style={{ borderRadius: 12 }}
                    />
                    <div className="flex grow items-center justify-between">
                      <div>
                        <motion.h2 layoutId={`title-${activeGame.title}`}>
                          {activeGame.title}
                        </motion.h2>
                        <motion.p layoutId={`description-${activeGame.title}`}>
                          {activeGame.description}
                        </motion.p>
                      </div>
                      <motion.button
                        layoutId={`button-${activeGame.title}`}
                        className="text-xs font-semibold text-[#007aff] bg-[#f1f0ef] px-3 py-1 rounded-full"
                      >
                        Get
                      </motion.button>
                    </div>
                  </div>
                  <motion.p
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="text-sm text-[#63635d]"
                  >
                    {activeGame.longDescription}
                  </motion.p>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul className="relative flex w-full flex-col items-center px-2">
            {GAMES.map((game) => (
              <motion.li
                className="flex w-96 cursor-pointer items-center gap-4 p-0 group"
                layoutId={`card-${game.title}`}
                key={game.title}
                onClick={() => setActiveGame(game)}
                style={{ borderRadius: 8 }}
              >
                <motion.img
                  layoutId={`image-${game.title}`}
                  height={56}
                  width={56}
                  alt="Game"
                  src={game.image}
                  style={{ borderRadius: 12 }}
                />
                <div className="flex grow items-center justify-between border-b-[#d4d6d861] border-b border-solid group-last:border-none">
                  <div className="flex flex-col px-0 py-4">
                    <motion.h2
                      layoutId={`title-${game.title}`}
                      className="text-sm font-medium"
                    >
                      {game.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${game.title}`}
                      className="text-sm text-[#63635d]"
                    >
                      {game.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${game.title}`}
                    className="text-xs font-semibold text-[#007aff] px-3 py-1 rounded-full bg-[#f1f0ef]"
                  >
                    Get
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </PageHeader>
  )
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
]
