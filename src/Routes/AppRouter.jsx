import React from "react";
import { Routes, Route } from "react-router-dom";
import Insurance from "../LayoutComponent/Insurance";
import Header from "../Components/CommonComponents/Header";
// import NavTwo from "../Components/CommonComponents/NavTwo"
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
import Companies from "../Components/Pages/Companies";
import Quest from "../Components/Pages/Quest";
import Footer from "../Components/CommonComponents/Footer";
import CopyRight from "../Components/CommonComponents/Copyright";
import AboutUs from "../Components/Pages/AboutUs"
import InsuranceServices from "../Components/Pages/InsuranceServices"
import InsurTest from "../Components/Pages/InsurTest";
import ClientResource from "../Components/Pages/ClientResource";
import Blog from "../Components/Pages/Blog";
import ContactUs from "../Components/Pages/ContactUs";
import Quote from "../Components/Pages/Quote"

const AppRouter=()=>{
      return (
        <Routes>
          <Route path="/" element={<Insurance />} />
          <Route path="/header" element={<Header />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/textinsurance" element={<TextInsurance />} />
          <Route path="/insurancecard" element={<InsuranceCard />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/helpingcard" element={<HelpingCard />} />
          <Route path="/insurifytects" element={<Insurifytects />} />
          <Route path="/need" element={<Need />} />
          <Route path="/updatein" element={<UpdateIN />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/copyright" element={<CopyRight />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/insurance" element={<InsuranceServices/>}/>
          <Route path="/insurtest" element={<InsurTest />} />
          <Route path="/clientResource" element={<ClientResource />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quote" element={<Quote />} />

        </Routes>
      );

}
export default AppRouter