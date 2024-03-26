import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BookContext } from '../../Layouts/Root';

const BookDetails = () => {
  const books = useContext(BookContext);

  return (
    <div>
      <h2>Book Details</h2>
    </div>
  );
};

BookDetails.propTypes = {
  props: PropTypes.object
};

export default BookDetails;