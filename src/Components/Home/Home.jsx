import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <main>
      <section className="py-8 md:py-12 lg:py-16 xl:py-20 px-10 md:px-14 lg:px-24 xl:px-28">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="./src/assets/The_Great_Gatsby.jpg" className="max-w-sm rounded-lg h-auto w-full" />
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-4 md:mb-8 lg:mb-12">Books to freshen up your bookshelf</h1>
              <button className="btn bg-green text-white text-xl px-5 h-auto">View The List</button>
            </div>
          </div>
        </div>
      </section>
      <Books books={books}/>
    </main>
  );
};

export default Home;