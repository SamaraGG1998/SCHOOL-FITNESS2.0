/**
 * SCHOOL FITNESS - By Maggie Zarate
 * Script interactivo: Navegación, Carrito, Calendario, Galería, Blog, Contacto y Modal.
 * Todo el contenido está centralizado aquí para facilitar su edición manual.
 */

// =============================================================================
// CONFIGURACIÓN EDITABLE (Sin base de datos)
// =============================================================================

// Correo donde se recibirán los mensajes de contacto
const CONTACT_EMAIL = "hola@schoolfitness.com";

// Teléfono oficial de WhatsApp para apartado directo de fechas y sedes
const WHATSAPP_PHONE = "525540306124";

// Curso destacado para la ventana emergente (modal al cargar la página)
const PROMO_COURSE = {
  id: 1,
  badge: "⚡ Próximo Inicio",
  title: "Certificación Pilates Reformer Nivel 1",
  date: "15 de Mayo, 2025 · CDMX",
  modalidad: "Presencial intensivo + Campus virtual (80 hrs)",
  description: "Asegura tu lugar con precio de preventa especial y kit didáctico oficial incluido.",
  image: "images/CURSO2.JPG",
};

// Catálogo de Cursos (Hub de Cuadritos, Ficha Técnica PDF y Calendario Cronológico)
const COURSES = {
  1: {
    id: 1,
    shortName: "N1 Reformer",
    badge: "N1 Reformer · Fundamentos",
    title: "Certificación Pilates Reformer Nivel 1",
    category: "reformer",
    level: "Nivel 1 · Fundamentos Profesionales",
    format: "Presencial intensivo + Campus virtual",
    hours: "80 horas teórico-prácticas (con aval SEP/CONOCER)",
    price: 1295,
    deposit: "Aparta tu lugar con $1,500 MXN para congelar preventa",
    image: "images/CURSO2.JPG",
    citiesPreview: "CDMX · GDL · MTY · QRO · PUE",
    target: "Personas apasionadas por el movimiento, instructores de fitness/yoga/danza y profesionales de la salud que desean certificarse formalmente desde bases firmes.",
    requirements: "No se requiere experiencia previa como instructor. Se recomienda contar con práctica personal previa en Reformer.",
    summary: "Aprende el repertorio clásico y contemporáneo completo de Reformer N1. Biomecánica del carro y resortes, transiciones fluidas, adaptaciones posturales y práctica docente supervisada con aval oficial.",
    syllabus: [
      "Módulo 1 · Biomecánica del Reformer: resortes, barras, correas y protocolos de seguridad",
      "Módulo 2 · Anatomía funcional aplicada, respiración tridimensional y control de centro",
      "Módulo 3 · Repertorio completo de Nivel 1: Footwork, Hundred, Leg Circles, Stomach Massage y Short Box",
      "Módulo 4 · Indicaciones verbales (cueing), correcciones táctiles y prevención de lesiones",
      "Módulo 5 · Metodología de planeación: estructura de clases grupales y sesiones personalizadas",
      "Módulo 6 · Laboratorio docente: horas prácticas supervisadas y evaluación técnica",
    ],
    highlights: ["Aval oficial SEP · CONOCER", "Manual digital e impreso", "Prácticas supervisadas", "Comunidad permanente"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "15 al 18 de Mayo, 2025", sede: "Sede Roma Norte / Condesa", status: "Últimos 3 cupos" },
      { city: "Guadalajara (GDL)", dates: "06 al 08 de Junio, 2025", sede: "Sede Providencia / Zapopan", status: "Inscripciones abiertas" },
      { city: "Monterrey (MTY)", dates: "27 al 29 de Junio, 2025", sede: "Sede San Pedro Garza García", status: "Inscripciones abiertas" },
      { city: "Querétaro (QRO)", dates: "18 al 20 de Julio, 2025", sede: "Sede Juriquilla", status: "Preventa disponible" },
      { city: "Puebla (PUE)", dates: "08 al 10 de Agosto, 2025", sede: "Sede Angelópolis", status: "Preventa disponible" },
    ],
  },
  2: {
    id: 2,
    shortName: "N2 Reformer",
    badge: "N2 Reformer · Avanzado",
    title: "Certificación Pilates Reformer Nivel 2",
    category: "reformer",
    level: "Nivel 2 · Intermedio - Avanzado",
    format: "Presencial intensivo + Mentoría en vivo",
    hours: "60 horas teórico-prácticas (con aval SEP/CONOCER)",
    price: 1395,
    deposit: "Aparta tu lugar con $1,500 MXN para congelar preventa",
    image: "images/FOTO8.JPG",
    citiesPreview: "CDMX · GDL · MTY · MID",
    target: "Instructores graduados de Nivel 1 o profesionales con formación previa en Reformer que buscan elevar su técnica, enseñar transiciones avanzadas y manejar patologías complejas.",
    requirements: "Haber acreditado Reformer Nivel 1 o formación equivalente con horas de práctica comprobables.",
    summary: "Perfecciona transiciones de alta precisión, trabajo en bipedestación, suspensiones, resortes pesados/ligeros y entrenamiento atlético en Reformer con rigor biomecánico.",
    syllabus: [
      "Módulo 1 · Biomecánica avanzada: trabajo unilateral, desbalances y propiocepción",
      "Módulo 2 · Repertorio Intermedio-Avanzado: Long Spine, Snake, Twist, Tendon Stretch y Control Balance",
      "Módulo 3 · Modificaciones para atletas, bailarines y recuperación de lesiones específicas",
      "Módulo 4 · Ritmo, fluidez y musicalidad en sesiones dinámicas de alta demanda",
      "Módulo 5 · Evaluación biomecánica avanzada y diseño de progresiones individualizadas",
    ],
    highlights: ["Aval oficial SEP · CONOCER", "Repertorio atlético", "Mentorías de perfeccionamiento"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "20 al 22 de Junio, 2025", sede: "Sede Roma Norte / Condesa", status: "Inscripciones abiertas" },
      { city: "Guadalajara (GDL)", dates: "11 al 13 de Julio, 2025", sede: "Sede Providencia / Zapopan", status: "Inscripciones abiertas" },
      { city: "Monterrey (MTY)", dates: "15 al 17 de Agosto, 2025", sede: "Sede San Pedro Garza García", status: "Preventa abierta" },
      { city: "Mérida (MID)", dates: "29 al 31 de Agosto, 2025", sede: "Sede Altabrisa", status: "Próxima apertura" },
    ],
  },
  3: {
    id: 3,
    shortName: "Pilates SMT",
    badge: "Pilates SMT · Mat & Implementos",
    title: "Certificación Pilates SMT (Matwork, Biomecánica & Accesorios)",
    category: "mat",
    level: "Fundamentos & Técnica Universal",
    format: "12 semanas · Presencial + Campus Virtual",
    hours: "90 horas de formación integral (con aval SEP/CONOCER)",
    price: 695,
    deposit: "Aparta tu lugar con $1,000 MXN para reservar",
    image: "images/CURSO1.JPG",
    citiesPreview: "CDMX · GDL · MTY · PUE · QRO",
    target: "Quienes desean la base más pura del método: dominar el control del propio cuerpo en piso, aprender a impartir clases grupales masivas y dominar implementos como Magic Circle, foam roller y bandas.",
    requirements: "Sin requisitos previos obligatorios. Abierto a toda persona con deseo de certificarse formalmente.",
    summary: "La columna vertebral del método Pilates. Construye bases anatómicas impecables, repertorio clásico de Mat de Joseph Pilates y la integración de accesorios contemporáneos.",
    syllabus: [
      "Módulo 1 · Filosofía y principios clásicos del método Pilates",
      "Módulo 2 · Anatomía esquelética y muscular aplicada a la postura",
      "Módulo 3 · Repertorio completo de Mat: desde pre-Pilates hasta nivel avanzado",
      "Módulo 4 · Integración de accesorios: Magic Circle, mini ball, foam roller y ligas",
      "Módulo 5 · Dinámica de grupo: cómo mantener motivada y alineada una clase de 15+ personas",
      "Módulo 6 · Examen práctico y teórico con validez oficial",
    ],
    highlights: ["Aval oficial SEP · CONOCER", "Manual digital completo", "Enfoque para clases grupales"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "23 al 25 de Mayo, 2025", sede: "Sede Coyoacán / del Valle", status: "Inscripciones abiertas" },
      { city: "Guadalajara (GDL)", dates: "20 al 22 de Junio, 2025", sede: "Sede Chapultepec", status: "Inscripciones abiertas" },
      { city: "Puebla (PUE)", dates: "04 al 06 de Julio, 2025", sede: "Sede Centro Histórico / La Paz", status: "Preventa abierta" },
      { city: "Monterrey (MTY)", dates: "01 al 03 de Agosto, 2025", sede: "Sede Valle Oriente", status: "Inscripciones abiertas" },
    ],
  },
  4: {
    id: 4,
    shortName: "Barre",
    badge: "Barre School·Fitness",
    title: "Certificación en Barre School·Fitness",
    category: "barre",
    level: "Curso Intensivo Teórico-Práctico",
    format: "Presencial intensivo + Laboratorio coreográfico",
    hours: "50 horas teórico-prácticas (con aval SEP/CONOCER)",
    price: 695,
    deposit: "Aparta tu lugar con $1,000 MXN para reservar cupo",
    image: "images/FOTO10.JPG",
    citiesPreview: "CDMX · GDL · MTY · QRO · CANCÚN",
    target: "Instructoras y público general que desean una disciplina enérgica, elegante y altamente demandada. Si tu meta es impartir clases divertidas, seguras y quemagrasa, este es tu curso.",
    requirements: "Ganas de aprender y pasión por la música y el movimiento. No se requiere ser bailarina profesional.",
    summary: "Fusión de ballet, pilates e intervalos funcionales. Domina el trabajo isométrico en barra, alineación pélvica, conteo musical exacto y dinámicas que llenan salones.",
    syllabus: [
      "Módulo 1 · Fundamentos y biomecánica de la barra y colocación postural",
      "Módulo 2 · El trabajo isométrico: quema muscular, tempo y contracciones precisas",
      "Módulo 3 · Musicalidad: conteos en 8 tiempos, transiciones sobre el beat y energía vocal",
      "Módulo 4 · Uso de mancuernas ligeras, pelota suave, ligas de resistencia y sliders",
      "Módulo 5 · Laboratorio coreográfico: diseña tu secuencia de 50 minutos y dirígela en vivo",
    ],
    highlights: ["Abierto a todo público", "Aval oficial SEP · CONOCER", "Práctica en vivo frente a grupo"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "30 de Mayo al 01 de Junio, 2025", sede: "Sede Santa Fe / Polanco", status: "Últimos 4 cupos" },
      { city: "Guadalajara (GDL)", dates: "27 al 29 de Junio, 2025", sede: "Sede Puerta de Hierro", status: "Inscripciones abiertas" },
      { city: "Querétaro (QRO)", dates: "25 al 27 de Julio, 2025", sede: "Sede Álamos / Centro", status: "Preventa abierta" },
      { city: "Cancún (CUN)", dates: "15 al 17 de Agosto, 2025", sede: "Sede Zona Hotelera", status: "Próxima apertura" },
    ],
  },
  5: {
    id: 5,
    shortName: "Adultos Mayores",
    badge: "Adultos Mayores · Especialidad",
    title: "Acondicionamiento para Adultos Mayores & Poblaciones Especiales",
    category: "especialidad",
    level: "Especialización Terapéutica y Funcional",
    format: "Semipresencial · 6 semanas con talleres clínicos",
    hours: "60 horas académicas avaladas",
    price: 429,
    deposit: "Aparta tu lugar con $800 MXN para reservar",
    image: "images/FOTO7.JPG",
    citiesPreview: "CDMX · GDL · MTY · QRO",
    target: "Instructores, terapeutas físicos, gerontólogos y entrenadores que buscan especializarse en el segmento de mayor crecimiento demográfico con protocolos seguros y empáticos.",
    requirements: "Certificación básica previa en Mat, Reformer, Yoga o acondicionamiento físico.",
    summary: "Aprende a diseñar programas de movilidad articular, equilibrio, densidad ósea y prevención de caídas adaptados a personas mayores, osteoporosis y artrosis.",
    syllabus: [
      "Módulo 1 · Fisiología del envejecimiento y patologías comunes (osteoporosis, artritis, prótesis articulares)",
      "Módulo 2 · Protocolos de equilibrio, reflejos posturales y prevención activa de caídas",
      "Módulo 3 · Adaptaciones en Mat con silla, cojines propioceptivos y asistencia de bandas",
      "Módulo 4 · Trabajo en Reformer con resortes de asistencia suave y rangos articulares seguros",
      "Módulo 5 · Pedagogía de la empatía, psicología de la sesión y primeros auxilios de estudio",
    ],
    highlights: ["Salud funcional preventiva", "Adaptación multinivel", "Aval oficial SEP · CONOCER"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "06 al 08 de Junio, 2025", sede: "Sede San Jerónimo / del Valle", status: "Inscripciones abiertas" },
      { city: "Guadalajara (GDL)", dates: "04 al 06 de Julio, 2025", sede: "Sede Providencia", status: "Inscripciones abiertas" },
      { city: "Monterrey (MTY)", dates: "08 al 10 de Agosto, 2025", sede: "Sede San Jerónimo", status: "Preventa disponible" },
    ],
  },
  6: {
    id: 6,
    shortName: "Cadillac & Tower",
    badge: "Cadillac & Tower · Aparatos",
    title: "Certificación en Cadillac & Tower (Trapecio & Torre)",
    category: "aparatos",
    level: "Especialización en Aparatos de Estudio",
    format: "Presencial intensivo en estudio completo",
    hours: "70 horas teórico-prácticas (con aval SEP/CONOCER)",
    price: 995,
    deposit: "Aparta tu lugar con $1,500 MXN para reservar",
    image: "images/FOTO3.JPG",
    citiesPreview: "CDMX · GDL · MTY",
    target: "Instructores certificados en Reformer o Mat que buscan dominar la estación de trabajo más versátil y terapéutica del estudio: el Trapeze Table / Cadillac.",
    requirements: "Reformer Nivel 1 o Pilates Mat acreditado.",
    summary: "Domina el repertorio completo de barras push-through, roll-down, trapecio, resortes superiores y de piernas, para rehabilitación y acondicionamiento atlético.",
    syllabus: [
      "Módulo 1 · Seguridad y montaje de Cadillac: pernos, cadenas de seguridad y calibración de resortes",
      "Módulo 2 · Trabajo con Push-Through Bar: movilidad espinal, descompresión y fortalecimiento escapular",
      "Módulo 3 · Repertorio con Roll-Down Bar, trapecio superior y suspensiones acrobáticas",
      "Módulo 4 · Resortes de brazos y piernas: trabajo en cadenas cinéticas abiertas y cerradas",
      "Módulo 5 · Aplicaciones terapéuticas en hernias, escoliosis y acondicionamiento avanzado",
    ],
    highlights: ["Aval oficial SEP · CONOCER", "Aparatos clásicos completos", "Enfoque clínico y deportivo"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "11 al 13 de Julio, 2025", sede: "Sede Roma Norte / Condesa", status: "Inscripciones abiertas" },
      { city: "Monterrey (MTY)", dates: "22 al 24 de Agosto, 2025", sede: "Sede San Pedro Garza García", status: "Preventa abierta" },
    ],
  },
  7: {
    id: 7,
    shortName: "Chair & Barrel",
    badge: "Chair & Barrel · Aparatos",
    title: "Certificación en Wunda Chair & Ladder Barrel (con Spine Corrector)",
    category: "aparatos",
    level: "Avanzado & Fuerza Funcional",
    format: "Presencial intensivo en estudio completo",
    hours: "50 horas teórico-prácticas (con aval SEP/CONOCER)",
    price: 895,
    deposit: "Aparta tu lugar con $1,200 MXN para reservar",
    image: "images/FOTO4.JPG",
    citiesPreview: "CDMX · GDL · MTY",
    target: "Instructores que desean completar su titulación integral de aparatos de estudio y enriquecer sus entrenamientos con trabajo de fuerza vertical y extensión espinal.",
    requirements: "Reformer Nivel 1 o Pilates Mat acreditado.",
    summary: "La Wunda Chair desafía la fuerza del centro y el equilibrio con una base de sustentación reducida. El Ladder Barrel y Spine Corrector restauran la extensión y movilidad torácica.",
    syllabus: [
      "Módulo 1 · Biomecánica de los pedales y resortes de la Wunda Chair",
      "Módulo 2 · Repertorio de Chair: Footwork, Pumping, Going Up Front, Swan y Teaser",
      "Módulo 3 · Anatomía de la columna en el Ladder Barrel: flexión, extensión, inclinación y torsión",
      "Módulo 4 · Corrector espinal (Spine Corrector): secuencias correctivas y apertura torácica",
      "Módulo 5 · Integración en circuitos completos de estudio y evaluación técnica",
    ],
    highlights: ["Aval oficial SEP · CONOCER", "Trabajo tridimensional de columna", "Completitud de aparatos"],
    schedule: [
      { city: "Ciudad de México (CDMX)", dates: "25 al 27 de Julio, 2025", sede: "Sede Roma Norte / Condesa", status: "Inscripciones abiertas" },
      { city: "Guadalajara (GDL)", dates: "29 al 31 de Agosto, 2025", sede: "Sede Providencia", status: "Preventa abierta" },
    ],
  },
};

