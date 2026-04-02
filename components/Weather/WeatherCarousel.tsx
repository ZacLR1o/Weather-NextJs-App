import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getWeather } from "@/lib/api/weather";
import WeatherCarouselClient from './WeatherCarouselClient';

// Server Component - prefetches data
export default async function WeatherCarousel() {
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