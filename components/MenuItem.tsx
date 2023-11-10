import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  title: string;
  icon: IconProp;
  path: string;
};

const MenuItem = ({ title, icon, path }: MenuItemProps) => {
  return (
    <Link href={path}>
      <div className="flex items-center gap-4 text-white font-light md:mb-8 mr-6">
        <FontAwesomeIcon icon={icon} size="xl" className=" w-6" />
        <p className="hidden xl:block">{title}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
