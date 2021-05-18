import ReactWeather, { useOpenWeather } from "react-open-weather";

const Brisbane = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: "-31.9333",
    lon: "115.8333",
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
        locationLabel="Brisbane"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast={false}
      />
    </div>
  );
};

export default Brisbane;
