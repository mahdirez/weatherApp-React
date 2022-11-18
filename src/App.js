import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const apiKey = "7803e24027a89e5957515fd54ccfe208";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  function search(e) {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("")
    }
  }
  return (
    <>
      <div className="bg-slate-900  min-h-screen flex flex-col items-center justify-center gap-20">
        <input
          className="border-none outline-none w-2/6 p-2 rounded-full"
          placeholder="Enter City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyUp={search}
        />
        <div className="w-96 text-white">
          <div>
            {data.sys ? (
              <p className="text-6xl text-center">
                {data.name} {data.sys.country}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center gap-32 text-white w-40 ">
          <div>
            {data.weather ? (
              <div className=" text-5xl text-center mt-10">
                <i className="bi bi-clouds"></i>
                <br />
                {data.weather[0].description}
              </div>
            ) : null}
          </div>
          <div>
            {data.wind ? (
              <div className=" text-5xl text-center mt-10">
                <i className="bi bi-wind"></i>
                <br />
                {data.wind.speed}
              </div>
            ) : null}
          </div>
          <div>
            {data.main ? (
              <div className=" text-5xl text-center mt-10">
                <i className="bi bi-thermometer"></i>
                <br />
                {data.main.temp.toFixed()}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
