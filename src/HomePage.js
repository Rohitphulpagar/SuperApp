import React from "react";
import manpic from "./img/manpic.png"
import "./HomePages.css";
function HomePage(){
    const n=localStorage.getItem("name");
const e=localStorage.getItem("email");
const u=localStorage.getItem("userName");
    const A=localStorage.getItem("Action");
    const D=localStorage.getItem("Drama");
    const R=localStorage.getItem("Romance");
    const T=localStorage.getItem("Thriller");
    const W=localStorage.getItem("Western");
    const H=localStorage.getItem("Horror");
    const F1=localStorage.getItem("fantasy");
    const M=localStorage.getItem("Music");
    const F=localStorage.getItem("Fiction");
    return(
<div className="containers">
<div className="first">
    <div className="firstOne">
<div className="Sign">

<div className="infos">
<div className="logoo">
<img src={manpic} alt="manpic" className="pics"/>
</div>
<div className="localData">
<div className="info1">{n}</div>
<div className="info2">{e}</div>
<div className="info3">{u}</div>
<div className="s"> 
   <span className="sp1">{H}</span>
<span className="sp2">{T}</span><br></br>
<span className="sp3">{A}</span>
<span className="sp4">{F1}</span>
    </div>




</div>

</div>
<div className="texts">


</div>
</div>
<div className="timers">

</div>
</div>
    </div>  

    <div className="second">
<h1>hello</h1>

    </div>
</div>


    )
};


export default HomePage;