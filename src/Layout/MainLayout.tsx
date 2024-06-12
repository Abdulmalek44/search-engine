import { Outlet } from "react-router-dom";
import { Header } from "../Components/Common";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
