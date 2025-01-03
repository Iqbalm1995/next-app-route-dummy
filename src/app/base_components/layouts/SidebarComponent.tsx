"use client";

import { classNames } from "@/app/helper/functionHelper";
import {
  NavigationItem,
  SidebarComponentProps,
} from "@/app/interfaces/MasterTypes";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { navigation } from "@/app/data/NavigationData";
import { Button } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

function SidebarComponent({
  sidebarOpen,
  setSidebarOpen,
  sidebarShow,
  setSidebarShow,
}: SidebarComponentProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  useEffect(() => {
    console.log("sidebarShow : ");
    console.log(sidebarShow);
  }, [sidebarShow]);

  return (
    <aside
      className={classNames(
        sidebarOpen ? "w-64" : "w-22",
        sidebarShow ? "translate-x-0" : "-translate-x-full",
        "transition-transform duration-300 ease-in-out",
        "sm:fixed sm:top-0 sm:left-0 sm:h-full z-50",
        "relative pl-4 pt-4 pb-4"
      )}
    >
      <div className="flex flex-col h-screen bg-white text-gray-800 rounded-2xl shadow">
        <div className="flex md:hidden items-center px-6 py-5 justify-between">
          <Button
            type="button"
            className="bg-transparent text-gray-500 hover:text-gray-800 font-bold py-2"
            onClick={() => setSidebarShow(false)}
          >
            <ArrowLeftIcon className="size-6" aria-hidden="true" />
          </Button>
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            className="w-8"
          />
        </div>
        <div className="hidden md:flex items-center justify-center px-4 py-7">
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
