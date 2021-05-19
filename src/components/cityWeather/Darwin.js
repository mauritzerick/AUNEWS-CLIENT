import ReactWeather, { useOpenWeather } from "react-open-weather";

const Darwin = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: "-12.4611",
    lon: "130.8418",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <div>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Darwin"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default Darwin;
