import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import { createContext } from "react";

export const BookContext = createContext([]);

const Root = () => {
  const books = useLoaderData();

  return (
    <div className="container mx-auto px-3 text-dark font-workSans">
      <Header />
      <BookContext.Provider value={books}>
        <Outlet />
      </BookContext.Provider>
    </div>
  );
};

export default Root;