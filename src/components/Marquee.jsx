const ANNOUNCEMENT =
  '★ WORLD 1-1  ·  LANCASTER COUNTY GENERAL CONTRACTOR  ·  LICENSED & INSURED  ·  EST. 1998  ·  NOW BOOKING 2026  ·  '

export default function Marquee() {
  // Render the announcement twice so the -50% translate creates a seamless loop.
  const content = ANNOUNCEMENT.repeat(3)
  return (
    <div className="bg-mario-black text-mario-gold py-2.5 overflow-hidden whitespace-nowrap border-b-3 border-mario-black">
      <div className="inline-block animate-marquee font-pixel text-[9px] tracking-wider">
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
      </div>
    </div>
  )
}
