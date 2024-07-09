import Link from "next/link"

export default function Home() {
  return (
    <div className="rounded-lg w-full">
      <div className="flex flex-col gap-8">
        <h1 className="text-lg font-semibold">Animation Playground</h1>
        <div className="flex flex-col gap-4">
          <Link href="/tab-highlighting" className="hover:underline">
            Tab Highlighting
          </Link>
          <Link href="/card-layout" className="hover:underline">
            Card Layout
          </Link>
          <Link
            href="/layout-animation-boilerplate"
            className="hover:underline"
          >
            Layout Animation Boilerplate
          </Link>
          <Link href="/scroll-animation" className="hover:underline">
            Scroll Animation
          </Link>
        </div>
      </div>
    </div>
  )
}
