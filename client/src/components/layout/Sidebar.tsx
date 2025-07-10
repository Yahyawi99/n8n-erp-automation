import React from "react";
// icons
import logo from "../../assets/icons/logo.png";

type Option = {
  name: string;
  icon: string;
  subOptions?: Option[];
};

const sidebarOptions: Option[] = [
  {
    name: "Dashboard",
    icon: "",
  },

  {
    name: "Products",
    icon: "",
    subOptions: [
      {
        name: "Inventory",
        icon: "",
      },
    ],
  },

  {
    name: "Orders",
    icon: "",
  },

  {
    name: "Customers",
    icon: "",
  },

  {
    name: "Invoices",
    icon: "",
  },

  {
    name: "Analytics",
    icon: "",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/2 min-h-screen max-w-[350px] bg-gray-800 p-5 overflow-hidden">
      <div className="flex items-center justify-between py-2 mb-5">
        <div className="flex items-center gap-2.5">
          <img className="w-[40px]" src={logo} alt="logo" />
          <h1 className="text-[32px] font-extrabold text-white">FlowVentory</h1>
        </div>

        <CloseIcon />
      </div>

      <div className="h-full">
        <ul className="flex flex-col gap-5 text-amber-50">
          <Options data={sidebarOptions} />
        </ul>
      </div>
    </aside>
  );
};

const Options = ({ data }: { data: Option[] }) => {
  return data.map((option: Option) => {
    const { name, icon, subOptions } = option;
    return (
      <li className="cursor-pointer text-[18px]">
        <div className={subOptions && "mb-1.5"}>
          {/* <img src={icon} alt="option-icon" /> */}
          <p>{name}</p>
        </div>

        {subOptions ? (
          <ul className="flex items-center gap-2 ml-10">
            <Options data={subOptions} />
          </ul>
        ) : (
          ""
        )}
      </li>
    );
  });
};

const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      className="fill-gray-400 cursor-pointer opacity-75"
    >
      <path d="M24 23h-24v-22h24v22zm-2-20h-14v18h14v-18zm-4 4l-6 5 6 5v-10z" />
    </svg>
  );
};

export default Sidebar;
