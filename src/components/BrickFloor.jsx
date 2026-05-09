export default function BrickFloor() {
  return (
    <div
      aria-hidden
      className="relative w-full h-7 border-t-3 border-b-3 border-mario-black overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            transparent calc(50% - 2px),
            rgba(0,0,0,0.35) calc(50% - 2px),
            rgba(0,0,0,0.35) calc(50% + 2px),
            transparent calc(50% + 2px)
          )
        `,
        backgroundColor: '#A05A2C',
      }}
    >
      <div
        className="absolute inset-0 h-1/2"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 4px, transparent 4px, transparent 60px)`,
        }}
      />
      <div
        className="absolute inset-0 top-1/2"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 4px, transparent 4px, transparent 60px)`,
          backgroundPosition: '30px 0',
        }}
      />
    </div>
  )
}
