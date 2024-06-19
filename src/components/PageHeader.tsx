import React from "react"

const PageHeader = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col w-full gap-7">
      <h2 className="text-lg text-zinc-500">{title}</h2>
      {children}
    </div>
  )
}

export default PageHeader
