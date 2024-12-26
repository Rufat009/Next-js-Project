"use client";

import React from "react";
import Card from "./Card";

const BankCard = ({ balance, textColor, titleColor, cardNumber, image }) => {
    return (
        <Card width="300px" height="180px" padding="20px" backgroundImage="url('/path/to/image.jpg')">
            <div className="flex gap-5 mb-5">
                <div className="ml-auto">
                    <img src={image} alt="Bank Logo" />
                </div>
            </div>
            <h1 className={`text-[20px] font-semibold ${textColor || "text-black"}`}>
                ${balance}
            </h1>
            <h1 className={`text-[15px] font-semibold ${textColor || "text-black"}`}>
                Available Balance
            </h1>
            <h1 className={`text-[12px] font-normal ${titleColor || "text-[#718ebf]"}`}>
                {cardNumber}
            </h1>
            <div className="ml-auto flex">
                <div className="text-[22px] font-semibold ml-6">
                    {cardNumber}
                </div>
            </div>
        </Card>
    );
};

export default BankCard;