import ReactWeather, { useOpenWeather } from "react-open-weather";

const Canberra = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: "-35.2835",
    lon: "149.1281",
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
        locationLabel="Canberra"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default Canberra;
