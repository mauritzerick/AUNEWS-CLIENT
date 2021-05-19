import ReactWeather, { useOpenWeather } from "react-open-weather";

const Sydney = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: "-33.8679",
    lon: "151.2093",
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
        locationLabel="Sydney"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default Sydney;
