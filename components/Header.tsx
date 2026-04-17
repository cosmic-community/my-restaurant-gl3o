import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-bold font-serif text-primary-900">My Restaurant</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Menu
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Locations
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Reviews
            </Link>
          </nav>
          <Link
            href="/locations"
            className="hidden md:inline-block bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
          >
            Reserve
          </Link>
        </div>
        <nav className="md:hidden flex items-center justify-around py-3 border-t border-gray-100">
          <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">Home</Link>
          <Link href="/menu" className="text-sm text-gray-700 hover:text-primary-600">Menu</Link>
          <Link href="/locations" className="text-sm text-gray-700 hover:text-primary-600">Locations</Link>
          <Link href="/reviews" className="text-sm text-gray-700 hover:text-primary-600">Reviews</Link>
        </nav>
      </div>
    </header>
  )
}