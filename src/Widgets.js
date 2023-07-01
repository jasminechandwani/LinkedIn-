import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon className='widget__icon'/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
   )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
      {newsArticle("Times of India", "Top News - 9999+ readers")}
      {newsArticle("Corona Virus updates", "Top News - 8392+ readers")}
      {newsArticle("Tesla hits new highs", "Top News - 1000+ readers")}
      {newsArticle("Bitcoin breaks $224", "Top News - 2325+ readers")}
      {newsArticle("Is redux too good?", "Top News - 558+ readers")}
    </div>

  )
}

export default Widgets;
