import React, { useState } from 'react';
import './menu-directory.styles.scss';
import sectionData from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

function MenuDirectory() {
  const [sections, setSections] = useState(sectionData);
  return (
    <div className='menu-directory'>
      {sections.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps} />
      ))}
    </div>
  );
}

export default MenuDirectory;
