import React from "react";
import Section1 from "../components/Section1";
import Logos from "../components/Logos";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import WhyWe from "../components/WhyWe";
import Help from "../components/Help";

const Home = () => {
React.useEffect(() => {
  window.scrollTo(0,0)

}, [])
  return(
    <>
    <Section1 />
    <Logos />
    <Section2 />
    <Section3 />
    <WhyWe />
    <Help />
    </>
  );
};

export default Home;
