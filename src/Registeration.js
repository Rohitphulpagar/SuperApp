import React, { useRef, useState } from "react";
import CategoryPage from "./CategoryPage";
import "./style.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Registeration() {
  const { handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  const changer4 = (event) => {
    setCheck(true);
  };
  const [enterName, setEnterName] = useState("");
  const changer = (event) => {
    setEnterName(event.target.value);
  };
  const [enterUser, setenterUser] = useState("");
  const changer1 = (event) => {
    setenterUser(event.target.value);
  };
  const [enterEmail, setenterEmail] = useState("");
  const changer2 = (event) => {
    setenterEmail(event.target.value);
  };
  const [enterMobile, setenterMobile] = useState("");
  const changer3 = (event) => {
    setenterMobile(event.target.value);
  };

  const data = useRef();
  const data1 = useRef();
  const data2 = useRef();
  const data3 = useRef();
  const handleClick = () => {
    localStorage.setItem("name", data.current.value);
    localStorage.setItem("userName", data1.current.value);
    localStorage.setItem("email", data2.current.value);
    localStorage.setItem("Mobile", data3.current.value);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <div className="div1">
        <h1 className="heading">Discover new things on Superapp</h1>
      </div>
      <div className="div2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div>
              <h1 className="appName">Super app</h1>
              <p className="alpha">Create your new account</p>
            </div>
            <div className="divf">
              <input
                type="text"
                className="in"
                name="name"
                value={enterName}
                placeholder="Name"
                onChange={changer}
                ref={data}
              />
              <br />
              <error className="err">
                {!enterName ? (
                  <span className="err">Field is required</span>
                ) : null}
              </error>
            </div>
            <div className="divS">
              <input
                className="in"
                type="text"
                name="userName"
                value={enterUser}
                placeholder="UserName"
                onChange={changer1}
                ref={data1}
              />
              <br />
              <error className="err">
                {!enterUser ? (
                  <span className="err">Field is required</span>
                ) : null}
              </error>
            </div>
            <div className="divT">
              <input
                className="in"
                type="email"
                name="email"
                value={enterEmail}
                onChange={changer2}
                placeholder="Email"
                // {...pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i}
                ref={data2}
              />
              <br />{" "}
              <error className="err">
                {!enterEmail ? (
                  <span className="err">Field is required</span>
                ) : null}
              </error>
            </div>
            <div className="divl">
              <input
                className="in"
                type="number"
                name="mobileNumber"
                value={enterMobile}
                placeholder="Mobile"
                onChange={changer3}
                ref={data3}
              />
              <br />
              <error className="err">
                {!enterMobile ? (
                  <span className="err">Field is required</span>
                ) : null}
              </error>
            </div>{" "}
            <br />{" "}
            <span className="sp">
              <input
                type="checkbox"
                name="checkbox"
                value={check}
                onChange={changer4}
              />
              <label className="clk">
                {" "}
                Share my registration data with Superapp{" "}
              </label>
              <br />
              <error className="err">
                {" "}
                {!check ? (
                  <span className="err">
                    Check this box if you want to proceed
                  </span>
                ) : null}
              </error>
            </span>
            <br></br>
            <div>
              <Link to="/CategoryPage">
                <button
                  className="btn"
                  disabled={
                    !(enterMobile, enterEmail, enterName, enterUser, check)
                  }
                  onClick={handleClick}
                >
                  SIGN UP
                </button>
              </Link>

              <br />
              <br />
              <span>
                <span className="psg">
                  {" "}
                  &nbsp; By clicking on Sign up. you agree to Superapp
                </span>
                <span className="psg1">
                  {" "}
                  Terms and
                  <br />
                  &nbsp;&nbsp;Conditions of Use
                </span>
              </span>
              <div>
                <br></br>
                <span className="spl">
                  &nbsp; To learn more about how Superapp collects,uses,shares
                  and
                  <br />
                  &nbsp; protects your personal data please head Superapp
                  <span className="psg1">
                    {" "}
                    Privacy <br />
                    &nbsp;&nbsp;policy
                  </span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registeration;
