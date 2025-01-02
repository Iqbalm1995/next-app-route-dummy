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
import { useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { navigation } from "@/app/data/NavigationData";

const user: User = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "/assets/img/default-avatar.png",
};

const userNavigation: UserNavigationItem[] = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function BasicLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex">
        {/* Side Menu */}
        <SidebarComponent
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen} // Pass both state and setter function as props
        />

        {/* Main Content */}
        <div className="flex-1">
          <Disclosure as="nav" className="p-2 sm:px-6 lg:px-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
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
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    <Button
                      type="button"
                      className="bg-transparent text-gray-500 hover:text-gray-800 font-bold py-2"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      <Bars3Icon className="size-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex items-center">
                  <div className="shrink-0">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="size-8"
                    />
                  </div>
                </div>
                <div className="block">
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
