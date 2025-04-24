export default function Loading() {
  return (
    <div>
      <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-6"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
