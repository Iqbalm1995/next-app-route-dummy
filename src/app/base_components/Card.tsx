import React from "react";
import Breadcrumb from "./Breadcrumbs";

export interface HeadingProps {
  titlePage: string;
  pathPage: string[];
}

export function Card({
  children,
  className,
  ...rest
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`box bg-white shadow-lg rounded-lg overflow-hidden ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...rest
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`p-4 border-b-[1px] border-gray-200 ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
  ...rest
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`p-6 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...rest
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`p-4 border-t ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}
