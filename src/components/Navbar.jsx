import { useState } from "react";
import styles from "../style";
import { close, logos, menu, cart } from "../assets";
import { navLinks } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (title) => {
    if (title == "Log in") {
      await loginWithRedirect({
        appState: {
          returnTo: "/",
        },
        authorizationParams: {
          prompt: "login",
        },
      });
      setActive(title);
    } else if (title == "Home") {
      navigate("/");
    }
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-2.5 justify-between items-center navbar">
          <img src={logos} alt="hoobank" className="w-[100px] h-[70px]" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              >
                <div
                  onClick={() => {
                    handleClick(nav.title);
                  }}
                >
                  {nav.title}
                </div>
              </li>
            ))}
            <img src={cart} className="mx-9 cursor-pointer w-[28px] h-[28px]" />
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => handleClick(nav.title)}
                  >
                    {nav.title}
                  </li>
                ))}
                <img src={cart} className="w-[28px] h-[28px] my-5 mx-2" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
