import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getWeather } from "@/lib/api/weather";
import WeatherCarouselClient from './WeatherCarouselClient';
import { Suspense } from 'react';
import WeatherCarouselSkeleton from './WeatherCarouselSkeleton';

export default async function ViewMiddleware() {
  return (
    <Suspense fallback={<WeatherCarouselSkeleton />}>
      <WeatherCarousel />
    </Suspense>
  )
}

// Server Component - prefetches data
async function WeatherCarousel() {
  const queryClient = new QueryClient()

  // Prefetch the data on the server
  await queryClient.prefetchQuery({
    queryKey: ['weather'],
    queryFn: getWeather,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WeatherCarouselClient />
    </HydrationBoundary>
  )
}