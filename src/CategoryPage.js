import React, { useState, useRef } from "react";
import Action from "./img/Action.png";
import Drama from "./img/Drama.png";
import Fiction from "./img/Fiction.png";
import Fantasy from "./img/Fantasy.png";
import Horror from "./img/Horror.png";
import Music from "./img/Music.png";
import Romance from "./img/Romance.png";
import Thriller from "./img/Thriller.png";
import Western from "./img/Western.png";
import { Link } from "react-router-dom";
import Vector from "./img/Vector.png";
import HomePage from "./HomePage";
import Registeration from "./Registeration";
import "./card.css";
function CategoryPage() {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);

  const handleClicks = (event) => {
    setIsShown((current) => !current);
    localStorage.setItem("Action", "Action");
  };

  const handleClicks1 = (event) => {
    setIsShown1((current) => !current);
    localStorage.setItem("Drama", "Drama");
  };
  const handleClicks2 = (event) => {
    setIsShown2((current) => !current);
    localStorage.setItem("Romance", "Romance");
  };
  const handleClicks3 = (event) => {
    setIsShown3((current) => !current);
    localStorage.setItem("Thriller", "Thriller");
  };
  const handleClicks4 = (event) => {
    setIsShown4((current) => !current);
    localStorage.setItem("Western", "Western");
  };
  const handleClicks5 = (event) => {
    setIsShown5((current) => !current);
    localStorage.setItem("Horror", "Horror");
  };
  const handleClicks6 = (event) => {
    setIsShown6((current) => !current);
    localStorage.setItem("fantasy", "Fantasy");
  };
  const handleClicks7 = (event) => {
    setIsShown7((current) => !current);
    localStorage.setItem("Music", "Music");
  };
  const handleClicks8 = (event) => {
    setIsShown8((current) => !current);
    localStorage.setItem("Fiction", "Fiction");
  };
 

  return (
    <div className="s1">
      <div className="s2">
        <div className="hs">
          <h1 className="appName">Super app</h1>
        </div>
        <div className="hl">
          <h1 className="line">Choose your entertainment category</h1>
        </div>
        <div className="cards">
          {isShown ? (
            <span className="SP">
              Action
              <button onClick={handleClicks} className="butn">
                X
              </button>
            </span>
          ) : null}
          {/* second click event */}
          {isShown1 ? (
            <span className="SP">
              Drama
              <button onClick={handleClicks1} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* third click event */}
          {isShown2 ? (
            <span className="SP">
              Romance
              <button onClick={handleClicks2} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* fourth click event */}
          {isShown3 ? (
            <span className="SP">
              Thriller
              <button onClick={handleClicks3} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* fifth click event */}
          {isShown4 ? (
            <span className="SP">
              {" "}
              Western
              <button onClick={handleClicks4} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* sixth click event */}
          {isShown5 ? (
            <span className="SP">
              Horror
              <button onClick={handleClicks5} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* seven click event */}
          {isShown6 ? (
            <span className="SP">
              Fantasy
              <button onClick={handleClicks6} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* eight click event */}
          {isShown7 ? (
            <span className="SP">
              Music
              <button onClick={handleClicks7} className="butn">
                X
              </button>
            </span>
          ) : null}

          {/* nine click event */}
          {isShown8 ? (
            <span className="SP">
              Fiction
              <button onClick={handleClicks8} className="butn">
                X
              </button>
            </span>
          ) : null}
        </div>
        <div className="Notification">
          <img src={Vector} alt="dangerZone" className="logos" /> Minimum 3
          category required
        </div>
      </div>
      <div className="s3">
        <div className="divfIRST">
          <div className="subDiv1">
            <button className="b1" onClick={handleClicks}>
              Action
            </button>
            <img src={Action} alt="Action" className="img1" />
          </div>
          <div className="subDiv2">
            <button className="b2" onClick={handleClicks1}>
              Drama
            </button>
            <img src={Drama} alt="Drama" className="img1" />
          </div>
          <div className="subDiv3">
            <button className="b3" onClick={handleClicks2}>
              Romance
            </button>
            <img src={Romance} alt="Romance" className="img1" />
          </div>
        </div>
        <div className="divfIRST1">
          <div className="subDiv11">
            <button className="b11" onClick={handleClicks3}>
              Thriller
            </button>
            <img src={Thriller} alt="Thriller" className="img1" />
          </div>
          <div className="subDiv21">
            <button className="b21" onClick={handleClicks4}>
              Western
            </button>
            <img src={Western} alt="Western" className="img1" />
          </div>
          <div className="subDiv31">
            <button className="b31" onClick={handleClicks5}>
              Horror
            </button>
            <img src={Horror} alt="Horror" className="img1" />
          </div>
        </div>
        <div className="divfIRST2">
          <div className="subDiv12">
            <button className="b12" onClick={handleClicks6}>
              Fantasy
            </button>
            <img src={Fantasy} alt="Fantasy" className="img1" />
          </div>
          <div className="subDiv22">
            <button className="b22" onClick={handleClicks7}>
              Music
            </button>
            <img src={Music} alt="Music" className="img1" />
          </div>
          <div className="subDiv32">
            <button className="b32" onClick={handleClicks8}>
              Fiction
            </button>
            <img src={Fiction} alt="Fiction" className="img1" />
          </div>
        </div>

        <div className="btnL">
          <Link to="/HomePage">
            <button className="btnS">Next Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
