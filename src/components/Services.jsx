const SERVICES = [
  {
    accentClass: 'bg-mario-red',
    title: 'CUSTOM HOMES',
    desc: 'Ground-up builds with architect-grade detail and zero corner-cutting.',
    starred: false,
  },
  {
    accentClass: 'bg-mario-blue',
    title: 'ADDITIONS',
    desc: 'More square footage. Same character. Seamless tie-in to existing structure.',
    starred: false,
  },
  {
    accentClass: 'bg-mario-green',
    title: 'RENOVATIONS',
    desc: 'Kitchens, baths, full gut-jobs. The thing you actually want to live in.',
    starred: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-9 px-6 bg-mario-gray">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-mario-gold border-3 border-mario-black w-9 h-9 flex items-center justify-center font-pixel text-base shadow-block-sm">
          ?
        </div>
        <h2 className="font-display text-[22px] m-0">PICK YOUR POWER-UP</h2>
      </div>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
      >
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="relative bg-white border-3 border-mario-black shadow-block p-5 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-block-lg"
          >
            {service.starred && (
              <div className="absolute -top-2.5 -right-2.5 bg-mario-green text-white border-3 border-mario-black px-2 py-1 font-pixel text-[8px] shadow-block-sm">
                ★ STAR
              </div>
            )}
            <div className={`${service.accentClass} border-3 border-mario-black w-9 h-9 mb-3.5`} />
            <h3 className="font-display text-base m-0 mb-1.5">{service.title}</h3>
            <p className="text-[13px] leading-snug m-0">{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
