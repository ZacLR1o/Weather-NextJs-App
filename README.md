# Weather App

A Next.js weather application demonstrating server-side prefetching with TanStack Query.

## Installation & Setup

1. **Install dependencies:**
```bash
pnpm install
```

Backend repository used: https://github.com/ZacLR1o/MyWeatherApp 

2. **Configure environment variables:**

Create a `.env.local` file in the root directory:
```bash
BASE_URL=http://localhost:5119
```

3. **Run the development server:**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Architecture: TanStack Query with Server-Side Prefetching

This app uses a hybrid approach combining Next.js Server Components with TanStack Query for optimal performance:

### How It Works

1. **Server Component** (`WeatherCarousel.tsx`):
   - Creates a QueryClient on the server
   - Prefetches weather data using `prefetchQuery` before rendering
   - Dehydrates the cache and passes it to the client via `HydrationBoundary`
   - Data is included in the initial HTML (SSR)

2. **Client Component** (`WeatherCarouselClient.tsx`):
   - Uses `useWeather()` hook from TanStack Query
   - Receives prefetched data instantly (no loading state on first render)
   - Retains full client-side features: refetching, caching, mutations

3. **Providers Setup** (`components/providers.tsx`):
   - Client Component wrapping the app with `QueryClientProvider`
   - Configures default query options (staleTime, retry, etc.)

### Benefits

- ✅ Fast initial page load (server-rendered)
- ✅ No loading flash on first render
- ✅ Full TanStack Query features (caching, background refetch, invalidation)
- ✅ SEO-friendly content

### Key Files

- `lib/api/weather.ts` - Axios API call
- `lib/queries/weather.query.ts` - TanStack Query hook definition
- `components/Weather/WeatherCarousel.tsx` - Server component with prefetch
- `components/Weather/WeatherCarouselClient.tsx` - Client component using useQuery

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
