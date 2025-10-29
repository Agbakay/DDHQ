import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Partners from "./Pages/Partners";
import Waitlist from "./Pages/Waitlist";
import AppDemo from "./Pages/AppDemo";
import Footer from "./components/Footer";
import Blog from "./Pages/Blog";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Dispute_Resolution_policy from "./Pages/Dispute_Resolution_Policy";
import Terms_Conditions from "./Pages/Terms_Conditions";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/app-demo" element={<AppDemo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="dispute_resolution_policy"
          element={<Dispute_Resolution_policy />}
        />
        <Route path="terms_&_condition" element={<Terms_Conditions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
