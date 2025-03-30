import React from "react";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import ContactBanner from "./ContactBanner";
import FromContact from "./FormContact";
import Quest from "../Pages/Quest";
import Footer from "../CommonComponents/Footer";
import CopyRight from "../CommonComponents/Copyright";
function ContactUs(){
      return(
            <>
            <Header />
            <NavBar />
            <ContactBanner />
            <FromContact />
            <Quest />
            <Footer/>
            <CopyRight/>

            </>
      )
}
export default ContactUs;