'use client';

import { useWeather } from "@/lib/queries/weather.query";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import WeatherCarouselSkeleton from "./WeatherCarouselSkeleton";
import { Button } from "../ui/button";

export default function WeatherCarouselClient() {
  const { data: weatherData, error, refetch, isFetching } = useWeather()

  if (error) return <div>Error loading weather</div>
  if (!weatherData) return null

  return (
    <>
    {(isFetching) ? <WeatherCarouselSkeleton /> : weatherData.length ?
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
      </Carousel> : null}
      
      <Button onClick={() => refetch()}>Refetch</Button>
    </>
  )
}