// Catálogo de Fotos de la Galería (Todas con el mismo tamaño en visualización)
const GALLERY_PHOTOS = [
  {
    id: 1,
    image: "images/IMG1.jpg",
    title: "Alineación y fluidez en el carro",
    caption: "Práctica guiada en Reformer con alineación consciente y respiración tridimensional.",
    category: "reformer",
    categoryLabel: "Reformer",
  },
  {
    id: 2,
    image: "images/FOTO16.jpg",
    title: "Aprender en tribu y crecer juntas",
    caption: "Comunidad de alumnas compartiendo reflexiones y correcciones tras la clase de estudio.",
    category: "studio",
    categoryLabel: "Comunidad",
  },
  {
    id: 3,
    image: "images/FOTO11.jpg",
    title: "Control del centro y respiración",
    caption: "Fundamentos y progresiones pedagógicas del repertorio clásico completo de Mat.",
    category: "mat",
    categoryLabel: "Mat",
  },
  {
    id: 4,
    image: "images/FOTO4.jpg",
    title: "Dominio de la máquina y seguridad",
    caption: "Ajuste de resortes, transiciones suaves y pedagogía de enseñanza en Reformer.",
    category: "reformer",
    categoryLabel: "Reformer",
  },
  {
    id: 5,
    image: "images/FOTO12.jpg",
    title: "Atención personal para cada instructora",
    caption: "Maggie Zarate guiando una sesión de mentoría individual con retroalimentación precisa.",
    category: "studio",
    categoryLabel: "Mentoría",
  },
  {
    id: 6,
    image: "images/FOTO3.jpg",
    title: "Espacios pensados para el bienestar",
    caption: "Estudio equipado con luz natural y materiales de primera calidad para moverte segura.",
    category: "studio",
    categoryLabel: "Estudio",
  },
  {
    id: 7,
    image: "images/FOTO6.jpg",
    title: "Acompañamiento consciente de la maternidad",
    caption: "Adaptaciones seguras y biomecánica especializada para etapas pre y postnatales.",
    category: "mat",
    categoryLabel: "Pre & Postnatal",
  },
  {
    id: 8,
    image: "images/FOTO14.jpg",
    title: "Enseñar desde el corazón y con ciencia",
    caption: "Nuestra fundadora en el estudio combinando rigor anatómico con calidez humana.",
    category: "studio",
    categoryLabel: "Vocación",
  },
  {
    id: 9,
    image: "images/FOTO10.jpg",
    title: "Fuerza, equilibrio y extensión",
    caption: "Trabajo de estabilidad lumbo-pélvica y movilidad de columna en plano sagital.",
    category: "mat",
    categoryLabel: "Movimiento",
  },
];

