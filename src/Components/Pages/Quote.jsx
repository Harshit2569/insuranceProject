import React from "react";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import QuoteBanner from "./QuoteBanner";
import QuoteFrom from "../Pages/QuoteForm";
import Footer from "../CommonComponents/Footer";
import CopyRight from "../CommonComponents/Copyright";
function Quote(){
      return(
            <>
            <Header />
            <NavBar />
            <QuoteBanner />
            <QuoteFrom />
            <Footer />
            <CopyRight />
            </>
      )
}
export default Quote;