import React from "react";
import { useEffect, useState } from "react";
import manpic from "./img/manpic.png";
import "./HomePages.css";
import Humidity from "./img/humidity.png";
import Cloud from "./img/cloud.png";
import wind from "./img/wind.png";
import Moment from "react-moment";
import moment from "moment";
import Wind from "./img/wind.png"
import Pressure from "./img/pressure.svg"

//2d6a1d2fed8821fce7bc60d99c2c1c5a
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
function HomePage() {
  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;
  const[time,setTime]=useState(new Date())
  useEffect(()=>{
    setInterval(()=>setTime(new Date()),1000)
  })
  const n = localStorage.getItem("name");
  const e = localStorage.getItem("email");
  const u = localStorage.getItem("userName");
  const A = localStorage.getItem("Action");
  const D = localStorage.getItem("Drama");
  const R = localStorage.getItem("Romance");
  const T = localStorage.getItem("Thriller");
  const W = localStorage.getItem("Western");
  const H = localStorage.getItem("Horror");
  const F1 = localStorage.getItem("fantasy");
  const M = localStorage.getItem("Music");
  const F = localStorage.getItem("Fiction");

  const [apiData, setApiData] = useState(" ");
const [temp,setTemp]=useState("");
const [pressure,setPressure]=useState("");
const [wind,setWind]=useState("");
const[humidity,setHumidity]=useState("");
  const fetchData = (data) => {
    fetch(
       "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2d6a1d2fed8821fce7bc60d99c2c1c5a"
     // "https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={2d6a1d2fed8821fce7bc60d99c2c1c5a}"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
        setTemp(data.main.temp);
        setPressure(data.main.pressure);
       setWind(data.wind.speed);
       setHumidity(data.main.humidity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="containers">
      <div className="first">
        <div className="firstOne">
          <div className="Sign">
            <div className="infos">
              <div className="logoo">
                <img src={manpic} alt="manpic" className="pics" />
              </div>
              <div className="localData">
                <div className="info1">{n}</div>
                <div className="info2">{e}</div>
                <div className="info3">{u}</div>
                <div className="s">
                  <span className="sp1">{H}</span>
                  <span className="sp2">{T}</span>
                  <br></br>
                  <span className="sp3">{A}</span>
                  <span className="sp4">{F1}</span>
                  
                </div>
              </div>
            </div>
            <div className="texts">
              <div><span className="cardD"><h3>{date}</h3><h3>{time.toLocaleTimeString()}</h3></span></div>
              <div className="cardD1">
                <div className="cardD2">
                  <img src={Cloud} alt="cloud"/><p className="cloudText">Heavy Rain</p></div>
                  <div>
                     <h1 className="temp">{Math.floor((temp/9))}°C</h1>
                    <span className="press"> <img src={Pressure} alt="pressure" className="preimg"/><p className="ps">{pressure} mba <br/>Pressure</p> </span>
                </div>
                <div>
                <div>
                    <span className="press1"> <img src={Wind} alt="wind" className="preimg1"/><p className="ps1">{wind} km/h <br/>Wind</p> </span>
                </div>
                <div>
                    <span className="press1"> <img src={Humidity} alt="wind" className="preimg1"/><p className="ps1">{humidity}% <br/>Humidity</p> </span>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timers"></div>
        </div>
      </div>

      <div className="second">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default HomePage;
