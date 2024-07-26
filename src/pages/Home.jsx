import React from "react";
import OfferSlider from "../components/OfferSlider";
import TopOffers from "../components/TopOffers";
import SmartPhones from "../components/SmartPhones";
import OfferTo from "../components/OfferTo";
import Fashion from "../components/Fashion";
import OfferThree from "../components/OfferThree";

const Home = () => {
  return (
    <main>
      <OfferSlider />
      <TopOffers />
      <SmartPhones />
      <OfferTo />
      <Fashion />
      <OfferThree />
    </main>
  );
};

export default Home;
