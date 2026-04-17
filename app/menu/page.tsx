import { getMenuCategories, getMenuItems } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'
import { MenuItem } from '@/types'

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  const itemsByCategory: Record<string, MenuItem[]> = {}
  items.forEach((item) => {
    const categoryId = item.metadata?.category?.id || 'uncategorized'
    if (!itemsByCategory[categoryId]) {
      itemsByCategory[categoryId] = []
    }
    itemsByCategory[categoryId].push(item)
  })

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully crafted dishes using the finest seasonal ingredients
          </p>
        </div>

        {categories.length === 0 ? (
          <p className="text-center text-gray-600">No menu items available at this time.</p>
        ) : (
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryItems = itemsByCategory[category.id]
              if (!categoryItems || categoryItems.length === 0) return null

              return (
                <section key={category.id}>
                  <div className="mb-8 border-b-2 border-primary-200 pb-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-900">
                      {category.metadata?.name || category.title}
                    </h2>
                    {category.metadata?.description && (
                      <p className="text-gray-600 mt-2">{category.metadata.description}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}