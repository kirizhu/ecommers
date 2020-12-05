import React, { useState } from 'react';
import './menu-directory.styles.scss';
import sectionData from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

function MenuDirectory() {
  const [sections, setSections] = useState(sectionData);
  return (
    <div className='menu-directory'>
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default MenuDirectory;
