import React from "react";
import { Link } from "react-router-dom";
function Layout({ children }) {
  // const location = useLocation();
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-smile-line",
    },
    {
      title: "About",
      path: "/abouts",
      icon: "ri-information-line",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-user-location-fill",
    },
    {
      title: "Contact",
      path: "/contacts",
      icon: "ri-contacts-fill",
    },
  ];
  return (
    <div>
      {/* Footer */}
      <div className="fixed top-0  left-0 right-0 mob:bg-primary">
        <div className="flex  justify-center ">
          {menuItems.map((menu, index) => (
            <div className="flex flex-col justify-space items-center ">
              {/* {location.pathname === menu.path && (
                <div className="h-10 w-20 bg-primary rounded-t-full  text-center pt-3">
                  <i className={`${menu.icon} text-white text-xl  `}></i>
                </div>
              )} */}
              <div
                className={`px-20 bg-red py-4  mob:px-3  ${index === 0 && "rounded-l"} ${
                  index === menuItems.length - 1 && "rounded-r"
                }
                flex items-center justify-center space-x-2 mob:space-x-1`}
              >
                <i className={`${menu.icon} text-secondary text-xl  mob:text-base `}></i>

                <Link to={menu.path} className="text-secondary text-xl mob:text-base">
                  {menu.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* content */}
      <div className=" ">{children}</div>
    </div>
  );
}
export default Layout;
