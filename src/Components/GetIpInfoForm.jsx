import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ipInfoContext } from "../App";
function GetIpInfoForm() {
  const { setIpInfo } = useContext(ipInfoContext);
  const [input, setinput] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const httpReq = `https://ipinfo.io/${input}?token=${API_KEY}`;
  const submitHandler = (e) => {
    e.preventDefault();
    getIpInfo();
    setinput("");
  };
  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  const getIpInfo = async () => {
    axios.get(httpReq).then((res) => setIpInfo(res.data));
  };
  useEffect(() => {
    getIpInfo();
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Search for any IP address or domain"
          type="text"
          onChange={inputHandler}
          value={input}
        />
        <button>&gt;</button>
      </form>
    </div>
  );
}

export default GetIpInfoForm;
