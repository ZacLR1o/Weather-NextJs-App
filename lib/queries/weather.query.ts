import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weather";

export function useWeather() {
  return useQuery({
    queryKey: ["weather"],
    queryFn: getWeather
  })
}