import React from 'react';
import './News.css';
import { BiRightArrow } from 'react-icons/bi';


const NewsCard = ({ item: {
    cover, title, para, categeory, date, tautan
}}) => {
  return (
    <>
        <div className='news_items'>
            <div className='news_image_box'>
                <img src={cover} alt='news_image' />
            </div>

            <div className='news_categeory'>
                <span>{date}</span>
                <label>{categeory}</label>
            </div>

            <div className='news_details'>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>

            <a href={tautan} className='news_links' target='_blank'>
                READ MORE <BiRightArrow className='news_icons' />
            </a>
        </div>
    </>
  )
}

export default NewsCard