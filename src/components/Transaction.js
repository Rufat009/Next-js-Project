"use client";

import React from "react";

const Transaction = React.memo(({ margin, icon, title, date, amount, type }) => {
    return (
        <div className={`w-[301px] h-[55px] ${margin || "0"}`}>
            <div className="flex">
                <div className="rounded-full bg-[#fff5d9] h-[55px] w-[55px] mr-[17px] flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h1 className="font-inter font-medium text-[16px] text-[#232323]">
                        {title}
                    </h1>
                    <h1 className="font-inter font-normal text-[15px] text-[#718ebf]">
                        {date}
                    </h1>
                </div>
                <div className="ml-auto flex items-center">
                    {type === "Deposit" ? (
                        <h1 className="text-[#41d4a8]">
                            +${amount.toLocaleString()}
                        </h1>
                    ) : type === "Withdrawal" ? (
                        <h1 className="text-[#ff4b4a]">
                            -${amount.toLocaleString()}
                        </h1>
                    ) : null}
                </div>
            </div>
        </div>
    );
});

export default React.memo(Transaction);