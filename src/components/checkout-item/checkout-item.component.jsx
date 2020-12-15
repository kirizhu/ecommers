import React from 'react';
import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';
const CheckoutItem = ({ cartItem, clearItem }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt='item' />
      </div>
      <span className='name'>{cartItem.name}</span>
      <span className='quantity'>{cartItem.quantity}</span>
      <span className='price'>{cartItem.price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
