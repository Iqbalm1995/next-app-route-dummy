"use client";

import { classNames } from "@/app/helper/functionHelper";
import {
  NavigationItem,
  User,
  UserNavigationItem,
} from "@/app/interfaces/MasterTypes";
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  FolderIcon,
  ChartPieIcon,
} from "@heroicons/react/16/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const user: User = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "/assets/img/default-avatar.png",
};

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "#",
    current: true,
    icon: <ChartPieIcon className="h-6 w-6" />,
  },
  {
    name: "Team",
    href: "#",
    current: false,
    icon: <FolderIcon className="h-6 w-6" />,
    subMenu: [
      { name: "Developers", href: "#", current: false },
      { name: "Designers", href: "#", current: false },
    ],
  },
  {
    name: "Projects",
    href: "#",
    current: false,
    icon: <FolderIcon className="h-6 w-6" />,
  },
  {
    name: "Calendar",
    href: "#",
    current: false,
    icon: <FolderIcon className="h-6 w-6" />,
  },
  {
    name: "Reports",
    href: "#",
    current: false,
    icon: <FolderIcon className="h-6 w-6" />,
  },
];

const userNavigation: UserNavigationItem[] = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function BasicLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); // Track open submenus

  const toggleSubMenu = (index: number) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex">
        {/* Side Menu */}
        <aside
          className={classNames(
            sidebarOpen ? "w-64" : "w-20",
            "bg-white text-gray-800 border flex-shrink-0 transition-all duration-300"
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
                        className={classNames(sidebarOpen ? "ml-3" : "hidden")}
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

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <Disclosure as="nav" className="bg-white shadow p-2 sm:px-6 lg:px-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="hidden md:block ">
                  <div className="flex items-baseline space-x-4">
                    <Button
                      type="button"
                      className="bg-transparent text-gray-400 hover:text-gray-600 font-bold py-2"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      <Bars3Icon className="size-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="size-8"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6 gap-4">
                    <Button
                      type="button"
                      className="bg-transparent text-gray-400 hover:text-gray-600 p-2"
                    >
                      <BellIcon aria-hidden="true" className="size-6" />
                    </Button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src={user.imageUrl}
                            className="size-12 rounded-full border-2 border-gray-300 hover:border-blue-500 active:border-blue-600"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                            >
                              {item.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>

          <main>{/* Your content */}</main>
        </div>
      </div>
    </>
  );
}
