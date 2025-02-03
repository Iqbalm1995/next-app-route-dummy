import React from "react";
import Breadcrumb from "./Breadcrumbs";

export interface HeadingProps {
  titlePage: string;
  pathPage: string[];
}

const HeadingPage: React.FC<HeadingProps> = ({ titlePage, pathPage }) => {
  return (
    <div className="flex flex-row p-4 justify-between items-center ">
      {/* Title Page as an H2 */}
      <h1 className="text-3xl font-semibold text-gray-800">{titlePage}</h1>

      {/* Breadcrumb component with the pathPage prop */}
      <Breadcrumb pathPage={pathPage} />
    </div>
  );
};
export default HeadingPage;
