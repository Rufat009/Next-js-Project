"use client";

import React from "react";

const Card = React.memo(({ children, backgroundImage, border, margin, width, height, padding }) => {
    return (
        <div
            className={`rounded-[25px] bg-white text-[#343c6a] font-lato ${padding || ""} ${margin || ""}`}
            style={{
                backgroundImage: backgroundImage || "none",
                border: border || "none",
                width: width || "auto",
                height: height || "auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {children}
        </div>
    );
});

export default Card;