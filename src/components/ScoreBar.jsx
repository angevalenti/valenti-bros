import Coin from './Coin'

const STATS = [
  { value: '240+', label: 'PROJECTS' },
  { value: '27', label: 'YEARS' },
  { value: '4.9★', label: 'AVG RATING' },
]

export default function ScoreBar() {
  return (
    <section className="bg-mario-black text-white px-6 py-4 flex items-center justify-between gap-4 flex-wrap border-b-3 border-mario-black">
      <div className="flex items-center gap-2.5">
        <Coin />
        <span className="font-pixel text-[9px] text-mario-gold">SCORE</span>
      </div>
      <div className="flex gap-7 flex-wrap">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-[28px] leading-none text-mario-gold">
              {stat.value}
            </div>
            <div className="font-pixel text-[9px] tracking-wider text-neutral-500 mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
