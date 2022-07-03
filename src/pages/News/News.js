import React, { useState } from 'react';
import {
  NewsSection,
  NewsTitle,
  NewsContainer,
  NewsContent,

} from './NewsElements';
import NewsData from './NewsData';
import NewsCard from './NewsCard';



const News = () => {
  const [items, setItems] = useState(NewsData);

  return (
    <>
      <NewsSection>
        <NewsTitle>
          NEWS
        </NewsTitle>
        <NewsContainer>
          <NewsContent>
            {/* {
              items.map((item) => {
                return <NewsCard key={item.id} item={item} />
              })
            } */}
          </NewsContent>
        </NewsContainer>
      </NewsSection>
    </>
  )
}

export default News