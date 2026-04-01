import { Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


// Simulate fetching data from a server with delay
async function getWeatherData() {
  // Simulate a 3-second delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return [
    { id: 1, city: "New York", temp: "72°F", condition: "Sunny" },
    { id: 2, city: "London", temp: "58°F", condition: "Cloudy" },
    { id: 3, city: "Tokyo", temp: "68°F", condition: "Rainy" },
    { id: 4, city: "Sydney", temp: "75°F", condition: "Clear" },
  ];
}

// Separate async component that fetches and renders the carousel
export default async function ViewMiddleware() {  
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <WeatherCarousel />
    </Suspense>
  );
}

async function WeatherCarousel() {
  const weatherData = await getWeatherData(); // simulating data fetch; without suspending this component, it would block the entire page until data is ready

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {weatherData.map((weather) => (
          <CarouselItem key={weather.id}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 border rounded-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{weather.city}</h3>
                  <p className="text-4xl font-semibold mb-1">{weather.temp}</p>
                  <p className="text-sm text-muted-foreground">{weather.condition}</p>
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