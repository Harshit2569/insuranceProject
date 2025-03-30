import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/CommonComponents/Header";
import NavBar from "../Components/CommonComponents/Navbar";
import Banner from "../Components/Pages/Banner";
import TextInsurance from "../Components/Pages/TextInsurance";
import InsuranceCard from "../Components/Pages/InsuranceCard";
import WhoWeAre from "../Components/Pages/WhoWeAre";
import GetStarted from "../Components/Pages/GetStarted";
import HelpingCard from "../Components/Pages/HelpingCard";
import Insurifytects from "../Components/Pages/Insurifytects";
// import Testimonials from "../Components/Pages/Testimonials";
import Need from "../Components/Pages/Need";
import UpdateIN from "../Components/Pages/UpdateIN";
// import Companies from "../Components/Pages/Companies";
import CardsSwiper from "../Components/Pages/CardsSwiper";
import Quest from "../Components/Pages/Quest";
import Footer from "../Components/CommonComponents/Footer";
import CopyRight from "../Components/CommonComponents/Copyright";

function Insurance() {
  return (
    <Layout>
      <Header />
      {/* <NavTwo /> */}
      <NavBar />
      <Banner />
      <TextInsurance />
      <InsuranceCard />
      <WhoWeAre />
      <GetStarted />
      <HelpingCard />
      <Insurifytects />
      {/* <Testimonials /> */}
      <Need />
      <UpdateIN />

      {/* <Companies /> */}
      <CardsSwiper />
      <Quest />
      <Footer />
      <CopyRight />
    </Layout>
  );
}
export default Insurance;
