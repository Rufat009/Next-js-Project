"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const MonthlyExpensesBarChart = () => {
    const [selectedBar, setSelectedBar] = useState(null);
    const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
    const [expensesMonthly, setExpensesMonthly] = useState([]);

    useEffect(() => {
        const fetchMonthlyExpenses = async () => {
            try {
                const response = await fetch("/api/expenses-monthly");
                const data = await response.json();
                setExpensesMonthly(data.expensesMonthly);
            } catch (error) {
                console.error("Failed to fetch monthly expenses:", error);
            }
        };

        fetchMonthlyExpenses();
    }, []);

    const chartData = useMemo(() => {
        if (expensesMonthly.length === 0) {
            return null;
        }

        const labels = expensesMonthly.map((expense) => expense.Month);

        const data = {
            labels,
            datasets: [
                {
                    data: expensesMonthly.map((expense) => expense.Amount),
                    backgroundColor: (context) => {
                        const index = context.dataIndex;
                        return index === selectedBar ? "#16DBCC" : "#EDF0F7";
                    },
                    borderRadius: 8,
                    borderSkipped: false,
                    barThickness: 30,
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    display: false,
                },
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    if (selectedBar === index) {
                        setSelectedBar(null);
                        setLabelPosition({ x: 0, y: 0 });
                    } else {
                        setSelectedBar(index);
                        const rect = elements[0].element;
                        setLabelPosition({
                            x: rect.x,
                            y: rect.y - 13,
                        });
                    }
                } else {
                    setSelectedBar(null);
                    setLabelPosition({ x: 0, y: 0 });
                }
            },
        };

        return { data, options };
    }, [expensesMonthly, selectedBar]);

    if (!chartData) {
        return (
            <div className="relative w-[350px] h-[225px]">
                <Card
                    width="350px"
                    height="225px"
                    padding={"33px 28px 25px 25px"}
                >
                    <StyledTitle>Loading...</StyledTitle>
                </Card>
            </div>
        );
    }

    return (
        <div className="relative w-[350px] h-[225px]">
            <Card width="350px" height="225px" padding={"33px 28px 25px 25px"}>
                <Bar
                    style={{ marginTop: "20px" }}
                    data={chartData.data}
                    options={chartData.options}
                />
            </Card>
            {selectedBar !== null && (
                <div
                    className="absolute transform translate-x-[13%] translate-y-[150%] text-[#343c6a] font-lato font-semibold text-[12px] pointer-events-none whitespace-nowrap"
                    style={{
                        left: `${labelPosition.x}px`,
                        top: `${labelPosition.y}px`,
                    }}
                >
                    ${expensesMonthly[selectedBar].Amount.toLocaleString()}
                </div>
            )}
        </div>
    );
};

export default MonthlyExpensesBarChart;