export default function SkeletonProjectDetail() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-4 rounded bg-linear-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
      {/* Image */}
      <div className="h-[50vh] w-full bg-white/10 rounded-2xl mb-8" />

      {/* Title */}
      <div className="h-8 w-1/2 bg-white/10 rounded mb-4" />

      {/* Description */}
      <div className="space-y-3 mb-8">
        <div className="h-4 bg-white/10 rounded" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
        <div className="h-4 bg-white/10 rounded w-4/6" />
      </div>

      {/* Tech Stack */}
      <div className="flex gap-3 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-8 w-20 bg-white/10 rounded-full"
          />
        ))}
      </div>

      {/* Detail Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="h-72 bg-white/10 rounded-2xl" />
        <div className="space-y-3">
          <div className="h-6 bg-white/10 rounded w-1/2" />
          <div className="h-4 bg-white/10 rounded" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
          <div className="h-4 bg-white/10 rounded w-4/6" />
        </div>
      </div>

    </div>
  );
}