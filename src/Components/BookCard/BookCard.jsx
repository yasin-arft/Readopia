import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { bookId, bookName, image, author, tags, category, rating } = book;
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/book_details/${bookId}`)} className="card p-6 rounded-2xl border border-[#13131326] cursor-pointer">
        <figure className='max-h-56'>
          <img src={`${image}`} alt={`${bookName} cover image`} className='h-52' />
        </figure>
        <div className="card-body p-0 pt-6 gap-0">
          <div className='flex gap-3 flex-wrap grow'>
            {
              tags.map((tag, idx) => <span key={idx} className='px-4 text-green font-medium bg-[#23BE0A0D]'>{tag}</span>)
            }
          </div>
          <h2 className="card-title text-2xl font-playFair font-bold py-4">{bookName}</h2>
          <p className='font-medium text-dark-800'>By: {author}</p>
          <div className='border-t border-dashed border-[#13131326] my-5'></div>
          <div className='flex justify-between text-dark-800 font-medium'>
            <p>{category}</p>
            <div className='flex gap-2.5 items-center'>
              <span>{rating}</span>
              <CiStar className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookCard.propTypes = {
  book: PropTypes.object
};

export default BookCard;