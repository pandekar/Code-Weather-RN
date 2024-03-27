import type {City, ForecastList} from '../../index.types';

export type Props = {
  weather: Array<ForecastList>;
  city: City;
};
