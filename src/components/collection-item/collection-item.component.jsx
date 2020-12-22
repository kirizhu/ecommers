import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <CustomButton inverted shopButton onClick={() => addItem(item)}>
      ADD TO CART
    </CustomButton>
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
