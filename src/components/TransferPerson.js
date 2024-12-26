"use client";

import Image from "next/image";
import React from "react";

const TransferPerson = React.memo(({ image, name, description }) => {
    return (
        <div className="h-[127px] w-[85px] flex flex-col items-center text-center mr-[28px]">
            <Image alt="photo" src={image} width="70" height="70" />
            <h1 className="text-[#232323] text-[16px] font-[400] font-inter">{name}</h1>
            <h1 className="text-[#718ebf] text-[15px] font-[400] m-0">{description}</h1>
        </div>
    );
});

export default TransferPerson;