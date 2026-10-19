import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-4xl font-semibold">Elythra Edufyi – Mini Project</h1>
      <Link to="/auralith" className="px-6 py-3 rounded-full bg-emerald-500 text-black font-medium">
        Open Auralith
      </Link>
      <Link to="/pelora" className="px-6 py-3 rounded-full bg-[#f3efe9] text-black font-medium">
        Open Pelora
      </Link>
    </div>
  )
}