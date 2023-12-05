import { useState } from "react";
import { BsHammer } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { TbTriangleFilled } from "react-icons/tb";

const navLink = [
  {
    id: 1,
    linkName: "Features",
    path: "#features",
  },
  {
    id: 2,
    linkName: "Testimonial",
    path: "#testimonial",
  },
  {
    id: 3,
    linkName: "Pricing",
    path: "#pricing",
  },
  {
    id: 4,
    linkName: "FAQs",
    path: "#faq",
  },
  {
    id: 5,
    linkName: "Blog",
    path: "#blog",
  },
];

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <div className="nav-bar-main-container w-full h-20  flex justify-center bg-milton-light items-center border-b text-md fixed z-40 top-0 py-5 px-[24px] smx:px-[60px]">
        <div className="nav-wrapper flex justify-between items-center w-[1200px]">
          <div className="nav-brand flex items-center gap-x-2">
            <div className="nav-brand-logo p-[4px] bg-milton-blue rounded-sm">
              <TbTriangleFilled color={"black"} size={14} />
            </div>
            <div className="nav-brand-name text-milton-black  font-bold ">
              Milton
            </div>
          </div>
          <div className="nav-menu-list  hidden smx:flex text-milton-gray  gap-x-10">
            {navLink.map((nav, index) => {
              const { id, path, linkName } = nav;
              return (
                <NavLink
                  key={`nav-link-${index}`}
                  linkName={linkName}
                  linkPath={path}
                  id={`nav-link-${id}`}
                />
              );
            })}
          </div>
          <div className="nav-login-console font-bold hidden smx:flex gap-x-2 items-center">
            <button className="login-btn bg-milton-blue py-2 px-4 rounded-xl text-milton-black">
              Login
            </button>
            <button className="get-started-btn  py-2 px-4 rounded-xl bg-milton-black">
              Get started
            </button>
          </div>
          <div className="hamburger-container">
            <button
              className="hamburger text-milton-black"
              onClick={() => setNavToggle(!navToggle)}
            >
              {navToggle ? (
                <RxHamburgerMenu size={32} />
              ) : (
                <RxCross2 size={32} />
              )}
            </button>
          </div>
        </div>
      </div>
      {!navToggle && (
        <div className="nav-mobile-menu w-screen h-max fixed top-20 bg-milton-light text-center p-8 box-border flex flex-col gap-y-6 z-[80]">
          <div className="nav-menu-list  flex flex-col gap-y-6 justify-center text-milton-gray  ">
            {navLink.map((nav, index) => {
              const { id, path, linkName } = nav;
              return (
                <NavLink
                  key={`nav-link-${index}`}
                  linkName={linkName}
                  linkPath={path}
                  id={`nav-link-${id}`}
                />
              );
            })}
          </div>
          <div className="nav-login-console font-bold flex flex-col gap-y-4 ">
            <button className="login-btn bg-milton-blue w-fit mx-auto py-2 px-4 rounded-xl text-milton-black">
              Login
            </button>
            <button className="get-started-btn  py-2 px-4 w-fit mx-auto rounded-xl bg-milton-black">
              Get started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

const NavLink = ({ linkName, linkPath, id }) => {
  return (
    <a
      className="nav-menu-list-item font-bold hover:text-milton-black"
      href={linkPath}
    >
      {linkName}
    </a>
  );
};
