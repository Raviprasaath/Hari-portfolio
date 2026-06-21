import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <Header className="fixed top-0 left-0 right-0 z-50" />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayouts;