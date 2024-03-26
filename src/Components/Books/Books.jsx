import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';

const Books = ({books}) => {

  return (
    <section className="my-10 md:my-16 lg:my-20 xl:my-24">
      <h2 className="text-4xl text-center font-bold font-playFair mb-6 lg:mb-10">Books</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          books.map(book => <BookCard key={book.bookId} book={book}/>)
        }
      </div>
    </section>
  );
};

Books.propTypes = {
  books: PropTypes.array
};

export default Books;