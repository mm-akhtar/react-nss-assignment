import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import LoginIls from "./assets/recption.png";

import "./App.css";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      {/* <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main> */}
      <div className="App, grid-container">
        <div className="item1">
          <img src={LoginIls} alt="I dont know what is this"></img>
        </div>
        <div className="item4">
          <div>
            <h2>Welcome BAck :)</h2>
            <p>
              To keep connected with us please login with your personal
              information by email address and password
            </p>
          </div>
          <div>
            {!ctx.isLoggedIn && <Login />}
            {ctx.isLoggedIn && <Home />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
