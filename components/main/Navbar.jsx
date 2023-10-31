import React from "react";
// import { Link } from "react-scroll";
import NLink from "next/link";


const Navbar = () => {
  

  return (
    <div>
      <div className="flex flex-row justify-between md:px-32 px-5 p-5 gap-16">
        <div className=" flex items-center p-2">
          <NLink href="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </NLink>
        </div>

        <nav className=" hidden md:flex items-center p-2 gap-5 ">
          {/* <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="trainers"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Trainers
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Contact Us
          </Link> */}
          <NLink
            href="/exercise"
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Exercises
          </NLink>
          <NLink
            href="/nutrition"
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Meal Plans
          </NLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
