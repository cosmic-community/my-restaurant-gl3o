import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Our Locations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your nearest location and make a reservation
          </p>
        </div>

        {locations.length === 0 ? (
          <p className="text-center text-gray-600">No locations available at this time.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}