import { Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { getWeather } from "@/lib/api/weather";

// Separate async component that fetches and renders the carousel
export default async function ViewMiddleware() {  
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <WeatherCarousel />
    </Suspense>
  );
}

async function WeatherCarousel() {
  // const weatherData = await getWeatherData(); // simulating data fetch; without suspending this component, it would block the entire page until data is ready
  const weatherData = await getWeather();
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {weatherData.map((weather) => (
          <CarouselItem key={weather.id}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 border rounded-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{weather.summary}</h3>
                  <p className="text-4xl font-semibold mb-1">{weather.temperatureC}</p>
                  <p className="text-sm text-muted-foreground">{weather.date}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

// Loading fallback component
function CarouselSkeleton() {
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