import LOGO from "../assets/logo.png";
import { LinkTag } from "./LinkTag";
import { ButtonPrimary } from "./ButtonPrimary";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {ismenuOpen && (
        <div className="menu transition-all duration-1000 ease-linear menu-small absolute mt-[1rem] top-0 left-0 bg-[#40409b] w-full h-full z-[200]">
          <header className="flex w-full items-center justify-between px-[1rem] pt-[1rem]">
            <div className="navigatio-container__left-header__inner">
              <img
                src={LOGO}
                alt="website logo"
                className="h-8 w-8 object-cover"
              />
              <h1 className="text-white font-[600] text-xl">
                Maphari&apos;s Folio
              </h1>
            </div>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="menu flex items-center gap-1 text-white font-[500] border-[0.1px] px-2 py-1"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
              <span>CLOSE</span>
            </div>
          </header>
          <div className="py-7 px-5 w-full">
            <Link
              to="/"
              className="flex mb-2 rounded-xl items-center justify-between text-white text-lg w-full hover:ml-2 hover:bg-[#6767c9] px-3 py-2 transition-all duration-1000 ease-linear"
            >
              <span>Home</span>
              <i className="fa-solid fa-house"></i>
            </Link>
            <Link
              to="/about"
              className="flex mb-2 rounded-xl items-center justify-between text-white text-lg w-full hover:ml-2 hover:bg-[#6767c9] px-3 py-2 transition-all duration-1000 ease-linear"
            >
              <span>About</span>
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link
              to="/service"
              className="flex mb-2 rounded-xl items-center justify-between text-white text-lg w-full hover:ml-2 hover:bg-[#6767c9] px-3 py-2 transition-all duration-1000 ease-linear"
            >
              <span>Services</span>
              <i className="fa-solid fa-timeline"></i>
            </Link>
            <Link
              to="/portfolio"
              className="flex mb-2 rounded-xl items-center justify-between text-white text-lg w-full hover:ml-2 hover:bg-[#6767c9] px-3 py-2 transition-all duration-1000 ease-linear"
            >
              <span>Portfolio</span>
              <i className="fa-solid fa-paper-plane"></i>
            </Link>
            <Link
              to="/contact"
              className="flex mb-2 rounded-xl items-center justify-between text-white text-lg w-full hover:ml-2 hover:bg-[#6767c9] px-3 py-2 transition-all duration-1000 ease-linear"
            >
              <span>Contact</span>
              <i className="fa-solid fa-mobile"></i>
            </Link>
          </div>
        </div>
      )}
      <nav className="navigatio-container relative">
        <selection className="navigatio-container__left">
          <header className="navigatio-container__left-header">
            <div className="navigatio-container__left-header__inner">
              <img
                src={LOGO}
                alt="website logo"
                className="h-8 w-8 object-cover"
              />
              <h1 className="text-white font-[600] text-xl">
                Maphari&apos;s Folio
              </h1>
            </div>
            <ul className="flex items-center gap-2">
              <LinkTag name="Home" to="/home" />
              <LinkTag name="About" to="/about" />
              <LinkTag name="Service" to="/service" />
              <LinkTag name="Portfolio" to="portfolio" />
              <LinkTag name="Contact" to="contact" />
              <ButtonPrimary
                name="Download CV"
                to="https://drive.google.com/uc?export=download&id=1y3FtJ_noS4oRFRIw_lJSojX_c0UnQIMe"
                target="_blank"
                download="Maphari phumudzo resume.pdf"
              />
            </ul>
            <div
              className="menu flex items-center gap-1 text-white font-[500] border-[0.1px] px-2 py-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="fa-solid fa-bars text-lg"></i>
              <span>MENU</span>
            </div>
          </header>
          <main className=" lg flex flex-wrap items-center justify-center h-full">
            <div>
              <h1 className="text-[50px] text-center font-[800] main-header">
                Hello, my name is Maphari
                <div>Phumudzo. I am a</div>
                <div className="flex justify-center items-center main-para">
                  <p className="anim text-center">
                    Software <span className="text-[#FEB12F]">Engineer</span>
                  </p>
                </div>
              </h1>
              <p className="s-main-para mt-5 max-w-[50rem] text-center opacity-70 font-light">
                As a software engineer and UI/UX designer, I pride myself on
                being a versatile and passionateindividual. With a strong
                technical background in software engineering
              </p>
              <div className="btns flex flex-wrap justify-center items-center gap-4 mt-5">
                <Link
                  to="mailto:phumudzomaphari57@gmail.com"
                  className="btn-1 flex items-center gap-2 py-2 px-3 rounded-full transition-all duration-1000 ease-linear border hover:border-[#FEB12F]"
                >
                  <i className="fa-solid fa-envelope text-lg"></i>
                  <span className="text-[#FEB12F]">Email me</span>
                </Link>
                <button className="btn-2 flex items-center gap-2 py-2 px-3 rounded-full transition-all duration-1000 ease-linear border hover:border-[#FEB12F]">
                  <i className="fa-regular fa-circle-play text-lg"></i>
                  <span className="text-[#FEB12F]">Quick introduction</span>
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-7">
                <Link to="https://www.facebook.com/vhomaphari/" target="_bank">
                  <i className="fa-brands fa-facebook text-xl px-2 py-1 transition-all duration-1000 ease-linear hover:text-[#FEB12F] hover:cursor-pointer"></i>
                </Link>
                <Link to="https://www.instagram.com/maphari_pj/" target="_bank">
                  <i className="fa-brands fa-instagram text-xl px-2 py-1 transition-all duration-1000 ease-linear hover:text-[#FEB12F] hover:cursor-pointer"></i>
                </Link>
                <Link to="https://twitter.com/Maphari001" target="_bank">
                  <i className="fa-brands fa-twitter text-xl px-2 py-1 transition-all duration-1000 ease-linear hover:text-[#FEB12F] hover:cursor-pointer"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/phumudzo-maphari-56a652214/"
                  target="_bank"
                >
                  <i className="fa-brands fa-linkedin text-xl px-2 py-1 transition-all duration-1000 ease-linear hover:text-[#FEB12F] hover:cursor-pointer"></i>
                </Link>
                <Link
                  to="https://www.tiktok.com/@maphari_pj?lang=en"
                  target="_bank"
                >
                  <i className="fa-brands fa-tiktok text-xl px-2 py-1 transition-all duration-1000 ease-linear hover:text-[#FEB12F] hover:cursor-pointer"></i>
                </Link>
              </div>
            </div>
          </main>
        </selection>
      </nav>
    </>
  );
};
