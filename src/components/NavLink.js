"use client";

import Link from "next/link";
import React from "react";

const NavLink = ({ children, url, title, isActive }) => {
    return (
        <Link href={url} passHref>
            <div className={`flex items-center h-[50px] font-inter font-medium text-[18px] mb-[21px] ${isActive ? "text-[#2D60FF]" : "text-[#B1B1B1]"}`}>
                <div className={`w-[5px] ${isActive ? "bg-[#2D60FF]" : "bg-transparent"} rounded-tr-[10px] rounded-br-[10px] mr-[25px]`} />
                <div className="flex items-center">
                    {children}
                    <h1 className="ml-[26px] md:ml-[20px]">{title}</h1>
                </div>
            </div>
        </Link>
    );
};

export default React.memo(NavLink);