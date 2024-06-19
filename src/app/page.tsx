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
            Card layout
          </Link>
        </div>
      </div>
    </div>
  )
}
