import { Star } from "lucide-react";

export function ReviewsView({ reviews }: any) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {reviews.map((review: any) => (
        <div
          key={review.id}
          className="p-4 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                {review.user[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{review.user}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                  {review.date}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
            "{review.comment}"
          </p>
        </div>
      ))}
    </div>
  );
}
  