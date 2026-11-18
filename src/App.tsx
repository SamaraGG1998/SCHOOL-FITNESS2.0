import { useEffect, useState } from "react"
import { Page, Course, CartState } from "@/types"
import { courses } from "@/data/courses"
import {
  Header,
  Footer,
  CartDrawer,
  HomePage,
  CoursesPage,
  AboutPage,
  ReviewsPage,
} from "@/components"

export default function App() {
  const getPage = (): Page => {
    const hash = window.location.hash.replace("#/", "") as Page
    return ["home", "courses", "about", "reviews"].includes(hash)
      ? hash
      : "home"
  }

  const [page, setPage] = useState<Page>(getPage)
  const [cart, setCart] = useState<CartState>({})
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const goTo = (next: Page) => {
    window.location.hash = `/${next}`
    setPage(next)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const addToCart = (course: Course) => {
    setCart((prev) => ({ ...prev, [course.id]: (prev[course.id] || 0) + 1 }))
    setCartOpen(true)
  }

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0)

  const navItems: [Page, string][] = [
    ["home", "Inicio"],
    ["courses", "Certificaciones"],
    ["about", "Nuestra historia"],
    ["reviews", "Reseñas"],
  ]

  return (
    <div className="app-shell">
      <Header
        page={page}
        goTo={goTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        navItems={navItems}
      />

      {page === "home" && <HomePage goTo={goTo} addToCart={addToCart} />}
      {page === "courses" && <CoursesPage addToCart={addToCart} />}
      {page === "about" && <AboutPage goTo={goTo} />}
      {page === "reviews" && <ReviewsPage goTo={goTo} />}

      <Footer goTo={goTo} navItems={navItems} />

      <CartDrawer
        cart={cart}
        setCart={setCart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        courses={courses}
      />
    </div>
  )
}
