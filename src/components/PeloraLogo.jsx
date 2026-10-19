export default function PeloraLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <rect x="4" y="8" width="20" height="44" rx="10" fill="#1f3a3f" />
      <circle cx="40" cy="30" r="16" fill="#9cc4b4" />
      <path d="M40 20 L42.5 27.5 L50 30 L42.5 32.5 L40 40 L37.5 32.5 L30 30 L37.5 27.5 Z" fill="#f3efe9" />
    </svg>
  )
}