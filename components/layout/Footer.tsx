import { Page } from "@/types"

interface FooterProps {
  goTo: (page: Page) => void
  navItems?: [Page, string][]
}

export function Footer({ goTo }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-center">
        <button
          className="logo"
          onClick={() => goTo("home")}
          aria-label="Inicio de School Fitness"
        >
          SCHOOL FITNESS<span>By Maggie Zarate</span>
        </button>
      </div>

      <div className="footer-bottom">
        <span>© 2025 School Fitness By Maggie Zarate</span>
        <div className="footer-social-links">
          <a
            href="https://www.instagram.com/school_fitness_bmz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Instagram de School Fitness"
            title="Instagram: @school_fitness_bmz"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/schoolfitnessbmz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Facebook de School Fitness"
            title="Facebook: School Fitness By Maggie Zarate"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <span>Creado para moverte con conciencia</span>
      </div>
    </footer>
  )
}
