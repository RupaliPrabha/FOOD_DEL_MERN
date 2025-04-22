import React, { useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios'



const LoginPopUp = ({ setshowlogin }) => {
  const [currState, setcurrState] = useState("Login");
  const { url ,setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLoginHandler = async (event) => {
    event.preventDefault();
   
    let newUrl = url

    if(currState==="Login"){
      newUrl += '/api/user/login'

    }
    else{
      newUrl += '/api/user/signup'
    }

    const response = await axios.post(newUrl, data);

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setshowlogin(false)
    
    }
    else{
     alert(response.data.message)
    }

  };

  return (
    <div className="login-popup">
      <form onSubmit={onLoginHandler} className="login-popuup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              onChange={onChangehandler}
              name="name"
              value={data.name}
              placeholder="Your name"
              required
            />
          )}
          <input
            type="email"
            onChange={onChangehandler}
            name="email"
            value={data.email}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            onChange={onChangehandler}
            name="password"
            value={data.password}
            placeholder="password"
            required
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agrre to the term of use & privacy policy. </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a New Account ?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have a account ?{" "}
            <span onClick={() => setcurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
