import React from "react";

export interface BreadcrumbProps {
  pathPage: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathPage }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      {pathPage.map((path, index) => (
        <div key={index} className="flex items-center">
          {/* Breadcrumb item */}
          <a
            href={`/${path.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {path}
          </a>
          {/* Separator */}
          {index < pathPage.length - 1 && <span className="mx-2">/</span>}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
