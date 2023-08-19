import React from "react";
import Seconds from "./Seconds";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Registeration() {
  const navigate=useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
 
  
localStorage.setItem("name","KK Vinay");
localStorage.setItem("email","Vinay090@gmail.com");
localStorage.setItem("userName","vinay060");
localStorage.setItem("mobile","96555555");
 const onSubmit = (data)=>console.log(data);

  return (
    <div className="App">
    <div className="div1">
        
        <h1 className="heading">Discover new things on Superapp</h1> 
              </div>
          <div className="div2">
      <form  onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Name"
              {...register("name", { required: true })}  
            />
            <br />
            <error className="err">
              {errors.name?.type === "required" && "Field is required"}
            </error>
          </div>
          <div className="divS">
            <input
              className="in"
              type="text"
              name="userName"
              placeholder="UserName"
              {...register("userName", { required: true })}
            />
            <br />
            <error className="err">
              {errors.userName?.type === "required" && "Field is required"}
            </error>
          </div>
          <div className="divT">
            <input
              className="in"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
            />
            <br />{" "}
            <error className="err">
              {errors.email?.type === "required" && "Field is required"}
              {errors.email?.type === "pattern" && "Field is required"}
            </error>
          </div>
          <div className="divl">
            <input
              className="in"
              type="number"
              name="mobileNumber"
              placeholder="Mobile"
              {...register("mobileNumber", { required: true })}
            />
            <br />
            <error className="err">
              {errors.mobileNumber?.type === "required" && "Field is required"}
            </error>
          </div>{" "}
          <br />{" "}
          <span className="sp">
            <input
              type="checkbox"
              name="checkbox"
              {...register("checkbox", { required: true })}
            />
            <label className="clk">
              {" "}
              Share my registration data with Superapp{" "}
            </label>
            <br />
            <error className="err">
              {errors.checkbox?.type === "required" &&
                " Check this box if you want to proceed"}
            </error>
          </span>
          <br></br>
          <div>
           
  
  <button className="btn" onClick={()=>navigate("/Seconds")} >
     SIGN UP
   </button>

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
                &nbsp; To learn more about how Superapp collects,uses,shares and
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
    </div></div>
  );
}

export default Registeration;
