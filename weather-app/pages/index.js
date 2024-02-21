import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=39c170ea2faa55a3196f9ac535873360"
  );
  const data = response.data;
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Thời tiết tại Hà Nội</h1>
      <p>Nhiệt độ: {data.main.temp}°C</p>
      <p>Trạng thái: {data.weather[0].main}</p>
      <p>Tốc độ gió: {data.wind.speed} m/s</p>
      <p>Mô tả: {data.weather[0].description}</p>
    </div>
  );
}
