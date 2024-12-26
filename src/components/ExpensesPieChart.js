"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesPieChart = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch("/api/expenses");
                const data = await response.json();
                setExpenses(data.expenses);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    const chartData = useMemo(() => {
        if (expenses.length === 0) {
            return null;
        }

        const labels = expenses.map((expense) => expense.Category);
        const dataValues = expenses.map((expense) => expense.Amount);

        const data = {
            labels,
            datasets: [
                {
                    data: dataValues,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                    ],
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top",
                    align: "end",
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    enabled: true,
                },
                datalabels: {
                    display: true,
                    color: "#FFFFFF",
                    formatter: (value, context) => {
                        const title = context.chart.data.labels[context.dataIndex];
                        return `          ${value}% \n      ${title}`;
                    },
                    font: {
                        weight: "700",
                        size: 13,
                    },
                },
            },
        };

        return { data, options };
    }, [expenses]);

    if (!chartData) {
        return (
            <Card width={"350px"} height={"322px"} padding={"31px 40px 32px 41px"}>
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    return (
        <Card width={"350px"} height={"322px"} padding={"31px 40px 32px 41px"}>
            <Pie data={chartData.data} options={chartData.options} />
        </Card>
    );
};

export default ExpensesPieChart;