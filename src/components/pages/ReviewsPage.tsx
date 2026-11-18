import { Page } from "@/types"
import { reviews } from "@/data/reviews"
import { Button } from "@/components/common/Button"
import { Icon } from "@/components/common/Icon"

interface ReviewsPageProps {
  goTo: (page: Page) => void
}

export function ReviewsPage({ goTo }: ReviewsPageProps) {
  return (
    <main className="page inner-page reviews-page">
      {/* Intro */}
      <section className="page-intro">
        <span className="eyebrow">Historias de alumnas</span>
        <h1>
          Instructoras reales. <em>Transformaciones reales.</em>
        </h1>
        <p>
          Más de 2,400 graduadas han confiado en School Fitness para su próximo
          capítulo. Esto es lo que algunas de ellas nos contaron.
        </p>
      </section>

      {/* Ratings Summary */}
      <section className="rating-summary">
        <div>
          <strong>4.9</strong>
          <div>
            <span className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon name="star" size={17} key={i} />
              ))}
            </span>
            <p>Basado en 486 reseñas verificadas</p>
          </div>
        </div>
        <div>
          <strong>98%</strong>
          <p>recomendaría School Fitness a una amiga</p>
        </div>
        <div>
          <strong>92%</strong>
          <p>enseña durante los 6 meses posteriores a graduarse</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid section">
        {reviews.map((rev) => (
          <article
            key={rev.name}
            className={rev.featured ? "featured-review" : ""}
          >
            <div className="stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Icon name="star" size={14} key={s} />
              ))}
            </div>
            <blockquote>{rev.quote}</blockquote>
            <footer>
              <strong>{rev.name}</strong>
              <span>{rev.detail}</span>
            </footer>
          </article>
        ))}
      </section>

      {/* CTA Footer */}
      <section className="review-cta">
        <span className="script">Tu historia comienza aquí</span>
        <h2>¿Lista para dar el primer paso?</h2>
        <Button onClick={() => goTo("courses")}>
          Explorar certificaciones <Icon name="arrow" />
        </Button>
      </section>
    </main>
  )
}
