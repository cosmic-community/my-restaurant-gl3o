import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (r.metadata?.rating || 0), 0) / reviews.length
    : 0

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Customer Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            See what our guests are saying
          </p>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${
                      star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {averageRating.toFixed(1)} out of 5
              </span>
              <span className="text-gray-600">({reviews.length} reviews)</span>
            </div>
          )}
        </div>

        {reviews.length === 0 ? (
          <p className="text-center text-gray-600">No reviews available at this time.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}