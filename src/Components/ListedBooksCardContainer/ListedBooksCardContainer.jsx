import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { getFromLS } from '../../utils/LocalStorage';
import { BookContext } from '../../Layouts/Root';
import ListedBooksCard from '../ListedBooksCard/ListedBooksCard';

const ListedBooksCardContainer = ({ LsKey }) => {

  const books = useContext(BookContext);
  const [readBooksId, setReadBooksId] = useState([]);

  useEffect(() => {
    const data = getFromLS(LsKey);
    setReadBooksId(data);
  }, [LsKey]);

  const readBooks = readBooksId.map(id => {
    return books.find(book => book.bookId === id);
  });

  return (
    <div className='space-y-6'>
      {
        readBooks.map(item => <ListedBooksCard key={item.bookId} book={item}/>)
      }
    </div>
  );
};

ListedBooksCardContainer.propTypes = {
  LsKey: PropTypes.string
};

export default ListedBooksCardContainer;
