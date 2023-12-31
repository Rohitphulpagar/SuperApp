import React, { useRef } from "react";
import { useEffect, useState } from "react";
import BrowseEntertainmentPage from "./BrowseEntertainmentPage";
import manpic from "./img/manpic.png";
import "./HomePages.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Card } from "antd";
import axios from "axios";
import Humidity from "./img/humidity.png";
import Cloud from "./img/cloud.png";
import wind from "./img/wind.png";
import Moment from "react-moment";
import moment from "moment";
import Wind from "./img/wind.png";
import Pressure from "./img/pressure.svg";
import { Link } from "react-router-dom";
const { Meta } = Card;

function HomePage() {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }-${current.getDate()}-${current.getFullYear()}`;
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });
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
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const fetchData = (data) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2d6a1d2fed8821fce7bc60d99c2c1c5a"
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
  
//news api section
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=91067522ba3e46656d868a5a21182601";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
        console.log(data.articles);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const startTimer = () => {
    setTotalSeconds(hours * 3600 + minutes * 60 + seconds);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    setTotalSeconds(0);
  };
  const [enterInfo, setEnterInfo] = useState("");
  const changerss = (e) => {
    setEnterInfo(e.target.value);
    localStorage.setItem("notes", JSON.stringify(e.target.value));
  };
  return (
    <div className="containers">
      <div className="first">
        <div className="firstOne">
          <div className="Sign">
            <div className="sign1">
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
                <div>
                  <span className="cardD">
                    <h3>{date}</h3>
                    <h3>{time.toLocaleTimeString()}</h3>
                  </span>
                </div>
                <div className="cardD1">
                  <div className="cardD2">
                    <img src={Cloud} alt="cloud" />
                    <p className="cloudText">Heavy Rain</p>
                  </div>
                  <div>
                    <h1 className="temp">{Math.floor(temp / 9)}°C</h1>
                    <span className="press">
                      {" "}
                      <img src={Pressure} alt="pressure" className="preimg" />
                      <p className="ps">
                        {pressure} mba <br />
                        Pressure
                      </p>{" "}
                    </span>
                  </div>
                  <div>
                    <div>
                      <span className="press1">
                        {" "}
                        <img src={Wind} alt="wind" className="preimg1" />
                        <p className="ps1">
                          {wind} km/h <br />
                          Wind
                        </p>{" "}
                      </span>
                    </div>
                    <div>
                      <span className="press1">
                        {" "}
                        <img src={Humidity} alt="wind" className="preimg1" />
                        <p className="ps1">
                          {humidity}% <br />
                          Humidity
                        </p>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sign2">
              <h1 className="notes">All notes</h1>
              <textarea className="scrollbar " onChange={changerss}>
                This is how I am going to learn MERN Stack in next 3 months.
              </textarea>
            </div>
          </div>
          <div className="timers">
            <div className="clock">
              <div className="clock1">
                <div className="coundowns">
                  <CountdownCircleTimer
                    className="coundown1"
                    isPlaying={isRunning}
                    duration={totalSeconds}
                    colors={[["#FF6A6A"]]}
                    colorsTime={[totalSeconds]}
                  >
                    {({ remainingTime }) => {
                      const hrs = Math.floor(remainingTime / 3600);
                      const mins = Math.floor((remainingTime % 3600) / 60);
                      const secs = remainingTime % 60;
                      return `${hrs}:${String(mins).padStart(2, "0")}:${String(
                        secs
                      ).padStart(2, "0")}`;
                    }}
                  </CountdownCircleTimer>
                </div>
                <div className="inputs">
                  <div>
                    <p className="times">Hours</p>
                    <input
                      className="inp1"
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <p className="times">Minutes</p>
                    <input
                      className="inp2"
                      type="number"
                      value={minutes}
                      onChange={(e) => setMinutes(parseInt(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <p className="times">Seconds</p>
                    <input
                      className="inp3"
                      type="number"
                      value={seconds}
                      onChange={(e) => setSeconds(parseInt(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="buttons">
                  <div className="buttonss">
                    <button className="buttons11" onClick={startTimer}>
                      Start
                    </button>
                    <button className="buttons22" onClick={resetTimer}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="second">
        {newsData &&
          newsData.slice(2, 3).map((article, index) => {
            return (
              <Card
                key={index}
                className="cardsS"
                cover={<img alt="imagess" src={article.image} />}
              >
                <Meta title={article.title} description={article.description} />
              </Card>
            );
          })}
        <div className="homes">
          <Link to="/BrowseEntertainmentPage">
            <button className="browse">Browse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
