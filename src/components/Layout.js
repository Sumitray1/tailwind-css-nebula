import React from "react";
import { Link, useLocation } from "react-router-dom";
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
      <div className="fixed top-0  left-0 right-0">
        <div className="flex w-full justify-center ">
          {menuItems.map((menu, index) => (
            <div className="flex flex-col justify-end items-center">
              {/* {location.pathname === menu.path && (
                <div className="h-10 w-20 bg-primary rounded-t-full  text-center pt-3">
                  <i className={`${menu.icon} text-white text-xl  `}></i>
                </div>
              )} */}
              <div
                className={`px-20 bg-red py-4   ${index === 0 && "rounded-l"} ${
                  index === menuItems.length - 1 && "rounded-r"
                }
                flex items-center justify-center space-x-2`}
              >
                <i className={`${menu.icon} text-secondary text-xl  `}></i>

                <Link to={menu.path} className="text-secondary text-xl">
                  {menu.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* content */}
      <div className="content">{children}</div>
    </div>
  );
}
export default Layout;
