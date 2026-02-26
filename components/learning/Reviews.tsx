import { Star } from "lucide-react";

interface Review {
  id: string | number;
  user: string;
  date: string;
  rating: number;
  comment: string;
}

interface ReviewsViewProps {
  reviews: Review[];
}

export function ReviewsView({ reviews }: ReviewsViewProps) {
  return (
    <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
      {reviews.map((review: Review) => (
        <div
          key={review.id}
          className="p-4 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/30"
        >
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">
                {review.user.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-bold text-gray-900 truncate">
                  {review.user}
                </p>
                <p className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase">
                  {review.date}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 ${
                    i < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-[11px] md:text-sm text-gray-600 italic leading-relaxed">
            &quot;{review.comment}&quot;
          </p>
        </div>
      ))}
    </div>
  );
}
