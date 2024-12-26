"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Card from "@/components/Card";
import { StyledTitle } from "./StyledComponents";

const WithdrawalIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
            fill="#718EBF"
        />
    </svg>
);

const DepositIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z"
            fill="#718EBF"
        />
    </svg>
);

const TransactionsTable = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [transactions, setTransactions] = useState([]);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('/api/transactions');
                const data = await response.json();
                setTransactions(data.transactions);
            } catch (error) {
                console.error('Failed to fetch transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    const filteredTransactions = useMemo(() => {
        return transactions.filter((transaction) => {
            if (activeFilter === "All") return true;
            if (activeFilter === "Income") return transaction.Type === "Deposit";
            if (activeFilter === "Expense") return transaction.Type === "Withdrawal";
            return true;
        });
    }, [transactions, activeFilter]);

    const totalPages = useMemo(() => Math.ceil(filteredTransactions.length / itemsPerPage), [filteredTransactions.length]);
    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
    }, [filteredTransactions, currentPage, itemsPerPage]);

    const handlePageChange = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);

    if (!(transactions.length > 0)) {
        return (
            <Card height="412px" width="635px">
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    return (
        <div>
            <div className="flex mb-[25px] gap-[82px] border-b border-[#EBEEF2] w-[1110px]">
                <button
                    className={`py-[7px] px-[8px] pb-[16px] font-inter text-[16px] font-medium cursor-pointer ${activeFilter === "All" ? "border-b border-[#1814F3] text-[#1814F3]" : "text-[#718EBF]"}`}
                    onClick={() => {
                        setActiveFilter("All");
                        setCurrentPage(1);
                    }}
                >
                    All Transactions
                </button>
                <button
                    className={`py-[7px] px-[8px] pb-[16px] font-inter text-[16px] font-medium cursor-pointer ${activeFilter === "Income" ? "border-b border-[#1814F3] text-[#1814F3]" : "text-[#718EBF]"}`}
                    onClick={() => {
                        setActiveFilter("Income");
                        setCurrentPage(1);
                    }}
                >
                    Income
                </button>
                <button
                    className={`py-[7px] px-[8px] pb-[16px] font-inter text-[16px] font-medium cursor-pointer ${activeFilter === "Expense" ? "border-b border-[#1814F3] text-[#1814F3]" : "text-[#718EBF]"}`}
                    onClick={() => {
                        setActiveFilter("Expense");
                        setCurrentPage(1);
                    }}
                >
                    Expense
                </button>
            </div>
            <Card width="1110px" height="auto" padding={"22px 30px 30px 30px"}>
                <div className="mb-[20px]">
                    <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1.5fr_1fr_1fr] py-[10px] border-b border-[#e4e4e4]">
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Description</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Transaction ID</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Type</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Card</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Date</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Amount</div>
                        <div className="text-[#718EBF] text-[16px] font-medium font-inter">Receipt</div>
                    </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                    {currentItems.map((transaction, index) => (
                        <div key={index} className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1.5fr_1fr_1fr] py-[15px] items-center border-b border-[#f5f5f5]">
                            <div className="flex items-center">
                                {transaction.Type === "Withdrawal" ? (
                                    <WithdrawalIcon />
                                ) : (
                                    <DepositIcon />
                                )}
                                <span className="ml-[14px]">{transaction.Title}</span>
                            </div>
                            <div className="text-[#232323] text-[16px] font-normal font-inter">{transaction.Id}</div>
                            <div className="text-[#232323] text-[16px] font-normal font-inter">{transaction.Type}</div>
                            <div className="text-[#232323] text-[16px] font-normal font-inter">{transaction.Card}</div>
                            <div className="text-[#232323] text-[16px] font-normal font-inter">{transaction.Date}</div>
                            <div className="text-[#232323] text-[16px] font-normal font-inter">
                                <span className={`${transaction.Type === "Withdrawal" ? "text-[#FE5C73]" : "text-[#16DBAA]"} font-medium`}>
                                    {transaction.Type === "Withdrawal" ? "-" : "+"}${transaction.Amount.toLocaleString()}
                                </span>
                            </div>
                            <div>
                                <button className="text-[#123288] border border-[#123288] rounded-[50px] text-[15px] font-normal font-inter cursor-pointer w-[100px] h-[35px] text-center">
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <div className="flex justify-end items-center gap-[8px] mt-[20px] w-[1110px]">
                <button
                    className="py-[8px] px-[16px] text-[#1814F3] cursor-pointer font-inter text-[15px] font-medium"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<"} Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`border-none rounded-[10px] ${currentPage === i + 1 ? "bg-[#1814F3] text-[#FFFFFF]" : "bg-transparent text-[#1814F3]"} cursor-pointer font-inter text-[15px] font-medium w-[40px] h-[40px]`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="py-[8px] px-[16px] text-[#1814F3] cursor-pointer font-inter text-[15px] font-medium"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next {">"}
                </button>
            </div>
        </div>
    );
};

export default TransactionsTable;