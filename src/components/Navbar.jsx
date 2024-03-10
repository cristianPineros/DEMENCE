import { useState, useEffect } from "react";
import {styles,layout} from "../style";
import { close, logos, menu, cart } from "../assets";
import { navLinks } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ openShoppingCart }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  /*
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);




  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.scrollY;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
*/
  const handleLogin = async () => {
    loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };
  const handleLogOut = async () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

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
      navigate(`/`);
    }
   else if (title == "New Collection") {
    navigate(`/newcollection`);
  }
    
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-2.5 justify-between items-center navbar">
          <img src={logos} alt="hoobank" className=" w-[100px] h-[70px]" />
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

            {!isAuthenticated && (
              <div
                className={`mx-9 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                onClick={() => {
                  handleLogin();
                }}
              >
                Log In
              </div>
            )}

            {isAuthenticated && (
              <div
                className={`mx-9 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log Out
              </div>
            )}

            {isAuthenticated && (
              <div
                className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                onClick={()=>{
                  navigate('/purchases')
                }}
              >
                Purchases
              </div>
            )}

            <img
              src={cart}
              className="mx-9 cursor-pointer w-[28px] h-[28px]"
              onClick={openShoppingCart}
            />
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
              } p-6 bg-black-gradient  top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl sidebar`}
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
                {!isAuthenticated && (
                  <div
                    className={`my-5 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Log In
                  </div>
                )}

                {isAuthenticated && (
                  <div
                    className={`my-5 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                    onClick={() => {
                      handleLogOut();
                    }}
                  >
                    Log Out
                  </div>
                )}

                {isAuthenticated && (
                  <div
                    className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                  >
                    Profile
                  </div>
                )}
                <img
                  src={cart}
                  className="w-[28px] h-[28px] my-5 mx-2"
                  onClick={openShoppingCart}
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
