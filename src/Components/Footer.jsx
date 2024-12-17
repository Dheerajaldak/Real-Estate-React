import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 px-4 sm:px-8 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="logo" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nemo ut
            quam, quis incidunt nihil, amet, provident in id qui recusandae
            commodi!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg sm:text-base md:text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link className="hover:text-white" to="/home">Home</Link>
            <Link className="hover:text-white" to="/about">About us</Link>
            <Link className="hover:text-white" to="/signup">Contact us</Link>
            <Link className="hover:text-white" to="/home">Privacy</Link>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg sm:text-base md:text-lg font-bold mb-4">Social</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a
              className="hover:text-white social-link flex items-center gap-2"
              href="https://www.linkedin.com/in/dheeraj-aldak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin />
            </a>
            <a
              className="hover:text-white social-link flex items-center gap-2"
              href="https://github.com/Dheerajaldak"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub />
            </a>
            <a
              className="hover:text-white social-link flex items-center gap-2"
              href="https://www.instagram.com/dheeraj_aldak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagram />
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg sm:text-base md:text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
            quibusdam.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none w-full text-white"
            required
            />
            <button
              onClick={() => toast("Wow email send successfully!")}
              className="py-2 px-4 rounded bg-blue-500 text-white w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright {new Date().getFullYear()} © Dheeraj Aldak. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;