export function buildSchema(contact, location) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restoran Sedef",
    "description": "Restoran specijalizovan za organizaciju parastosa i pomen trpeza, smešten pored groblja Orlovača u Beogradu.",
    "servesCuisine": "Serbian",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location?.address || "Groblje Orlovača 28",
      "addressLocality": "Beograd",
      "addressRegion": "Rakovica",
      "postalCode": "11090",
      "addressCountry": "RS"
    },
    "telephone": contact?.phone || "",
    "email": contact?.email || "",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "hasMap": location?.mapDirectionsUrl || "",
    "image": "/images/exterior-01.jpg",
    "url": "https://www.restoran-sedef.rs"
  }
}
