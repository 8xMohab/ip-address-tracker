import "./Styles/App.css";
import { useState, createContext } from "react";
import IpInfo from "./Components/IpInfo";
import GetIpInfoForm from "./Components/GetIpInfoForm";
import GetMap from "./Components/GetMap";
export const ipInfoContext = createContext();
function App() {
  const [ipInfo, setIpInfo] = useState({lat: 0, lon: 0});
  return (
    <ipInfoContext.Provider value={{ipInfo, setIpInfo}} >
      <div className="App">
        <header>
          <div className="container">
            <h1>Ip Address Tracker</h1>
            <GetIpInfoForm />
            <IpInfo />
          </div>
        </header>
        <GetMap />
      </div>
    </ipInfoContext.Provider>
  );
}

export default App;
