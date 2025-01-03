"use client";

import { ReactNode } from "react";

export interface User {
  name: string;
  email: string;
  imageUrl: string;
}

export interface UserNavigationItem {
  name: string;
  href: string;
}

export interface NavigationSubItem {
  name: string;
  href: string;
  current: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon: ReactNode; // Icon component, such as from Heroicons
  subMenu?: NavigationSubItem[]; // Optional submenu items
}

//
export interface SidebarComponentProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarShow: boolean;
  setSidebarShow: (show: boolean) => void;
}
