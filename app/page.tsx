import Link from 'next/link'
import { getFeaturedMenuItems, getLocations, getReviews } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'
import ReviewCard from '@/components/ReviewCard'
import LocationCard from '@/components/LocationCard'

export default async function HomePage() {
  const [featuredItems, locations, reviews] = await Promise.all([
    getFeaturedMenuItems(),
    getLocations(),
    getReviews(),
  ])

  const topReviews = reviews.slice(0, 3)
  const topLocations = locations.slice(0, 2)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&h=1200&fit=crop&auto=format,compress"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">My Restaurant</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            An unforgettable dining experience crafted with passion and the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white/30"
            >
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      {featuredItems.length > 0 && (
        <section className="py-20 bg-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured Dishes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our chef's most beloved creations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations */}
      {topLocations.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Locations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit us at one of our beautiful locations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topLocations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
            {locations.length > 2 && (
              <div className="text-center mt-12">
                <Link
                  href="/locations"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Locations
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Reviews */}
      {topReviews.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">What Our Guests Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read reviews from our valued customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/reviews"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Read All Reviews
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}