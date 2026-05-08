/**
 * Animated pixel coin — a small gold square that flips on its Y axis,
 * reading like a Mario coin spinning on edge.
 *
 * @param {object} props
 * @param {object} [props.style] Inline style override (e.g. animationDelay)
 * @param {string} [props.className] Extra Tailwind classes
 */
export default function Coin({ style, className = '' }) {
  return (
    <span
      aria-hidden
      className={`inline-block w-[14px] h-[14px] bg-mario-gold border-2 border-mario-black animate-coin-spin ${className}`}
      style={style}
    />
  )
}
