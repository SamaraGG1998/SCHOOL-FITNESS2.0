import { Course } from "@/types"
import { Button } from "@/components/common/Button"
import { Icon } from "@/components/common/Icon"

interface CourseCardProps {
  course: Course
  addToCart: (course: Course) => void
}

export function CourseCard({ course, addToCart }: CourseCardProps) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img
          src={course.image}
          alt={`Estudiante de Pilates practicando para ${course.title}`}
          loading="lazy"
        />
        {course.tag && <span className="pill">{course.tag}</span>}
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span>{course.level}</span>
          <span>{course.format}</span>
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-footer">
          <strong>${course.price.toLocaleString()}</strong>
          <Button variant="text" onClick={() => addToCart(course)}>
            Agregar al carrito <Icon name="plus" size={17} />
          </Button>
        </div>
      </div>
    </article>
  )
}
