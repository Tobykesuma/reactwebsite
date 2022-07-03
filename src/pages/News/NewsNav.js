import React, { useState } from 'react';
import NewsData from './NewsData';

const NewsNav = () => {

  const [items, setItems] = useState(NewsData);


  return (
      <>
      <div>NewsNav</div>
      </>
  );
}

export default NewsNav;