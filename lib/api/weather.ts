import { axiosInstance } from "./api";
import { WeatherResponse } from "../model/weather";

export async function getWeather(): Promise<WeatherResponse[]> {
  return axiosInstance.get("/weatherforecast").then((res) => res.data);
}