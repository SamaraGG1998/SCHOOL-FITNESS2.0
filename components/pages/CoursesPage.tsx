import { Course } from "@/types"
import { courses } from "@/data/courses"
import { Icon } from "@/components/common/Icon"
import { SectionTitle } from "@/components/common/SectionTitle"
import { CourseCard } from "@/components/courses/CourseCard"

interface CoursesPageProps {
  addToCart: (course: Course) => void
}

const benefits = [
  {
    number: "01",
    title: "Estudia con flexibilidad",
    text: "Aprende con lecciones cuidadosamente producidas, ejercicios prácticos y recursos con acceso de por vida.",
  },
  {
    number: "02",
    title: "Practica a profundidad",
    text: "Desarrolla habilidades reales de enseñanza con prácticas estructuradas y retroalimentación para crecer.",
  },
  {
    number: "03",
    title: "Siéntete acompañada",
    text: "Participa en mentorías en vivo y en una comunidad global que continúa contigo después de graduarte.",
  },
]

const inclusions = [
  "Manual digital de formación completo",
  "Mentorías semanales en vivo",
  "Evaluaciones prácticas de enseñanza",
  "Fundamentos de anatomía y movimiento",
  "Programación y bases de negocio",
  "Certificación internacional al completar",
]

export function CoursesPage({ addToCart }: CoursesPageProps) {
  return (
    <main className="page inner-page">
      {/* Intro Header */}
      <section className="page-intro courses-intro">
        <span className="eyebrow">La academia</span>
        <h1>
          Encuentra la formación ideal para <em>tu próximo capítulo.</em>
        </h1>
        <p>
          Certificaciones completas y cercanas, diseñadas para llevarte de
          alumna curiosa a instructora segura.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="section course-list-section">
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Learning Methodology Strip */}
      <section className="learning-strip">
        <SectionTitle
          eyebrow="El método School Fitness"
          title="Educación rigurosa, atención personal."
        />
        <div className="benefit-grid">
          {benefits.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="section certification-info">
        <div>
          <span className="eyebrow">Qué incluye</span>
          <h2>Todo lo que necesitas para enseñar con confianza.</h2>
          <div className="certification-aval">
            <div className="aval-header">
              <Icon name="check" size={18} />
              <span>Aval Oficial y Valor Curricular</span>
            </div>
            <p>
              Curso respaldado por la{" "}
              <strong>
                Red Nacional de Normalización y Certificación de Estándares de
                Competencia Humana &quot;CONOCER&quot;
              </strong>{" "}
              y la <strong>Secretaría de Educación Pública (SEP)</strong>,
              otorgando valor curricular en todo México y Canadá.
            </p>
          </div>
        </div>
        <ul>
          {inclusions.map((item) => (
            <li key={item}>
              <Icon name="check" size={19} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
