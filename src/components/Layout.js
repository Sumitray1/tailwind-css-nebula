import React from "react";
function Layout({ children }) {
  const menuItems = [
    {
      title: "Home",
      paths: "/",
      icon: "",
    },
    {
      title: "About",
      path: "/abouts",
      icon: "",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "",
    },
    {
      title: "Contact",
      path: "/contacts",
      icon: "",
    },
  ];
  return (
    <div>
      {/* content */}
      <div className="content">{children}</div>
      {/* Footer */}
      <div className="fixed bottom-3  left-0 right-0">
        <div className="flex w-full justify-center ">
          {menuItems.map((menu) => (
            <div>
              {menu.title} {`${menu.path}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Layout;
