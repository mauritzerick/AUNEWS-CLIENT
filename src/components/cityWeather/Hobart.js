import ReactWeather, { useOpenWeather } from "react-open-weather";

const Hobart = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: "-42.8794",
    lon: "147.3294",
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
        locationLabel="Hobart"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast={false}
      />
    </div>
  );
};

export default Hobart;
