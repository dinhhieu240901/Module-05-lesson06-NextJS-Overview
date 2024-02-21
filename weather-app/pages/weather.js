import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=520f34edcc7ad299c4ffb693791f0725"
  );
  const weatherData = response.data;

  return {
    props: {
      weatherData,
    },
    revalidate: 60, 
  };
}

function Home({ weatherData }) {
  return (
    <div>
      <h1>Weather in Hà Nội</h1>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default Home;
