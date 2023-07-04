import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";

function MainLayout({ order }) {
  return (
    <div>
      <Header order={order} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
