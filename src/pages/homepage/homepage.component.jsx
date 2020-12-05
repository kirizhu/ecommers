import React from 'react';
import './homepage.styles.scss';
import MenuDirectory from '../../components/menu-directory/menu-directory.component';

function HomePage() {
  return (
    <div className='homepage'>
      <MenuDirectory />
    </div>
  );
}

export default HomePage;
