import React from "react";
import Header from "../componets/Header";
import UnlockComponets from "../componets/Unlock";
import AiPower from "../componets/AI";
import Hapleing from "../componets/Helping";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <UnlockComponets />
      </div>
      {/* <div>
        <AiPower />
      </div> */}
      {/* <div>
        <Hapleing />
      </div> */}
    </div>
  );
};

export default HomePage;
