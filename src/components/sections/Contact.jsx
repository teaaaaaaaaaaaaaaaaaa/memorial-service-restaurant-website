import SectionHeading from '../ui/SectionHeading'
import { useIntersection } from '../../hooks/useIntersection'

export default function Contact({ contact }) {
  const { ref, visible } = useIntersection()

  if (!contact) return null

  return (
    <section
      id="kontakt"
      className="section-padding bg-sedef-darkest"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <SectionHeading
          title={contact.title || 'Kontakt'}
          subtitle="Sva pitanja i rezervacije primamo telefonom"
          id="contact-heading"
        />

        <div
          ref={ref}
          className={`
            max-w-lg mx-auto text-center flex flex-col items-center gap-8
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted">
              Telefon za rezervacije
            </span>
            <a
              href={`tel:${(contact.phone || '').replace(/\s/g, '')}`}
              className="font-playfair text-4xl md:text-5xl text-sedef-lightest hover:text-sedef-light transition-colors"
            >
              {contact.phoneDisplay || contact.phone}
            </a>
            <span className="font-lato text-sm text-sedef-muted">
              Rezervacije: {contact.reservationHours}
            </span>
            <span className="font-lato text-sm text-sedef-muted">
              Radno vreme: {contact.workingHours}
            </span>
          </div>

          <div className="w-12 h-px bg-sedef-mid/50" aria-hidden="true" />

          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="font-garamond text-xl text-sedef-light hover:text-sedef-lightest transition-colors"
            >
              {contact.email}
            </a>
          </div>

          <div className="w-12 h-px bg-sedef-mid/50" aria-hidden="true" />

          {/* Large CTA */}
          <a
            href={`tel:${(contact.phone || '').replace(/\s/g, '')}`}
            className="btn-primary text-base tracking-widest uppercase mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            Pozovite za rezervaciju
          </a>
        </div>
      </div>
    </section>
  )
}
