import React, { useState } from 'react';
import './menu-directory.styles.scss';
import SECTION_DATA from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

const MenuDirectory = () => {
  const [sections, setSections] = useState(SECTION_DATA);
  return (
    <div className='menu-directory'>
      {sections.map(({ id, ...otherMenuProps }) => (
        <MenuItem key={id} {...otherMenuProps} />
      ))}
    </div>
  );
};

export default MenuDirectory;
