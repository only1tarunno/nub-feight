import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Sidebar from "../components/shared/Header/Sidebar";

const Main = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Main;
