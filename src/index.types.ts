export type GeoLocationData = {
  latitude: number;
  longitude: number;
};

export type City = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type ForecastListMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type ForecastList = {
  dt: number;
  main: ForecastListMain;
  weather: Array<WeatherData>;
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: {
    '3h': number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type WeatherForecastData = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<ForecastList>;
  city: City;
};

export type WeatherDataInformation = {
  weatherForecastList: Array<ForecastList>;
  city: City;
};

export type InitialState = {
  loading: boolean;
  city: City;
  weather: Array<ForecastList>;
};

export type ReduxActionValue = {
  type: string;
  data?: WeatherDataInformation;
};
