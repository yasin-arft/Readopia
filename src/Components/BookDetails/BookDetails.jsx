import { useContext } from 'react';
import { BookContext } from '../../Layouts/Root';
import { useParams } from 'react-router-dom';
import { getFromLS, replaceToLs } from '../../utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleListBtn } from '../../utils/BookDetailsFunctions';

const BookDetails = () => {
  const books = useContext(BookContext);
  const { bookId } = useParams();
  const book = books.find(item => item.bookId == bookId);
  const { image, bookName, tags, category, author, rating, totalPages, publisher, yearOfPublishing, review } = book;

  const handleRead = () => {
    const storedItem = getFromLS('wishlist-books');
    const newItem = storedItem.filter(item => item != bookId);
    replaceToLs('wishlist-books', newItem);
    handleListBtn('read-books', 'read list', bookId);
  };

  const handleWishlist = () => {
    const storedItem = getFromLS('read-books');
    const isExists = storedItem.find(item => item == bookId);
    if (isExists) {
      toast('Already Read');
    } else {
      handleListBtn('wishlist-books', 'wishlist', bookId);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="hero mb-12">
        <div className="hero-content flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <figure className="rounded-2xl flex-1 overflow-hidden p-4 md:p-8 lg:p-10 xl:p-14" >
            <img src={`${image}`} className='w-full h-full mx-auto' />
          </figure>
          <div className='flex-1'>
            <h2 className='text-4xl font-playFair font-bold my-2 md:my-3 lg:my-5'>{bookName}</h2>
            <p className='font-medium text-lg text-dark-800'>By : {author} </p>
            <hr className='text-dark my-2 md:my-4' />
            <p className='font-medium text-lg text-dark-800'>{category}</p>
            <hr className='text-dark my-2 md:my-4' />
            <p className='mb-12'><span className='font-bold text-dark'> Review : </span>{review}</p>
            <div className='flex gap-3'>
              <span className='font-bold text-dark'>Tag</span>
              {
                tags.map((tag, idx) => <span key={idx} className='px-4 text-green font-medium bg-[#23BE0A0D]'>#{tag}</span>)
              }
            </div>
            <hr className='text-dark my-2 md:my-4' />
            <table className='w-2/3 border-separate border-spacing-3'>
              <tbody>
                <tr>
                  <td className='text-dark-700'>Number of Pages:</td>
                  <td className='text-dark font-semibold'>{totalPages}</td>
                </tr>
                <tr>
                  <td className='text-dark-700'>Publisher:</td>
                  <td className='text-dark font-semibold'>{publisher}</td>
                </tr>
                <tr>
                  <td className='text-dark-700'>Year of Publishing:</td>
                  <td className='text-dark font-semibold'>{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td className='text-dark-700'>Rating:</td>
                  <td className='text-dark font-semibold'>{rating}</td>
                </tr>
              </tbody>
            </table>
            <div className='flex gap-4 mt-8'>
              <button onClick={handleRead} className="btn border border-[#1313134D]">Read</button>
              <button onClick={handleWishlist} className="btn bg-sky text-white">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;