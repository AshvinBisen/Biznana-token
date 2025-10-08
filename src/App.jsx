import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from "./MainComponent/ScrollToTop";
import Loader from "./MainComponent/Loader";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Style/locomotivescroll.css";
import Presale from "./MainComponent/Presale.jsx";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { bsc } from "@reown/appkit/networks";
import PopupImage from "./Homepagesection/PopupImage.jsx";

const Homepage = lazy(() => import("./MainComponent/Homepage"));
// 1. Get projectId
const projectId = "a4e7900c3d2caa1ccfb426b019ed4f0c";

// 2. Set the networks
const networks = [bsc];

// 3. Create a metadata object - optional
const metadata = {
  name: "Biznana",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in", // Easing function
      once: true, // Run animation only once
    });
  }, []);
  return (
    <Router>
      <PopupImage/>
      <Headroom>
     
        <Navbar />
      </Headroom>
      <ScrollToTop />
      <div className="content ">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
            {/* <Route path="/presale" element={<Presale />} /> */}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
