"use client";

import { classNames } from "@/app/helper/functionHelper";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { navigation } from "@/app/data/NavigationData";
import HeadingPage from "../HeadingPage";
import { Card, CardBody, CardHeader } from "../Card";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "/assets/img/default-avatar.png",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const paths = ["Home", "Dashboard"];
const title = "Dashboard";

export default function BasicLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setSidebarShow(!isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex">
        {/* Side Menu */}
        <aside
          className={classNames(
            sidebarOpen ? "sidebar-width" : "w-22",
            sidebarShow ? "translate-x-0" : "-translate-x-full",
            " transition-transform duration-500 ease-in-out",
            "md:relative fixed sm:fixed sm:top-0 sm:left-0 sm:z-50",
            "pl-4 pb-4 sidebar-top-padding md:pt-4"
          )}
        >
          <div
            className={classNames(
              sidebarOpen ? "px-3" : "px-2",
              "flex flex-col pb-10 sticky top-4 bg-white text-gray-800 rounded-xl shadow-lg transition-all duration-500"
            )}
          >
            <div className="flex md:hidden items-center px-6 py-5 justify-center">
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
            <nav className={classNames("flex-grow py-5 space-y-2")}>
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-500",
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
                            ? "ml-3 transition-all duration-300 delay-200"
                            : "hidden"
                        )}
                      >
                        {item.name}
                      </span>
                    </span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 px-2">
          {/* Top Nav */}
          <nav
            className={`sticky top-3 p-2 ${
              isScrolled
                ? "bg-white/30 backdrop-blur-lg mx-4 rounded-xl shadow " // Glass blur effect when scrolled
                : "bg-transparent " // Solid white background when at the top
            } sm:w-full md:w-auto md:px-6 lg:px-2 mt-4 z-2 transition-all duration-300`}
          >
            <div className="mx-auto px-4 flex items-center justify-between">
              <div className="hidden md:flex">
                <Button
                  type="button"
                  className="bg-transparent text-gray-800 hover:text-blue-500 font-bold py-2"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Bars3Icon className="size-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="flex md:hidden ml-2">
                <Button
                  type="button"
                  className="bg-transparent text-gray-800 hover:text-blue-500 font-bold py-2"
                  onClick={() => setSidebarShow(!sidebarShow)}
                >
                  <Bars3Icon className="size-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="flex items-center">
                <Button
                  type="button"
                  className="bg-transparent text-gray-800 hover:text-blue-500 p-2"
                >
                  <BellIcon aria-hidden="true" className="size-6" />
                </Button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex items-center text-sm focus:ring-2 focus:ring-offset-2">
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="size-12 rounded-full border-2 border-gray-800 hover:border-blue-500"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-xl py-1 shadow-lg">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-gray-800 hover:text-blue-500"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </nav>

          <main>
            {/* Your content */}
            <div className="grid gap-2 pt-2 grid-cols-1 mb-10 text-gray-800 ">
              <HeadingPage titlePage={title} pathPage={paths} />
              {/* Content Here */}
              <div className="p-4 grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1 bg-blue-600 text-white rounded-preset shadow p-4 py-8 justify-center items-center flex flex-col">
                  <h1 className="text-3xl font-semibold ">A1</h1>
                </div>
                <div className="col-span-3 md:col-span-1 bg-white rounded-preset shadow p-4 py-8 justify-center items-center flex flex-col">
                  <h1 className="text-3xl font-semibold ">A2</h1>
                </div>
                <div className="col-span-3 md:col-span-1 bg-white rounded-preset shadow p-4 py-8 justify-center items-center flex flex-col">
                  <h1 className="text-3xl font-semibold ">A3</h1>
                </div>
                <div className="col-span-3 md:col-span-2">
                  <Card>
                    <>
                      <CardHeader className="bg-blue-600">
                        <h2 className="text-white text-lg font-semibold">
                          Card Header
                        </h2>
                      </CardHeader>
                      <CardBody className="min-h-[220px]">
                        <>
                          <h1 className="text-3xl font-semibold ">B1</h1>
                          <p className=" text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam viverra euismod odio, gravida pellentesque
                            urna varius vitae.
                          </p>
                        </>
                      </CardBody>
                    </>
                  </Card>
                </div>
                <div className="col-span-3 md:col-span-1 ">
                  <Card>
                    <>
                      <CardHeader>
                        <h2 className="text-gray-800 text-lg font-semibold">
                          Card Header
                        </h2>
                      </CardHeader>
                      <CardBody className="min-h-[220px]">
                        <>
                          <h1 className="text-3xl font-semibold ">B1</h1>
                          <p className=" text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam viverra euismod odio, gravida pellentesque
                            urna varius vitae.
                          </p>
                        </>
                      </CardBody>
                    </>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
