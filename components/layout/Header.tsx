import { Page } from "@/types"
import { Icon } from "@/components/common/Icon"

interface HeaderProps {
  page: Page
  goTo: (page: Page) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  cartCount: number
  onOpenCart: () => void
  navItems: [Page, string][]
}

export function Header({
  page,
  goTo,
  menuOpen,
  setMenuOpen,
  cartCount,
  onOpenCart,
  navItems,
}: HeaderProps) {
  return (
    <>
      <div className="announcement">
        Inscripciones abiertas para nuestros grupos de mayo{" "}
        <button onClick={() => goTo("courses")}>
          Explorar cursos <Icon name="arrow" size={15} />
        </button>
      </div>

      <header className="site-header">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir o cerrar navegación"
        >
          <span />
          <span />
        </button>

        <button
          className="logo"
          onClick={() => goTo("home")}
          aria-label="Inicio de School Fitness"
        >
          SCHOOL FITNESS<span>By Maggie Zarate</span>
        </button>

        <nav className={menuOpen ? "mobile-open" : ""}>
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={page === id ? "active" : ""}
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="cart-button"
          onClick={onOpenCart}
          aria-label={`Abrir carrito con ${cartCount} productos`}
        >
          <Icon name="bag" />
          <span>Carrito</span>
          {cartCount > 0 && <b>{cartCount}</b>}
        </button>
      </header>
    </>
  )
}
