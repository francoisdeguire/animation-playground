import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]): any {
  return twMerge(clsx(inputs))
}

export { cn }
