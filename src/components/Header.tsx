"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ArrowLeftIcon } from "@heroicons/react/20/solid"

import { Animation } from "./Icons"

const Header = () => {
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  return (
    <header className="mb-8 flex items-center">
      {isHomePage && (
        <div className="text-zinc-950">
          <Link
            className="fill-current inline-block align-top w-14 h-auto"
            href="/"
          >
            <Animation />
          </Link>
        </div>
      )}
      {!isHomePage && (
        <Link href="/" className="flex items-center gap-1.5">
          <ArrowLeftIcon className="text-zinc-950 h-5" />
          <span className="font-medium">Go Back</span>
        </Link>
      )}
    </header>
  )
}

export default Header
