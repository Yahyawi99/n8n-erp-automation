import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
  faChartLine,
  faBoxesStacked,
  faCartShopping,
  faHandshakeAngle,
  faFileInvoiceDollar,
  faMagnifyingGlass,
  faGear,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/icons/logo.png";
import CloseSidebar from "../ui/CloseSidebar";

type Option = {
  name: string;
  icon: IconDefinition;
  subOptions?: Option[];
  sub?: boolean;
};

const sidebarOptions: Option[] = [
  {
    name: "Dashboard",
    icon: faChartLine,
  },
  {
    name: "Products",
    icon: faProductHunt,
    subOptions: [
      {
        name: "Inventory",
        icon: faBoxesStacked,
        sub: true,
      },
    ],
  },
  {
    name: "Orders",
    icon: faCartShopping,
  },
  {
    name: "Customers",
    icon: faHandshakeAngle,
  },
  {
    name: "Invoices",
    icon: faFileInvoiceDollar,
  },
  {
    name: "Analytics",
    icon: faMagnifyingGlass,
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-1/2 min-h-screen max-w-[350px] bg-gray-800 p-5 overflow-hidden">
      <div className="flex items-center justify-between py-2 pb-5 mb-8 border-b-2 border-gray-500">
        <div className="flex items-center gap-2.5">
          <img className="w-[40px]" src={logo} alt="logo" />
          <h1 className="text-[32px] font-extrabold text-white">FlowVentory</h1>
        </div>

        <CloseSidebar />
      </div>

      <div className="flex-1">
        <ul className="flex flex-col gap-4 text-amber-50">
          <Options data={sidebarOptions} />
        </ul>
      </div>

      <div>
        <button className="flex items-center gap-2 text-amber-50 cursor-pointer text-[18px]">
          <FontAwesomeIcon icon={faGear} width={15} />
          <p>Settings</p>
        </button>
      </div>
    </aside>
  );
};

const Options = ({ data }: { data: Option[] }) => {
  return data.map((option: Option) => {
    const { name, icon, subOptions, sub } = option;
    return (
      <li className="cursor-pointer">
        <div className={`flex items-center gap-2 ${subOptions && "mb-1"}`}>
          <FontAwesomeIcon icon={icon} width={sub ? 11 : 15} />
          <p className={`${sub ? "text-[16px]" : "text-[20px]"}`}>{name}</p>
        </div>

        {subOptions && (
          <ul className="flex items-center gap-2 ml-12 text-[16px]">
            <Options data={subOptions} />
          </ul>
        )}
      </li>
    );
  });
};

export default Sidebar;
