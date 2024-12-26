"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityBarChart = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch("/api/activities");
                const data = await response.json();
                setActivities(data.activities);
            } catch (error) {
                console.error("Failed to fetch activities:", error);
            }
        };

        fetchActivities();
    }, []);

    const chartData = useMemo(() => {
        const labels = activities.map((activity) => activity.Day);
        const deposits = activities.map((activity) => activity.Deposit);
        const withdraws = activities.map((activity) => activity.Withdraw);

        return {
            labels,
            datasets: [
                {
                    label: "Deposit",
                    data: deposits,
                    backgroundColor: "#16DBCC",
                    borderRadius: 100,
                    borderSkipped: false,
                    barThickness: 15,
                },
                {
                    label: "Withdraw",
                    data: withdraws,
                    backgroundColor: "#1814F3",
                    borderRadius: 50,
                    borderSkipped: false,
                    barThickness: 15,
                },
            ],
        };
    }, [activities]);

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
            },
        },
    };

    return (
        <Card height={"322px"} width={"730px"} padding={"28px 30px 28px 33px"}>
            <div className="h-[266px] overflow-hidden">
                {activities.length > 0 ? (
                    <Bar data={chartData} options={options} />
                ) : (
                    <StyledTitle>Loading...</StyledTitle>
                )}
            </div>
        </Card>
    );
};

export default ActivityBarChart;