import { Page, Course } from "@/types"
import { sitePhotos, courses } from "@/data/courses"
import { Button } from "@/components/common/Button"
import { Icon } from "@/components/common/Icon"
import { CourseCard } from "@/components/courses/CourseCard"
import maggiePhoto from "@/imports/MAGGIE.jpg"

interface HomePageProps {
  goTo: (page: Page) => void
  addToCart: (course: Course) => void
}

export function HomePage({ goTo, addToCart }: HomePageProps) {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Enseña con propósito</span>
          <h1>
            Una forma más humana de <em style={{ color: "var(--peach)" }}>enseñar Fitness.</em>
          </h1>
          <p>
            Certificaciones para convertir tu práctica en vocación y guiar con confianza.
          </p>
          <div className="hero-actions">
            <Button onClick={() => goTo("courses")}>
              Ver certificaciones <Icon name="arrow" />
            </Button>
            <Button variant="text" onClick={() => goTo("about")}>
              Conoce a Maggie
            </Button>
          </div>
          <div className="trust-row">
            <div>
              <strong>2,400+</strong>
              <span>graduadas</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>valoración</span>
            </div>
            <div>
              <strong>22</strong>
              <span>países</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src={sitePhotos.hero}
            alt="Instructora de Pilates practicando en un estudio luminoso"
          />
          <div className="floating-note">
            <span>Inscripciones abiertas</span>
            <strong>Primavera 2025</strong>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="marquee" aria-label="Beneficios de los cursos">
        <span>Reconocimiento internacional</span>
        <i>✦</i>
        <span>Aprende a tu ritmo</span>
        <i>✦</i>
        <span>Mentoría personalizada</span>
        <i>✦</i>
        <span>Comunidad para siempre</span>
      </section>

      {/* What is Barre School Fitness Section */}
      <section
        className="section barre-intro-section"
        aria-labelledby="barre-intro-title"
      >
        <div className="barre-intro-grid">
          <div className="barre-intro-copy">
            <span className="eyebrow">¿Qué es Barre School·Fitness?</span>
            <h2 id="barre-intro-title">
              Una experiencia de aprendizaje <em>teórico-práctica.</em>
            </h2>
            <p className="barre-lead">
              Donde el objetivo es dominar el entrenamiento, diseñar e impartir
              clases fitness.
            </p>
            <p>
              Estas certificaciones son cursos intensivos dirigidos a
              instructoras y público en general. Si tu interés es dirigir clases
              de manera efectiva, creativa y segura,{" "}
              <strong>¡tu preparación empieza aquí!</strong>
            </p>
            <div className="barre-intro-actions">
              <Button onClick={() => goTo("courses")}>
                Explorar certificaciones <Icon name="arrow" />
              </Button>
            </div>
          </div>

          <div className="barre-pillars-card">
            <div className="barre-pillar-item">
              <span className="barre-pillar-num">01</span>
              <div>
                <h3>Para todo nivel de experiencia</h3>
                <p>
                  Abierto tanto a instructoras activas que buscan ampliar su
                  repertorio como a apasionadas que inician desde cero.
                </p>
              </div>
            </div>
            <div className="barre-pillar-item">
              <span className="barre-pillar-num">02</span>
              <div>
                <h3>Diseño creativo de secuencias</h3>
                <p>
                  Aprende musicalidad, transiciones fluidas y variaciones
                  dinámicas para mantener a tus alumnas motivadas.
                </p>
              </div>
            </div>
            <div className="barre-pillar-item">
              <span className="barre-pillar-num">03</span>
              <div>
                <h3>Cuidado anatómico y seguridad</h3>
                <p>
                  Cada ejercicio se respalda en alineación postural, biomecánica
                  clara y progresiones para distintos cuerpos.
                </p>
              </div>
            </div>
            <div className="barre-cta-banner">
              <span>✦ Aval oficial SEP · CONOCER ✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="section courses-preview">
        <div className="courses-header-row">
          <div>
            <h2>Elige tu camino</h2>
            <p>Fundamentos o especialización según tu etapa.</p>
          </div>
          <Button variant="text" onClick={() => goTo("courses")}>
            Ver todos los cursos <Icon name="arrow" />
          </Button>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Founder Feature Section */}
      <section className="founder-feature">
        <div className="founder-photo">
          <img
            src={maggiePhoto}
            alt="Maggie Zarate, fundadora de School Fitness"
          />
        </div>
        <div className="founder-copy">
          <span className="script">Un mensaje de Maggie</span>
          <h2>“Creé la formación que me hubiera gustado tener al comenzar.”</h2>
          <p>
            La técnica importa, pero también cómo haces sentir a las personas.
            School Fitness combina educación rigurosa con una forma más humana
            de enseñar, para que te gradúes segura, curiosa y fiel a ti misma.
          </p>
          <Button variant="text" onClick={() => goTo("about")}>
            Nuestra historia <Icon name="arrow" />
          </Button>
        </div>
      </section>

      {/* Testimonial Feature Section */}
      <section className="section testimonial-feature">
        <div className="quote-mark">“</div>
        <blockquote>
          School Fitness no solo me enseñó Pilates. Me dio la confianza para
          construir una carrera que por fin siento como mía.
        </blockquote>
        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon name="star" size={15} key={i} />
          ))}
        </div>
        <p>Amelia R. · Graduada de Mat y Reformer</p>
        <Button variant="text" onClick={() => goTo("reviews")}>
          Leer historias de alumnas <Icon name="arrow" />
        </Button>
      </section>
    </main>
  )
}
