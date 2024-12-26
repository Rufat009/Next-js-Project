"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

const BalanceAreaChart = () => {
    const [balanceHistory, setBalanceHistory] = useState([]);

    useEffect(() => {
        const fetchBalanceHistory = async () => {
            try {
                const response = await fetch("/api/balance-history");
                const data = await response.json();
                setBalanceHistory(data.balanceHistory);
            } catch (error) {
                console.error("Failed to fetch balance history:", error);
            }
        };

        fetchBalanceHistory();
    }, []);

    const chartContent = useMemo(() => {
        if (balanceHistory.length === 0) {
            return <StyledTitle>Loading...</StyledTitle>;
        }

        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceHistory}>
                    <CartesianGrid strokeDasharray="3 3" strokeWidth={2} />
                    <XAxis dataKey="Month" strokeWidth={3} />
                    <YAxis strokeWidth={3} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Balance"
                        stroke="#1814F3"
                        fill="#2D60FF40"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        );
    }, [balanceHistory]);

    return (
        <Card height="276px" width="635px" padding={"30px 25px 30px 20px"}>
            {chartContent}
        </Card>
    );
};

export default BalanceAreaChart;