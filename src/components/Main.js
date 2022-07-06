import React from "react";
import Search from "./Search";
import Userlogin from "./Userlogin";
import "./Main.css";

const newLocal = "./img.png";
function Main() {
  return (
    <nav>
      <div className="main-nav">
        <div>
          <a href={process.env.PUBLIC_URL}>
            <img src={newLocal} width="50px" />
          </a>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Userlogin />
        </div>
      </div>
    </nav>
  );
}

export default Main;
