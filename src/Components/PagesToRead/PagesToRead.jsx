import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getFromLS } from '../../utils/LocalStorage';
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Layouts/Root';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'tomato', 'skyblue'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const readBooksId = getFromLS('read-books');
  const books = useContext(BookContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const readBooks = readBooksId.map(id => {
      return books.find(book => book.bookId === id);
    });

    const newData = readBooks.map(item => {
      const { shortName, totalPages } = item;
      return { name: shortName, uv: totalPages }
    });
    setData(newData);
  }, [books]);

  return (
    <div className='max-w-full overflow-auto'>
      <div className='h-screen min-w-[1000px]'>
        <ResponsiveContainer>
          <BarChart
            width={1000}
            height={600}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={'name'} />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

TriangleBar.propTypes = {
  props: PropTypes.object,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default PagesToRead;
