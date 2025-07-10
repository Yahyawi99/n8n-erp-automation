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
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/icons/logo.png";

type Option = {
  name: string;
  icon: IconDefinition;
  subOptions?: Option[];
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
    <aside className="w-1/2 min-h-screen max-w-[350px] bg-gray-800 p-5 overflow-hidden">
      <div className="flex items-center justify-between py-2 pb-5 mb-8 border-b-2 border-gray-500">
        <div className="flex items-center gap-2.5">
          <img className="w-[40px]" src={logo} alt="logo" />
          <h1 className="text-[32px] font-extrabold text-white">FlowVentory</h1>
        </div>

        <CloseIcon />
      </div>

      <div>
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
        <div className={`flex items-center gap-2 ${subOptions && "mb-1.5"}`}>
          <FontAwesomeIcon icon={icon} width={15} />
          <p className="text-[20px]">{name}</p>
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
      className="fill-gray-400 cursor-pointer opacity-75 w-[32px] h-[32px]"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4 2.999c-.478 0-1 .379-1 1v16c0 .62.519 1 1 1h16c.621 0 1-.52 1-1v-16c0-.478-.379-1-1-1zm.5 16.5v-15h9.5v15zm3.658-11.321c-.137-.124-.299-.179-.458-.179-.358 0-.7.284-.7.705v6.59c0 .422.342.705.7.705.159 0 .321-.055.458-.178 1.089-.982 2.684-2.417 3.576-3.22.17-.153.266-.371.266-.601 0-.229-.096-.448-.265-.601-.893-.803-2.487-2.239-3.577-3.221z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Sidebar;
