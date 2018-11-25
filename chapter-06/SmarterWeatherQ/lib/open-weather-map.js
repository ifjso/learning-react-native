const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

type Forecast = {
    main: string,
    description: string,
    temp: number
};

const zipUrl = (zip: string): string =>
    `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;

const latLonUrl = (lat: number, lon: number): string =>
    `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;

const fetchForecast = (url: string): Promise<void | Forecast> =>
    fetch(url)
        .then(response => response.json())
        .then(responseJSON => ({
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
        }))
        .catch(error => console.error(error));

const fetchZipForecast = (zip: string): Promise<void | Forecast> =>
    fetchForecast(zipUrl(zip));

const fetchLatLonForecast = (lat: number, lon: number): Promise<void | Forecast> =>
    fetchForecast(latLonUrl(lat, lon));

export default {
    fetchZipForecast,
    fetchLatLonForecast
};
