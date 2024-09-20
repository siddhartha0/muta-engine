import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="relative  min-h-screen bg-primary overflow-hidden ">
      <Navbar />
      <div className="md:w-[500px] w-screen absolute top-0  left-0  h-[780px] bg-gradient-to-br from-secondary via-primary to-primary -z-[-1]" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
