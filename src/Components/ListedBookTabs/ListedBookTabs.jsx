import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCardContainer from '../ListedBooksCardContainer/ListedBooksCardContainer';

const ListedBookTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <ListedBooksCardContainer LsKey={'read-books'}/>
        </TabPanel>
        <TabPanel>
          <ListedBooksCardContainer LsKey={'wishlist-books'}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBookTabs;