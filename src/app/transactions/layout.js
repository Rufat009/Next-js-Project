"use client";

import { StyledLayout } from "@/components/StyledComponents";
import styled from "styled-components";

export default function TransactionsRootLayout({
    children,
    cardsList,
    monthlyExpensesChart,
    allTransactions,
}) {
    return (
        <StyledLayout>
           <div className="flex mb-[24px] gap-[30px]">
                {cardsList}
                {monthlyExpensesChart}
            </div>
            <div>{allTransactions}</div>
            {children}
        </StyledLayout>
    );
}


