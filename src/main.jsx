import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: () => fetch('/fakeData.json'),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listed_books',
        element: <ListedBooks />
      },
      {
        path: '/pages_to_read',
        element: <PagesToRead />
      },
      {
        path: '/book_details/:bookId',
        element: <BookDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
