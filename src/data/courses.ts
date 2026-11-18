import { Course } from "@/types"
import curso1Img from "@/imports/CURSO1.JPG"
import curso2Img from "@/imports/CURSO2.JPG"
import curso3Img from "@/imports/CURSO3.JPG"
import heroImg from "@/imports/IMG1.jpg"
import communityImg from "@/imports/IMG2.jpg"
import roxanaImg from "@/imports/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"

export const sitePhotos = {
  hero: heroImg,
  community: communityImg,
  lifestyle: roxanaImg,
  unsplashBackup: {
    hero: "https://images.unsplash.com/photo-1747239685045-fcbcf98985db?auto=format&fit=crop&w=1600&q=85",
    community: "https://images.unsplash.com/photo-1649884213944-52c27f2bbcc9?auto=format&fit=crop&w=1400&q=85",
  },
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Certificación en Pilates Mat",
    level: "Fundamentos",
    format: "12 semanas · En línea",
    price: 695,
    description:
      "Construye bases sólidas para enseñar anatomía, indicaciones, programación y el repertorio clásico completo de mat.",
    image: curso1Img,
    tag: "La más elegida",
  },
  {
    id: 2,
    title: "Formación de Instructor Reformer",
    level: "Profesional",
    format: "16 semanas · Híbrido",
    price: 1295,
    description:
      "Domina una enseñanza segura e inteligente de reformer con práctica guiada, mentorías en vivo y horas de clase supervisadas.",
    image: curso2Img,
    tag: "Próximo grupo: mayo",
  },
  {
    id: 3,
    title: "Pilates Pre y Postnatal",
    level: "Especialización",
    format: "6 semanas · En línea",
    price: 449,
    description:
      "Acompaña cada etapa de la maternidad con movimiento basado en evidencia, adaptaciones conscientes y plena confianza.",
    image: curso3Img,
  },
]
