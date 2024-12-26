"use client";

export default function AccountsRootLayout({
    children,
    assets,
    lastTransactions,
    myCard,
    debitCreditOverview,
    invoicesSent,
}) {
    return (
        <div className="bg-[#f5f7fa] h-full pl-[40px] pt-[24px] md:pl-[25px] md:pt-[20px]">
            {children}
            <div className="mb-[24px]">{assets}</div>
            <div className="flex gap-[30px] mb-[24px]">
                {lastTransactions}
                {myCard}
            </div>
            <div className="flex gap-[30px]">
                {debitCreditOverview}
                {invoicesSent}
            </div>
        </div>
    );
}