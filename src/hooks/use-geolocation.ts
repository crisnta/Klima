import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoLocationState {
	coordinates: Coordinates | null;
	error: string | null;
	isLoading: boolean;
}

export function useGeolocation() {
	const [locationData, setLocationData] = useState<GeoLocationState>({
		coordinates: null,
		error: null,
		isLoading: true,
	});

	const getLocation = () => {
		setLocationData((prev) => ({
			...prev,
			error: null,
			isLoading: true,
		}));
		if (!navigator.geolocation) {
			setLocationData((prev) => ({
				...prev,
				error: "Geolocation is not supported by your browser",
				isLoading: false,
			}));
		}
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocationData((prev) => ({
					...prev,
					coordinates: {
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					},
					error: null,
					isLoading: false,
				}));
			},
			(error) => {
				let errorMessage: string;
				switch (error.code) {
					case error.PERMISSION_DENIED:
						errorMessage =
							"Location permission denied. Please enable location access.";
						break;
					case error.POSITION_UNAVAILABLE:
						errorMessage = "Location information is unavailable.";
						break;
					case error.TIMEOUT:
						errorMessage = "Location request time out.";
						break;
					default:
						errorMessage = "An unknown error ocurred.";
				}
				setLocationData((prev) => ({
					...prev,
					error: errorMessage,
					isLoading: false,
				}));
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			}
		);
	};

	useEffect(() => {
		getLocation();
	}, []);

	return { locationData, setLocationData, getLocation };
}
