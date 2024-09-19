import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const HomePage = () => {
  return (
    <div className="relative  min-h-screen bg-primary ">
      <Navbar />
      <div className="w-[500px] absolute top-0  left-0  h-[780px] bg-gradient-to-br from-secondary via-primary to-primary -z-[-1]" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
