import { IoIosArrowDown } from "react-icons/io";
import ListedBookTabs from "../ListedBookTabs/ListedBookTabs";

const ListedBooks = () => {
  
  return (
    <div>
      <h2 className="text-4xl text-center font-bold font-playFair my-6 lg:mb-10">Books</h2>
      <div className="text-center">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 bg-green text-white">
            Sort By
            <IoIosArrowDown className="text-xl" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Rating</a></li>
            <li><a>Number of pages</a></li>
            <li><a>Published year</a></li>
          </ul>
        </div>
      </div>
      <ListedBookTabs/>
    </div>
  );
};

export default ListedBooks;