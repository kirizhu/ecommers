import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './menu-directory.styles.scss';

const MenuDirectory = ({ sections }) => (
  <div className='menu-directory'>
    {sections.map(({ id, ...otherMenuProps }) => (
      <MenuItem key={id} {...otherMenuProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(MenuDirectory);
