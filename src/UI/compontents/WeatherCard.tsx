import { FaTemperatureArrowDown, FaTemperatureArrowUp, FaTemperatureEmpty } from "react-icons/fa6";
import { getConditionStyles } from "../../utils/getStyleCondition";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

// Define the Props interface
interface Props {
  city?: string;
  tempMin: number;
  tempMax: number;
  currentTemp: number; 
  condition: string;
  icon: string;
  group: number;
}

export const WeatherCard = ({ city, tempMin, tempMax, currentTemp, condition,icon,group }: Props) => {
  const iconSrc = getWeatherIcon(icon);
  const conditionStyle = getConditionStyles(group);
  return (
    <div       className={`shadow-md rounded-lg p-6 max-w-sm mx-auto  ${conditionStyle}`}
>
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-xl capitalize ">{city}</h2>
      </div>
      <div className="flex flex-col justify-center mb-4 items-center">
        <img src={iconSrc} alt={condition} className="w-32 h-32" />
        <h2 className="text-xl capitalize">  {condition}</h2>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-gray-200 dark:bg-gray-500" />

      <div className="flex items-center flex-col gap-4">
        <div className="flex items-center gap-2 ">
          <FaTemperatureArrowDown className=""  />
          <span className="text-lg ">Min: {tempMin}°C</span>
        </div>
         <div className="flex items-center gap-2 ">
          <FaTemperatureEmpty  />
          <span className="text-lg  ">Current: {currentTemp}°C</span>
        </div>
        <div className="flex items-center gap-2">
          
          <FaTemperatureArrowUp  />
          <span className="text-lg ">Max: {tempMax}°C</span>
        </div>
      </div>
    </div>
  );
};