// =============================================================================
// ESTADO DEL CARRITO (Con persistencia en localStorage)
// =============================================================================
let cart = {};
try {
  const savedCart = localStorage.getItem("sf_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = {};
}

function saveCart() {
  try {
    localStorage.setItem("sf_cart", JSON.stringify(cart));
  } catch (e) {}
}

// =============================================================================
// NAVEGACIÓN ENTRE PESTAÑAS Y SECCIONES
// Solo Galería y Testimonios son páginas aparte; las demás viven en la principal.
// =============================================================================
function goTo(pageId) {
  const standalonePages = ["gallery", "testimonials"];
  const isStandalone = standalonePages.includes(pageId);

  // Mapeo a las secciones de la página principal
  const sectionMap = {
    home: null,
    courses: "courses-hub",
    calendar: "calendar-section",
    about: "about-section",
    contact: "contact-section",
  };

  if (isStandalone) {
    // Si es Galería o Testimonios: mostrar su página independiente
    window.location.hash = `/${pageId}`;

    document.querySelectorAll(".page-view").forEach((view) => {
      view.classList.remove("active");
    });
    const currentView = document.getElementById(`page-${pageId}`);
    if (currentView) {
      currentView.classList.add("active");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Es una sección de la página principal
    const validSections = ["home", "courses", "calendar", "about", "contact"];
    const targetSection = validSections.includes(pageId) ? pageId : "home";

    window.location.hash = targetSection === "home" ? "/home" : `/${targetSection}`;

    document.querySelectorAll(".page-view").forEach((view) => {
      view.classList.remove("active");
    });
    const homeView = document.getElementById("page-home");
    if (homeView) {
      homeView.classList.add("active");
    }

    const targetSectionId = sectionMap[targetSection];
    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 70);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Actualizar estado 'active' en los botones de navegación
  document.querySelectorAll(".site-header nav button[data-page]").forEach((btn) => {
    if (btn.getAttribute("data-page") === pageId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Cerrar menú móvil si está abierto al seleccionar cualquier opción
  const navEl = document.getElementById("main-nav");
  const menuBtnEl = document.getElementById("menu-toggle-btn");
  const headerEl = document.querySelector(".site-header");
  if (navEl && navEl.classList.contains("mobile-open")) {
    navEl.classList.remove("mobile-open");
    if (menuBtnEl) {
      menuBtnEl.setAttribute("aria-expanded", "false");
      menuBtnEl.classList.remove("is-active");
    }
    if (headerEl) {
      headerEl.classList.remove("has-mobile-open");
    }
  }

  // Resaltar 'Comunidad' si alguna subpágina está activa y cerrar dropdown
  const communityDropdown = document.getElementById("nav-comunidad");
  if (communityDropdown) {
    communityDropdown.classList.remove("open");
    const trigger = communityDropdown.querySelector(".nav-dropdown-trigger");
    if (trigger) {
      trigger.classList.toggle("active", isStandalone);
      trigger.setAttribute("aria-expanded", "false");
    }
  }

  // Quitar el foco del elemento activo para que :focus-within no mantenga abierto el dropdown
  if (document.activeElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }

  // En páginas interiores (Galería, Testimonios), el header tiene fondo blanco de alto contraste
  const siteHeaderEl = document.querySelector(".site-header");
  if (siteHeaderEl) {
    if (isStandalone || window.scrollY > 40) {
      siteHeaderEl.classList.add("scrolled");
    } else {
      siteHeaderEl.classList.remove("scrolled");
    }
  }

  // Cerrar menú móvil si está abierto y actualizar aria-expanded
  const nav = document.getElementById("main-nav");
  if (nav) {
    nav.classList.remove("mobile-open");
  }
  const menuBtn = document.getElementById("menu-toggle-btn");
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

// Scroll spy para actualizar la pestaña activa según la sección visible en Home
function setupScrollSpy() {
  const sections = [
    { id: "hero", page: "home" },
    { id: "brand-essence", page: "home" },
    { id: "courses-hub", page: "courses" },
    { id: "calendar-section", page: "calendar" },
    { id: "about-section", page: "about" },
    { id: "contact-section", page: "contact" },
  ];

  window.addEventListener(
    "scroll",
    () => {
      const homeView = document.getElementById("page-home");
      if (!homeView || !homeView.classList.contains("active")) return;

      const scrollPos = window.scrollY + 180;
      let activePage = "home";

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          activePage = sec.page;
        }
      }

      document.querySelectorAll(".site-header nav button[data-page]").forEach((btn) => {
        if (btn.getAttribute("data-page") === activePage) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    },
    { passive: true }
  );
}

// Escuchar cambios de hash en la URL
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#/", "").replace("#", "");
  goTo(hash || "home");
});

// Menú móvil con actualización de aria-expanded y animación
function toggleMobileMenu() {
  const nav = document.getElementById("main-nav");
  const menuBtn = document.getElementById("menu-toggle-btn");
  const header = document.querySelector(".site-header");
  if (nav) {
    const isOpen = nav.classList.toggle("mobile-open");
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuBtn.classList.toggle("is-active", isOpen);
    }
    if (header) {
      header.classList.toggle("has-mobile-open", isOpen);
    }
  }
}

// Dropdown de Comunidad
function toggleNavDropdown(triggerBtn) {
  const dropdown = triggerBtn ? triggerBtn.closest(".nav-dropdown") : null;
  if (!dropdown) return;
  const isOpen = dropdown.classList.toggle("open");
  triggerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// Cerrar dropdown si se hace clic fuera
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("nav-comunidad");
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    const trigger = dropdown.querySelector(".nav-dropdown-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }
});

// =============================================================================
// ACCESIBILIDAD: GESTIÓN Y ATRAPADO DE FOCO (FOCUS TRAP PARA MODALES/DRAWER)
// =============================================================================
let activeDialogContainer = null;
let lastFocusedBeforeDialog = null;

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.offsetParent !== null || getComputedStyle(el).position === "fixed");
}

function handleDialogTabKey(e) {
  if (e.key !== "Tab" || !activeDialogContainer) return;
  const focusables = getFocusableElements(activeDialogContainer);
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first || !activeDialogContainer.contains(document.activeElement)) {
      e.preventDefault();
      last.focus();
    }
  } else if (document.activeElement === last || !activeDialogContainer.contains(document.activeElement)) {
    e.preventDefault();
    first.focus();
  }
}

