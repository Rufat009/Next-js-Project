"use client";

import React from "react";
import Card from "./Card";

const Asset = React.memo(({ title, amount, color, icon }) => {
    return (
        <Card width="255px" height="120px" padding={"25px 36px 25px 36px"}>
            <div className="flex">
                <div
                    className="flex items-center justify-center w-[70px] h-[70px] mr-[15px] rounded-[20px]"
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>
                <div>
                    <h1 className="text-[#718ebf] text-[16px] font-[400] font-inter mb-[7px]">
                        {title}
                    </h1>
                    <h1 className="text-[#232323] text-[25px] font-[600] font-inter">
                        ${amount.toLocaleString()}
                    </h1>
                </div>
            </div>
        </Card>
    );
});

export default Asset;