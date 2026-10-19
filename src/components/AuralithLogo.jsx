export default function AuralithLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <polygon points="30,4 54,18 54,42 30,56 6,42 6,18" fill="#1fd48a" />
      <polygon points="30,4 54,18 30,30 6,18" fill="#7ff0c0" />
      <polygon points="30,30 54,18 54,42 30,56" fill="#12a76c" />
      <polygon points="30,30 6,18 6,42 30,56" fill="#0b6b4a" />
    </svg>
  )
}