function activateDialogFocus(containerEl) {
  if (!containerEl) return;
  lastFocusedBeforeDialog = document.activeElement;
  activeDialogContainer = containerEl;
  document.addEventListener("keydown", handleDialogTabKey);

  requestAnimationFrame(() => {
    const focusables = getFocusableElements(containerEl);
    if (focusables.length > 0) {
      focusables[0].focus();
    }
  });
}

function releaseDialogFocus(targetContainer) {
  if (targetContainer && activeDialogContainer !== targetContainer) return;
  document.removeEventListener("keydown", handleDialogTabKey);
  activeDialogContainer = null;
  if (lastFocusedBeforeDialog && typeof lastFocusedBeforeDialog.focus === "function") {
    lastFocusedBeforeDialog.focus();
  }
  lastFocusedBeforeDialog = null;
}

// =============================================================================
// CARRITO DE COMPRAS
// =============================================================================
function openCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.add("show");
  if (drawer) {
    drawer.classList.add("open");
    activateDialogFocus(drawer);
  }
}

function closeCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.remove("show");
  if (drawer && drawer.classList.contains("open")) {
    drawer.classList.remove("open");
    releaseDialogFocus(drawer);
  }
}

function addToCart(courseId) {
  cart[courseId] = (cart[courseId] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
}

function updateQuantity(courseId, delta) {
  if (cart[courseId]) {
    cart[courseId] += delta;
    if (cart[courseId] <= 0) {
      delete cart[courseId];
    }
    saveCart();
    renderCart();
  }
}

function renderCart() {
  const cartBody = document.getElementById("cart-body");
  const cartFooter = document.getElementById("cart-footer");
  const cartBadge = document.getElementById("cart-count-badge");

  const itemIds = Object.keys(cart).map(Number);
  const totalCount = itemIds.reduce((sum, id) => sum + (cart[id] || 0), 0);

  // Actualizar badge del carrito
  if (cartBadge) {
    if (totalCount > 0) {
      cartBadge.style.display = "grid";
      cartBadge.textContent = totalCount;
    } else {
      cartBadge.style.display = "none";
    }
  }

  if (itemIds.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-cart">
        <span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8h12l-1 12H7L6 8Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
        </span>
        <h3>Tu carrito está vacío.</h3>
        <p>Elige una certificación y comienza tu próximo capítulo.</p>
        <button class="btn btn-light" onclick="closeCart(); goTo('courses');">
          Ver certificaciones
        </button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = "none";
    return;
  }

  let subtotal = 0;
  let itemsHtml = "";

  itemIds.forEach((id) => {
    const course = COURSES[id];
    if (!course) return;
    const quantity = cart[id];
    subtotal += course.price * quantity;

    itemsHtml += `
      <div class="cart-item">
        <img src="${course.image}" alt="${course.title}" />
        <div>
          <span>${course.level}</span>
          <h3>${course.title}</h3>
          <strong>$${course.price.toLocaleString()}</strong>
          <div class="quantity">
            <button onclick="updateQuantity(${course.id}, -1)" aria-label="Disminuir un curso">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 12h12" /></svg>
            </button>
            <span>${quantity}</span>
            <button onclick="updateQuantity(${course.id}, 1)" aria-label="Aumentar un curso">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 6v12" /><path d="M6 12h12" /></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  cartBody.innerHTML = itemsHtml;

  if (cartFooter) {
    cartFooter.style.display = "block";
    cartFooter.innerHTML = `
      <div>
        <span>Subtotal</span>
        <strong>$${subtotal.toLocaleString()}</strong>
      </div>
      <p>Planes de pago disponibles al finalizar la compra.</p>
      <button class="btn btn-dark checkout-button" onclick="checkout()">
        Finalizar compra
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></svg>
      </button>
    `;
  }
}

function checkout() {
  alert("¡Tu pago seguro está listo! Puedes contactarnos directamente o coordinar tu transferencia en la sección de Contacto.");
}

// =============================================================================
// FILTROS DE CALENDARIO
// =============================================================================
function filterCalendar(category, btnElement) {
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const cards = document.querySelectorAll(".calendar-card");
  cards.forEach((card) => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
}
// =============================================================================
// FILTROS DE CERTIFICACIONES
// =============================================================================
function filterCertifications(category, btnElement) {
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const cards = document.querySelectorAll("#page-courses .course-card");
  cards.forEach((card) => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
// =============================================================================
// FILTROS DE GALERÍA & VISOR INTERACTIVO CON FLECHAS
// =============================================================================
let currentGalleryIndex = 0;
let currentGalleryFilter = "all";
let touchStartX = 0;
let touchEndX = 0;

function getFilteredGallery() {
  if (currentGalleryFilter === "all") {
    return GALLERY_PHOTOS;
  }
  return GALLERY_PHOTOS.filter((item) => item.category === currentGalleryFilter);
}

function filterGallery(category, btnElement) {
  currentGalleryFilter = category;
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    const itemCat = item.getAttribute("data-category");
    if (category === "all" || itemCat === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  const countTag = document.getElementById("gallery-counter-tag");
  if (countTag) {
    const count = getFilteredGallery().length;
    countTag.textContent = `Mostrando ${count} fotografías`;
  }
}

function openGalleryPhoto(indexInFiltered) {
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = Math.max(0, Math.min(indexInFiltered, list.length - 1));
  updateGalleryLightbox();

  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    activateDialogFocus(modal);
  }
}

// Mantener compatibilidad hacia atrás
function openLightbox(imageSrc, caption) {
  const list = getFilteredGallery();
  const foundIdx = list.findIndex((item) => item.image === imageSrc);
  if (foundIdx !== -1) {
    openGalleryPhoto(foundIdx);
  } else {
    openGalleryPhoto(0);
  }
}

function updateGalleryLightbox() {
  const list = getFilteredGallery();
  if (list.length === 0) return;
  const item = list[currentGalleryIndex];

  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  const mobileCounter = document.getElementById("lightbox-mobile-counter");
  const cat = document.getElementById("lightbox-cat");
  const title = document.getElementById("lightbox-title");
  const cap = document.getElementById("lightbox-caption");

  if (img) {
    img.style.opacity = "0.3";
    setTimeout(() => {
      img.src = item.image;
      img.alt = item.title;
      img.style.opacity = "1";
    }, 120);
  }

  const counterText = `${currentGalleryIndex + 1} / ${list.length}`;
  if (counter) counter.textContent = counterText;
  if (mobileCounter) mobileCounter.textContent = counterText;
  if (cat) cat.textContent = item.categoryLabel;
  if (title) title.textContent = item.title;
  if (cap) cap.textContent = item.caption;
}

function nextGalleryPhoto(event) {
  if (event) event.stopPropagation();
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = (currentGalleryIndex + 1) % list.length;
  updateGalleryLightbox();
}

function prevGalleryPhoto(event) {
  if (event) event.stopPropagation();
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = (currentGalleryIndex - 1 + list.length) % list.length;
  updateGalleryLightbox();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    releaseDialogFocus(modal);
  }
}

// Control táctil para celulares (Deslizar con el dedo / Swipe)
function setupGalleryTouchGestures() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  modal.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (diff < -45) {
        // Deslizar izquierda -> Siguiente
        nextGalleryPhoto();
      } else if (diff > 45) {
        // Deslizar derecha -> Anterior
        prevGalleryPhoto();
      }
    },
    { passive: true }
  );
}


// =============================================================================
// FORMULARIO DE CONTACTO
// =============================================================================
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contact-name")?.value.trim() || "";
  const email = document.getElementById("contact-email")?.value.trim() || "";
  const phone = document.getElementById("contact-phone")?.value.trim() || "";
  const interest = document.getElementById("contact-interest")?.value || "Consulta General";
  const message = document.getElementById("contact-message")?.value.trim() || "";

  // Crear enlace mailto con datos codificados
  const subject = encodeURIComponent(`Nuevo contacto desde la web: ${interest} - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\n` +
    `Email: ${email}\n` +
    `Teléfono / WhatsApp: ${phone}\n` +
    `Interés: ${interest}\n\n` +
    `Mensaje:\n${message}\n`
  );

  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  // Mostrar alerta visual de éxito
  const alertBox = document.getElementById("contact-success-alert");
  if (alertBox) {
    alertBox.style.display = "block";
    alertBox.innerHTML = `
      <strong>¡Gracias, ${name}!</strong> Tu mensaje ha sido preparado. Si tu cliente de correo no se abrió automáticamente, 
      puedes escribirnos directamente a <a href="mailto:${CONTACT_EMAIL}" style="text-decoration: underline; font-weight: 600;">${CONTACT_EMAIL}</a>.
    `;
  }

  // Abrir cliente de correo
  window.location.href = mailtoLink;

  // Limpiar formulario tras unos segundos
  const form = document.getElementById("contact-form");
  if (form) form.reset();
}

// =============================================================================
// VENTANA EMERGENTE NO INTRUSIVA (MODAL DE PRÓXIMO CURSO)
// =============================================================================
function checkAndOpenPromoModal() {
  try {
    const isDismissed = sessionStorage.getItem("sf_promo_dismissed");
    if (isDismissed === "true") {
      return;
    }
  } catch (e) {}

  let triggered = false;
  const tryOpenPromo = () => {
    if (triggered) return;
    try {
      if (sessionStorage.getItem("sf_promo_dismissed") === "true") return;
    } catch (e) {}

    const homeActive = document.getElementById("page-home")?.classList.contains("active");
    const backdrop = document.getElementById("promo-modal-backdrop");
    const syllabusOpen = document.getElementById("syllabus-modal")?.classList.contains("open");
    const cartOpen = document.getElementById("cart-drawer")?.classList.contains("open");

    if (backdrop && homeActive && !syllabusOpen && !cartOpen && !activeDialogContainer) {
      triggered = true;
      backdrop.classList.add("active");
      activateDialogFocus(backdrop);
      window.removeEventListener("scroll", onScrollOpenPromo);
    }
  };

  // Esperar a que el usuario recorra el inicio (> 360px) o permanezca 12s
  const onScrollOpenPromo = () => {
    if (window.scrollY > 360) {
      tryOpenPromo();
    }
  };

  window.addEventListener("scroll", onScrollOpenPromo, { passive: true });
  setTimeout(tryOpenPromo, 12000);
}

function closePromoModal() {
  const backdrop = document.getElementById("promo-modal-backdrop");
  if (backdrop && backdrop.classList.contains("active")) {
    backdrop.classList.remove("active");
    releaseDialogFocus(backdrop);
  }
  try {
    sessionStorage.setItem("sf_promo_dismissed", "true");
  } catch (e) {}
}

function acceptPromoModal() {
  closePromoModal();
  openCourseSyllabus(PROMO_COURSE.id);
}

// =============================================================================
// MODAL DE TEMARIO Y DETALLES DE CERTIFICACIÓN (FICHA TÉCNICA PDF + CRONOGRAMA)
// =============================================================================
function openCourseSyllabus(courseId) {
  const course = COURSES[courseId];
  if (!course) return;

  const modal = document.getElementById("syllabus-modal");
  const levelEl = document.getElementById("syllabus-modal-level");
  const titleEl = document.getElementById("syllabus-modal-title");
  const metaEl = document.getElementById("syllabus-modal-meta");
  const summaryEl = document.getElementById("syllabus-modal-summary");
  const highlightsEl = document.getElementById("syllabus-modal-highlights");
  const listEl = document.getElementById("syllabus-modal-list");
  const targetEl = document.getElementById("syllabus-modal-target");
  const reqEl = document.getElementById("syllabus-modal-requirements");
  const hoursEl = document.getElementById("syllabus-modal-hours");
  const depositEl = document.getElementById("syllabus-modal-deposit");
  const scheduleEl = document.getElementById("syllabus-modal-schedule");
  const waBtn = document.getElementById("syllabus-modal-wa-btn");
  const addBtn = document.getElementById("syllabus-modal-add-btn");

  if (levelEl) levelEl.textContent = course.level || "Certificación Oficial";
  if (titleEl) titleEl.textContent = course.title;
  if (metaEl) {
    metaEl.textContent = `${course.format} · Inversión: $${course.price.toLocaleString()} USD (Facilidades y mensualidades disponibles)`;
  }
  if (summaryEl) summaryEl.textContent = course.summary || "";

  if (highlightsEl) {
    highlightsEl.innerHTML = (course.highlights || [])
      .map((item) => `<span>✦ ${item}</span>`)
      .join("");
  }

  if (targetEl) targetEl.textContent = course.target || "Público general e instructores en activo.";
  if (reqEl) reqEl.textContent = course.requirements || "Sin requisitos previos obligatorios.";
  if (hoursEl) hoursEl.textContent = course.hours || `${course.format} (con aval oficial SEP-CONOCER)`;
  if (depositEl) depositEl.textContent = course.deposit || "Aparta tu lugar con anticipo preferencial.";

  // Renderizar cronograma cronológico de sedes y fechas por ciudad
  if (scheduleEl) {
    if (course.schedule && course.schedule.length > 0) {
      scheduleEl.innerHTML = course.schedule
        .map((item) => {
          const waText = encodeURIComponent(
            `Hola School Fitness, deseo apartar mi lugar para la ${course.title} en la sede ${item.city} (${item.dates}). ¿Me podrían brindar detalles de inscripción?`
          );
          return `
            <div class="schedule-row">
              <div class="schedule-city-info">
                <strong>📍 ${item.city}</strong>
                <span>📅 ${item.dates} · ${item.sede}</span>
              </div>
              <div class="schedule-row-actions">
                <span class="schedule-status-badge">${item.status}</span>
                <a href="https://wa.me/${WHATSAPP_PHONE}?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-schedule-book">
                  Apartar cupo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></svg>
                </a>
              </div>
            </div>
          `;
        })
        .join("");
    } else {
      scheduleEl.innerHTML = `
        <div class="schedule-row">
          <div class="schedule-city-info">
            <strong>📍 Próximas sedes en confirmación</strong>
            <span>Consulta fechas personalizadas en tu ciudad vía WhatsApp</span>
          </div>
        </div>
      `;
    }
  }

  if (listEl) {
    listEl.innerHTML = (course.syllabus || [])
      .map((mod) => `<li>${mod}</li>`)
      .join("");
  }

  if (waBtn) {
    const defaultWaText = encodeURIComponent(
      `Hola School Fitness, solicito información completa para inscribirme a la ${course.title}. ¿Cuáles son las fechas disponibles y facilidades de pago?`
    );
    waBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${defaultWaText}`;
  }

  if (addBtn) {
    addBtn.onclick = () => {
      closeCourseSyllabus();
      addToCart(course.id);
    };
  }

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    activateDialogFocus(modal);
  }
}

function closeCourseSyllabus() {
  const modal = document.getElementById("syllabus-modal");
  if (modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    releaseDialogFocus(modal);
  }
}

// =============================================================================
// COPIAR CLABE INTERBANCARIA
// =============================================================================
function copyClabe(clabe, btnElement) {
  const showCopiedFeedback = () => {
    if (!btnElement) return;
    const span = btnElement.querySelector("span") || btnElement;
    const originalText = span.textContent;
    span.textContent = "¡Copiada!";
    btnElement.classList.add("copied");
    setTimeout(() => {
      span.textContent = originalText;
      btnElement.classList.remove("copied");
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(clabe).then(showCopiedFeedback).catch(() => {
      fallbackCopyText(clabe);
      showCopiedFeedback();
    });
  } else {
    fallbackCopyText(clabe);
    showCopiedFeedback();
  }
}

function copyClabeToClipboard(clabe, btnElement) {
  copyClabe(clabe, btnElement);
}

function fallbackCopyText(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  document.body.removeChild(tempInput);
}

// =============================================================================
// INICIALIZACIÓN GENERAL
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  const hash = window.location.hash.replace("#/", "").replace("#", "");
  goTo(hash || "home");

  // Efecto Header Scrolled (estilo Ome Motion: transparente sobre hero, blanco escarchado al scrollear)
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const handleScrollHeader = () => {
      const currentHash = window.location.hash.replace("#/", "").replace("#", "");
      const isInner = ["gallery", "testimonials"].includes(currentHash);
      if (window.scrollY > 40 || isInner) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScrollHeader, { passive: true });
    handleScrollHeader();
  }

  checkAndOpenPromoModal();
  setupGalleryTouchGestures();
  setupScrollSpy();

  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox-modal");
    const isLightboxOpen = lightbox && lightbox.classList.contains("open");

    if (e.key === "Escape") {
      closePromoModal();
      closeLightbox();
      closeCourseSyllabus();
      closeCart();
    } else if (isLightboxOpen) {
      if (e.key === "ArrowRight") {
        nextGalleryPhoto();
      } else if (e.key === "ArrowLeft") {
        prevGalleryPhoto();
      }
    }
  });
});

// Acordeón de Preguntas Frecuentes (FAQ)
function toggleFaq(btn) {
  const item = btn ? btn.closest(".faq-item") : null;
  if (!item) return;
  const isOpen = item.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

