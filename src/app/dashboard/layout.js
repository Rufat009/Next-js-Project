"use client";

import { StyledLayout } from "@/components/StyledComponents";
import styled from "styled-components";

export default function DashboardRootLayout({
    children,
    activityChart,
    balanceChart,
    cardsList,
    expenseChart,
    transactionList,
    transferSection,
}) {
    return (
        <StyledLayout>
             {children}
            <div>
                <div className="flex gap-[30px] mb-[30px] md:gap-[25px]">
                    {cardsList}
                    {transactionList}
                </div>
                <div className="flex gap-[30px] mb-[30px] md:gap-[25px]">
                    {activityChart}
                    {expenseChart}
                </div>
                <div className="flex gap-[30px] mb-[30px] md:gap-[25px]">
                    {transferSection}
                    {balanceChart}
                </div>
            </div>
        </StyledLayout>
    );
}

