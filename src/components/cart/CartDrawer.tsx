import { Course, CartState } from "@/types"
import { Button } from "@/components/common/Button"
import { Icon } from "@/components/common/Icon"

interface CartDrawerProps {
  cart: CartState
  setCart: (cart: CartState) => void
  open: boolean
  onClose: () => void
  courses: Course[]
}

export function CartDrawer({
  cart,
  setCart,
  open,
  onClose,
  courses,
}: CartDrawerProps) {
  const items = courses.filter((course) => cart[course.id])
  const total = items.reduce(
    (sum, course) => sum + course.price * cart[course.id],
    0,
  )

  const update = (id: number, amount: number) => {
    const next = { ...cart, [id]: (cart[id] || 0) + amount }
    if (next[id] <= 0) delete next[id]
    setCart(next)
  }

  return (
    <>
      <div
        className={`cart-overlay ${open ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <header>
          <div>
            <span className="eyebrow">Tu selección</span>
            <h2>Carrito de compras</h2>
          </div>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            <Icon name="close" />
          </button>
        </header>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span>
                <Icon name="bag" size={28} />
              </span>
              <h3>Tu carrito está vacío.</h3>
              <p>Elige una certificación y comienza tu próximo capítulo.</p>
              <Button variant="light" onClick={onClose}>
                Seguir explorando
              </Button>
            </div>
          ) : (
            items.map((course) => (
              <div className="cart-item" key={course.id}>
                <img src={course.image} alt={course.title} />
                <div>
                  <span>{course.level}</span>
                  <h3>{course.title}</h3>
                  <strong>${course.price.toLocaleString()}</strong>
                  <div className="quantity">
                    <button
                      onClick={() => update(course.id, -1)}
                      aria-label={`Quitar un curso ${course.title}`}
                    >
                      <Icon name="minus" size={15} />
                    </button>
                    <span>{cart[course.id]}</span>
                    <button
                      onClick={() => update(course.id, 1)}
                      aria-label={`Agregar un curso ${course.title}`}
                    >
                      <Icon name="plus" size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <footer className="cart-footer">
            <div>
              <span>Subtotal</span>
              <strong>${total.toLocaleString()}</strong>
            </div>
            <p>Planes de pago disponibles al finalizar la compra.</p>
            <Button
              className="checkout-button"
              onClick={() =>
                alert(
                  "Tu pago seguro está listo para conectarse con tu proveedor de pagos.",
                )
              }
            >
              Finalizar compra <Icon name="arrow" />
            </Button>
          </footer>
        )}
      </aside>
    </>
  )
}
