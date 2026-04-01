export default function WeatherCarouselSkeleton() {
  return (
    <div className="w-full max-w-xs">
      <div className="p-1">
        <div className="flex aspect-square items-center justify-center p-6 border rounded-lg bg-muted animate-pulse">
          <div className="text-center">
            <div className="h-8 w-32 bg-muted-foreground/20 rounded mb-2 mx-auto"></div>
            <div className="h-12 w-24 bg-muted-foreground/20 rounded mb-1 mx-auto"></div>
            <div className="h-4 w-20 bg-muted-foreground/20 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}