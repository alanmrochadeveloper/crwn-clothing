import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, history }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={CartItem.id} item={cartItem} />
				))
			) : (
				<span className='empty-message'> Your cart is empt</span>
			)}
		</div>
		<CustomButton onClick={() => history.push('/checkout')}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
export default withRouter(connect(mapStateToProps)(CartDropdown));
