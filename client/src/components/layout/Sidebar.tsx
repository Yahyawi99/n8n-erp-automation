import React from "react";
import logo from "../../assets/icons/logo.png";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/2 max-w-[350px] bg-gray-800 p-5">
      <div>
        <div className="flex items-center">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold font-dancing">Flowventory</h1>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
