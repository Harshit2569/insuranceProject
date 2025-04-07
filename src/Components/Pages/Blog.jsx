import React from "react";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import BlogBanner from "../Pages/BlogBanner";
import BlogSection from "../Pages/BlogSection";
import Quest from "../Pages/Quest";
import Footer from "../CommonComponents/Footer";
import CopyRight from "../CommonComponents/Copyright";
function Blog(){
      return(
            <>
            <Header/>
            <NavBar/>
            <BlogBanner/>
            <BlogSection/>
            <Quest/>
            <Footer/>
            <CopyRight/>


            </>
      )
}
export default Blog;