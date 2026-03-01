import { NAV_LINKS } from '../../utils/constants'

export default function Footer({ footer }) {
  if (!footer) return null

  return (
    <footer className="bg-sedef-darkest border-t border-sedef-mid/20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo-white.png"
              alt="Restoran Sedef"
              className="h-16 w-auto object-contain object-left"
              width="128"
              height="64"
              loading="lazy"
            />
            <p className="font-garamond text-sm text-sedef-muted leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Col 2: Nav links */}
          <nav aria-label="Footer navigacija" className="flex flex-col gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted mb-2">
              Navigacija
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-lato text-sm text-sedef-light hover:text-sedef-lightest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Col 3: Contact info */}
          <address className="not-italic flex flex-col gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted mb-2">
              Kontakt
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${(footer.phone || '').replace(/\s/g, '')}`}
                className="font-lato text-sm text-sedef-light hover:text-sedef-lightest transition-colors"
              >
                {footer.phoneDisplay || footer.phone}
              </a>
              <a
                href={`mailto:${footer.email}`}
                className="font-lato text-sm text-sedef-light hover:text-sedef-lightest transition-colors"
              >
                {footer.email}
              </a>
              <span className="font-lato text-sm text-sedef-muted">
                {footer.address}
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="font-lato text-xs text-sedef-muted">
                Radno vreme: {footer.workingHours}
              </span>
              <span className="font-lato text-xs text-sedef-muted">
                Rezervacije: {footer.reservationHours}
              </span>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-sedef-mid/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-sedef-muted">
            &copy; {footer.copyright}
          </p>
          <a
            href={footer.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-xs text-sedef-muted hover:text-sedef-light transition-colors"
          >
            Prikaži na Google Maps →
          </a>
        </div>
      </div>
    </footer>
  )
}
