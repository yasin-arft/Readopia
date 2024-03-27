import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers, HiOutlineDocumentChartBar } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const ListedBooksCard = ({ book }) => {
  const { bookId, image, bookName, author, category, tags, totalPages, rating, publisher, yearOfPublishing } = book;
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-content flex-col lg:flex-row gap-6 border border-[#13131326] rounded-2xl">
        <figure className="rounded-2xl overflow-hidden flex items-center justify-center p-7 max-w-[230px]" >
          <img src={`${image}`} className='w-auto h-full' />
        </figure>
        <div className='flex-1'>
          <h2 className='text-2xl font-playFair font-bold mb-4'>{bookName}</h2>
          <p className='font-medium text-lg text-dark-800 mb-4'>By : {author} </p>
          <div className='flex gap-3'>
            <span className='font-bold text-dark'>Tag</span>
            {
              tags.map((tag, idx) => <span key={idx} className='px-4 text-green font-medium bg-[#23BE0A0D]'>#{tag}</span>)
            }
            <span className='flex items-center gap-3 text-dark-800'>
              <CiLocationOn />
              <span>Year of Publishing: {yearOfPublishing}</span>
            </span>
          </div>
          <div className='flex gap-5 text-dark-600 mt-4'>
            <p className='flex gap-3 items-center'>
              <HiOutlineUsers className='text-xl' />
              <span>Publisher: {publisher}</span>
            </p>
            <p className='flex gap-3 items-center'>
              <HiOutlineDocumentChartBar className='text-xl' />
              <span>Page {totalPages}</span>
            </p>
          </div>
          <hr className='text-dark my-4' />
          <div className='mt-8 space-x-3'>
            <span className="bg-[#328EFF26] rounded-full px-5 py-2.5 text-[#328EFF]">Category: {category}</span>
            <span className="bg-[#FFAC3326] rounded-full px-5 py-2.5 text-[#FFAC33]">Rating: {rating}</span>
            <button onClick={() => navigate(`/book_details/${bookId}`)} className="btn bg-green rounded-full px-5 py-2.5 min-h-auto h-auto text-white">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

ListedBooksCard.propTypes = {
  book: PropTypes.object
};

export default ListedBooksCard;