import { useState } from "react";
import { NavBar } from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";
import { Outlet } from "react-router-dom";
import { Card } from "../Components/Card";
import items from "../data/data.js";
import { Graph } from "../Components/Graph.jsx";
import { QuickActions } from "../Components/QuickAction.jsx";
import { TodaysAppointments } from "../Components/Appointments.jsx";
import { RecentActivity } from "../Components/RecentActivity.jsx";

export const Dashboard = () => {
  const listItems = items.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        number={item.number}
        vcall={item.vcall}
        percent={item.percent}
        when={item.when}
      />
    );
  });

  const [theme, setTheme] = useState("dark");

  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };
  return (
    <>
      <div className={`dashboard_container ${theme}`}>
        <SideBar />

        <div className="innerContainer">
          <NavBar
            theme={theme}
            setTheme={setTheme}
            onClickLight={lightTheme}
            onClickDark={darkTheme}
          />
          <div className="cardRow">{listItems}</div>
          <div className="middleSection">
            <Graph theme={theme} />
            <QuickActions theme={theme} />
          </div>
          <div className="middleSection">
            <TodaysAppointments theme={theme} />
            <RecentActivity theme={theme} />
          </div>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
