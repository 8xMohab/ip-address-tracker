import React, { useContext } from 'react'
import { ipInfoContext } from "../App";
function IpInfo() {
  const { ipInfo } = useContext(ipInfoContext);
  return (
    <div className="ip-info">
      <div className="ip-address">
        <p>IP Address</p>
        <h2>{ipInfo.query}</h2>
      </div>
      <div className="ip-location">
        <p>Location</p>
        <h2>{ipInfo.country}</h2>
      </div>
      <div className="ip-timezone">
        <p>Timezone</p>
        <h2>{ipInfo.timezone}</h2>
      </div>
      <div className="ip-isp">
        <p>ISP</p>
        <h2>{ipInfo.isp}</h2>
      </div>
    </div>
  );
}

export default IpInfo