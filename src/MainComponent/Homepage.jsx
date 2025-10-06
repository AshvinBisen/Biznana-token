import React, { Suspense } from 'react';
import "../index.css"
// import FAQSection from '../Homepagesection/Faqs.jsx';

// Lazily import components
const Hero = React.lazy(() => import("../Homepagesection/S1Hero.jsx"));
const Mystory = React.lazy(() => import("../Homepagesection/MyStory.jsx"));
// const About = React.lazy(() => import("../Homepagesection/S2About.jsx"));
// const Usecase = React.lazy(() => import("../Homepagesection/S3Usecase.jsx"));
const StrategicPartners = React.lazy(() => import("../Homepagesection/StrategicPartners.jsx"));
const Tokenomics = React.lazy(() => import("../Homepagesection/S4Tokenomics.jsx"));
const Contract = React.lazy(() => import("../Homepagesection/Contract.jsx"));
// const HowToBuy = React.lazy(() => import("../Homepagesection/HowToBuy.jsx"));
const ContractAddress = React.lazy(() => import("../Homepagesection/S7Contractaddress.jsx"));

const Homepage = () => {
  return (
    <Suspense fallback={<div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>}>
      <Hero />
      <Mystory />
      {/* <About /> */}
      {/* <Usecase /> */}
      <StrategicPartners />
      <Tokenomics />
      <Contract />
      {/* <HowToBuy /> */}
      {/* <FAQSection/> */}
      <ContractAddress />
    </Suspense>
  );
};

export default Homepage;
