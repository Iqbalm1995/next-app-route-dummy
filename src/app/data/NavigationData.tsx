"use client";

import { NavigationItem } from "../interfaces/MasterTypes";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  FolderIcon,
  ChartPieIcon,
} from "@heroicons/react/16/solid";

export const navigation: NavigationItem[] = [
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
