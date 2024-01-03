import React from 'react';

const Catagory = ({id , title, onCategoryClick})=> {
  return (
    <div key={id} onClick={() => onCategoryClick(id)}>
    {title}
  </div>
  )
};

export default Catagory;