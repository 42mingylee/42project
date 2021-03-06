import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Userlogin.css";

const handleSignOut = () => {
  localStorage.removeItem("id");
};

const handleOnlogin = (event) => {
  return;
};

const Userlogin = () => {
  const userName = localStorage.getItem("id");
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <span onClick={(e) => setOpen(!open)}>
        {userName ? (
          <div className="usersign">
            {userName}
            <Dropdown visibility={open}>
              <ul className="profileList">
                <li>item 1</li>
                <li>item 2</li>
                <li>
                  <Link to="setting/">setting</Link>
                </li>
                <li onClick={handleSignOut}>logout</li>
              </ul>
            </Dropdown>
          </div>
        ) : (
          <a className="sign-link" href="https://intra.42.fr">
            login
          </a>
        )}
      </span>
    </div>
  );
};

export default Userlogin;
