import PropTypes from 'prop-types';

const ListedBooksCard = ({ book }) => {
  return (
    <div>
      <h2>{book.bookName}</h2>
    </div>
  );
};

ListedBooksCard.propTypes = {
  book: PropTypes.object
};

export default ListedBooksCard;