import { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEY = {
	weather: (coordinates: Coordinates) => ["weather", coordinates] as const,
	forecast: (coordinates: Coordinates) => ["forecast", coordinates] as const,
	location: (coordinates: Coordinates) => ["location", coordinates] as const,
	search: (query: string) => ["search", query] as const,
} as const;

export function useWeatherQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEY.weather(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () =>
			coordinates ? weatherAPI.getCurrentWeather(coordinates) : null,
		enabled: !!coordinates,
	});
}
export function useForecastQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEY.forecast(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () => (coordinates ? weatherAPI.getForecast(coordinates) : null),
		enabled: !!coordinates,
	});
}
export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEY.location(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () =>
			coordinates ? weatherAPI.reverseGeocode(coordinates) : null,
		enabled: !!coordinates,
	});
}
export function useSearchLocationQuery(query: string) {
	return useQuery({
		queryKey: WEATHER_KEY.search(query),
		queryFn: () => weatherAPI.searchLocation(query),
		enabled: query.length >= 3,
	});
}
