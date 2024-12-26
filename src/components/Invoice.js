"use client";

import React from "react";
import Card from "./Card";

const Invoice = React.memo(({ title, amount, color, icon, date }) => {
    return (
        <Card width="300px" height="60px">
            <div className="flex">
                <div
                    className="w-[60px] h-[60px] flex items-center justify-center mr-[20px] rounded-[20px]"
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>
                <div>
                    <h1 className="text-[#b1b1b1] text-[16px] font-[500] font-inter mb-[7px]">
                        {title}
                    </h1>
                    <h1 className="text-[#718ebf] text-[15px] font-[400] font-inter">
                        {date}
                    </h1>
                </div>
                <h1 className="text-[#718ebf] text-[16px] font-[400] font-inter ml-auto">
                    ${amount}
                </h1>
            </div>
        </Card>
    );
});

export default Invoice;