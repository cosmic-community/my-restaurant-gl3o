import Link from 'next/link'
import { getMenuCategories, getMenuItems } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Menu Categories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our menu by category
          </p>
        </div>

        {categories.length === 0 ? (
          <p className="text-center text-gray-600">No categories available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const itemCount = items.filter(
                (item) => item.metadata?.category?.id === category.id
              ).length

              return (
                <Link
                  key={category.id}
                  href="/menu"
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
                >
                  <h2 className="text-2xl font-bold mb-3 font-serif text-primary-900">
                    {category.metadata?.name || category.title}
                  </h2>
                  {category.metadata?.description && (
                    <p className="text-gray-600 mb-4">{category.metadata.description}</p>
                  )}
                  <p className="text-primary-600 font-semibold">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}