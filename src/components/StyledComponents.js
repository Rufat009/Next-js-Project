"use client";

export const StyledTitle = ({ children }) => (
    <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] md:text-[18px] md:mb-[16px]">
        {children}
    </h1>
);

export const StyledTitleLeft = ({ children }) => (
    <h1 className="text-[#343c6a] font-inter font-semibold ml-auto text-[17px] mb-[21px] md:text-[15px] md:mb-[16px]">
        {children}
    </h1>
);

export const StyledCardsTitles = ({ children }) => (
    <div className="flex items-baseline">
        {children}
    </div>
);

export const StyledLayout = ({ children }) => (
    <div className="bg-[#f5f7fa] h-full pl-[40px] pt-[24px] md:pl-[25px] md:pt-[20px]">
        {children}
    </div>
);

export const StyledCards = ({ children }) => (
    <div className="flex gap-[30px]">
        {children}
    </div>
);

export const StyledCardsMain = ({ children }) => (
    <div className="w-[730px] h-[282px]">
        {children}
    </div>
);