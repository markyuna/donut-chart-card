import React, { useState } from "react";
import "./donutchartcard.css";
import menu from "./menu.svg";
import Chart from "react-apexcharts";

function DonutChartCard({ profile, addCloneToData }) {
  const [displayButton, setdisplayButton] = useState(true);
  const [displayMenu, setdisplayMenu] = useState(false);

  function showMenu(event) {
    event.preventDefault();
    setdisplayButton(false);
    setdisplayMenu(true);
  }

  function hideMenu(event) {
    event.preventDefault();
    setdisplayButton(true);
    setdisplayMenu(false);
  }

  async function cloneCard(cardToClone) {
    await addCloneToData(cardToClone);
    setdisplayButton(false);
    setdisplayMenu(false);
  }

  const labels = profile?.data?.map((item) => item.label);

  const totalUsersString = profile?.totalLabel?.toUpperCase();

  return (
    <div className="donutchartcard">
      <div className="header">
        <h1>{profile.title}</h1>
        {displayButton && (
          <button onClick={(event) => showMenu(event)}>
            <img src={menu} alt="action" />
          </button>
        )}
        {displayMenu && (
          <div className="menu">
            <span onClick={() => cloneCard(profile)}>Clone</span>
            <span onClick={(event) => hideMenu(event)}>Back</span>
          </div>
        )}
      </div>
      <div className="chart">
        <Chart
          type="donut"
          series={profile?.data?.map((item) => item.value)}
          options={{
            dataLabels: {
              enabled: false,
            },
            legend: {
              fontWeight: 700,
              fontSize: 10,
              width: 130,
              height: 130,
            },
            labels: labels,
            colors: ["#C4366F", "#85ADFF", "#502579"],
            plotOptions: {
              pie: {
                size: 200,
                donut: {
                  size: "65%",
                  background: "transparent",
                  labels: {
                    show: true,
                    value: {
                      fontSize: "10px",
                    },
                    total: {
                      show: true,
                      showAlways: true,
                      label: "12,187",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#373d3f",
                      formatter: function () {
                        return totalUsersString;
                      },
                    },
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DonutChartCard;
