import { toast } from 'react-toastify';
import { getFromLS, setToLs } from './LocalStorage';

const handleListBtn = (listKey, listName, bookId) => {
  const storedItem = getFromLS(listKey);
  const isExists = storedItem.find(item => item == bookId);

  if (isExists) {
    toast('Already in the list');
    return
  } else {
    setToLs(listKey, Number(bookId));
    toast(`Added to the ${listName}`);
  }
}

export {handleListBtn};