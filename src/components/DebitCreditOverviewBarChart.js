"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DebitCreditOverviewBarChart = () => {
    const [debitCredits, setDebitCredits] = useState([]);

    useEffect(() => {
        const fetchDebitCredits = async () => {
            try {
                const response = await fetch("/api/debit-credits");
                const data = await response.json();
                setDebitCredits(data.debitCredits);
            } catch (error) {
                console.error("Failed to fetch debit credits:", error);
            }
        };

        fetchDebitCredits();
    }, []);

    const chartData = useMemo(() => {
        if (debitCredits.length === 0) {
            return null;
        }

        const labels = debitCredits.map((activity) => activity.Date);
        const debits = debitCredits.map((activity) => activity.Debit);
        const credits = debitCredits.map((activity) => activity.Credit);

        const totalDebit = debits.reduce((acc, curr) => acc + curr, 0);
        const totalCredit = credits.reduce((acc, curr) => acc + curr, 0);

        const data = {
            labels,
            datasets: [
                {
                    label: "Debit",
                    data: debits,
                    backgroundColor: "#1A16F3",
                    borderRadius: 10,
                    borderSkipped: false,
                    barThickness: 30,
                },
                {
                    label: "Credit",
                    data: credits,
                    backgroundColor: "#FCAA0B",
                    borderRadius: 10,
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
                    position: "top",
                    align: "end",
                    labels: {
                        usePointStyle: true,
                    },
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
                    title: {
                        display: false,
                        text: "Days of the Week",
                    },
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    title: {
                        display: false,
                        text: "Amount ($)",
                    },
                    beginAtZero: true,
                    ticks: {
                        stepSize: 100,
                    },
                    grid: {
                        display: false,
                    },
                    display: false,
                },
            },
        };

        return { data, options, totalDebit, totalCredit };
    }, [debitCredits]);

    if (!chartData) {
        return (
            <Card
                height={"364px"}
                width={"730px"}
                padding={"28px 30px 27px 30px"}
            >
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    return (
        <Card height={"364px"} width={"730px"} padding={"28px 30px 27px 30px"}>
            <StyledTitle>{`$${chartData.totalDebit.toLocaleString()} Debited & $${chartData.totalCredit.toLocaleString()} Credited in this Week`}</StyledTitle>
            <div className="w-full h-[320px] overflow-hidden">
                <Bar
                    data={chartData.data}
                    options={{
                        ...chartData.options,
                        layout: {
                            padding: {
                                bottom: 28,
                            },
                        },
                    }}
                />
            </div>
        </Card>
    );
};

export default DebitCreditOverviewBarChart;