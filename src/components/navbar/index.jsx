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
  return (
    <div className="nav-bar-main-container w-full h-20 flex justify-center bg-milton-light items-center border-b text-md fixed z-40 top-0 py-5 px-[60px]">
      <div className="nav-wrapper flex justify-between items-center w-[1200px]">
        <div className="nav-brand flex items-center gap-x-2">
          <div className="nav-brand-logo p-[4px] bg-milton-blue rounded-sm"><TbTriangleFilled color={'black'} size={14}/></div>
          <div className="nav-brand-name text-milton-black  font-bold ">
            Milton
          </div>
        </div>
        <div className="nav-menu-list text-milton-gray flex gap-x-10">
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
        <div className="nav-login-console font-bold flex gap-x-2 items-center">
          <button className="login-btn bg-milton-blue py-2 px-4 rounded-xl text-milton-black">
            Login
          </button>
          <button className="get-started-btn  py-2 px-4 rounded-xl bg-milton-black">
            Get started
          </button>
        </div>
      </div>
    </div>
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
