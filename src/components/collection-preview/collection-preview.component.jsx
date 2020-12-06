import React from 'react';

const CollectionPreview = ({ title, items }) => {
  console.log(title);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {/* nameless functions are costly on performance since they are called on each render/re-render */}
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
