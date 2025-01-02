"use client";

import { classNames } from "@/app/helper/functionHelper";
import {
  NavigationItem,
  SidebarComponentProps,
} from "@/app/interfaces/MasterTypes";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { navigation } from "@/app/data/NavigationData";

function SidebarComponent({
  sidebarOpen,
  setSidebarOpen,
}: SidebarComponentProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); // Track open submenus

  const toggleSubMenu = (index: number) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <aside
      className={classNames(
        sidebarOpen ? "w-64" : "w-20",
        "hidden md:block bg-white text-gray-800 m-4 rounded-2xl shadow flex-shrink-0 transition-all duration-300"
      )}
    >
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-center px-4 py-7">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            className="w-8"
          />
        </div>
        <nav
          className={classNames(
            sidebarOpen ? "px-4" : "px-2",
            "flex-grow py-5 space-y-2"
          )}
        >
          {navigation.map((item, index) => (
            <div key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-blue-800 text-white"
                    : "text-gray-700 hover:bg-blue-500 hover:text-white",
                  sidebarOpen ? "justify-between" : "justify-center",
                  "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all"
                )}
                aria-current={item.current ? "page" : undefined}
                onClick={() => toggleSubMenu(index)}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span
                    className={classNames(
                      sidebarOpen
                        ? sidebarOpen
                          ? "ml-3 transition-all duration-300 delay-200"
                          : "hidden"
                        : "hidden"
                    )}
                  >
                    {item.name}
                  </span>
                </span>
                {item.subMenu && sidebarOpen && (
                  <button className="ml-auto focus:outline-none">
                    {openSubMenu === index ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </button>
                )}
              </a>
              {/* Submenu */}
              {item.subMenu && openSubMenu === index && sidebarOpen && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-gray-700 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-2 text-sm font-medium transition-all"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default SidebarComponent;
