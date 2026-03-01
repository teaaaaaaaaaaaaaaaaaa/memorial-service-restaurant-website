import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import MenuCard from '../ui/MenuCard'
import { useIntersection } from '../../hooks/useIntersection'

export default function Menu({ menus, extras }) {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, visible } = useIntersection()

  if (!menus || menus.length === 0) return null

  const activeMenu = menus[activeTab]

  return (
    <section
      id="meni"
      className="section-padding bg-sedef-dark"
      aria-labelledby="menu-heading"
    >
      <div className="section-container">
        <SectionHeading title="Meni" id="menu-heading" />

        {/* Tab switcher */}
        <div
          className="flex justify-center mb-12"
          role="tablist"
          aria-label="Izbor menija"
        >
          {menus.map((menu, index) => (
            <button
              key={menu.id}
              role="tab"
              aria-selected={index === activeTab}
              aria-controls={`menu-panel-${menu.id}`}
              id={`menu-tab-${menu.id}`}
              onClick={() => setActiveTab(index)}
              className={`
                font-lato text-sm tracking-widest uppercase px-8 py-4
                border-b-2 transition-all duration-300
                ${index === activeTab
                  ? 'border-sedef-lightest text-sedef-lightest'
                  : 'border-transparent text-sedef-muted hover:text-sedef-light hover:border-sedef-mid'
                }
              `}
            >
              {menu.name}
            </button>
          ))}
        </div>

        {/* Active menu panel */}
        <div
          ref={ref}
          id={`menu-panel-${activeMenu.id}`}
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeMenu.id}`}
          className={`
            max-w-2xl mx-auto
            bg-sedef-darkest/50 border border-sedef-mid/30 p-8 md:p-10
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Menu name */}
          <h3 className="font-playfair text-2xl text-sedef-lightest mb-8 text-center">
            {activeMenu.name}
          </h3>

          <MenuCard menu={activeMenu} />
        </div>

        {/* Extras / Dodaci */}
        {extras && extras.length > 0 && (
          <div className="max-w-2xl mx-auto mt-10">
            <div className="border border-sedef-mid/20 p-6 md:p-8 bg-sedef-darkest/30">
              <h3 className="font-lato text-xs tracking-widest uppercase text-sedef-muted mb-5 text-center">
                Dodaci
              </h3>
              <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
                {extras.map((extra) => (
                  <li key={extra.name} className="flex items-center gap-3">
                    <span className="font-garamond text-base text-sedef-light">
                      {extra.name}
                    </span>
                    <span className="font-lato text-xs text-sedef-muted">
                      – {extra.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-lato text-xs text-sedef-muted text-center mt-5">
                Za detalje o cenama i dostupnosti molimo Vas da nas kontaktirate telefonom.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
