import React from "react";
import img from "../assets/header_img.png";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Signup from "./Signup";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        >
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Explore homes that fit your dreams
          </h2>
          <div className="space-x-6 mt-16">
            <Link
              className="border border-white px-8 py-3 rounded"
              to="/projects"
            >
              Projects
            </Link>
            <Link className="bg-blue-500 px-8 py-3 rounded" to="/signup">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      <About />
      <Projects />
      <Testimonials />
      <Signup />
    </>
  );
};

export default Home;
