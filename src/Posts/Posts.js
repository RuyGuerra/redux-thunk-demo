import React from 'react';
import './Posts.css';

const Posts = ({ items }) => {
  if (!items) {
    return null
  }

  return (
    <div className='container'>
      <div className="list-group posts-container">
        {
          items.map(item => (
            <a
              className="list-group-item list-group-item-action"
              href={item.url}
              target='_blank'
              key={item.id}>
              {item.title}
            </a>
          ))
        }                
      </div>
    </div>
  );

}

export default Posts;