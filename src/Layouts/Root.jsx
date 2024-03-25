import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div className="container mx-auto p-3 text-dark font-workSans">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default Root;