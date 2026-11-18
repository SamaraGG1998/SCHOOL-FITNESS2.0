import { type ReactNode } from "react"

export type Page =
  | "home"
  | "courses"
  | "calendar"
  | "gallery"
  | "testimonials"
  | "blog"
  | "about"
  | "contact"


export type IconName = "arrow" | "bag" | "check" | "close" | "minus" | "plus" | "star"

export type Course = {
  id: number
  title: string
  level: string
  format: string
  price: number
  description: string
  image: string
  tag?: string
}

export type Review = {
  quote: string
  name: string
  detail: string
  featured?: boolean
}

export type CartState = Record<number, number>
