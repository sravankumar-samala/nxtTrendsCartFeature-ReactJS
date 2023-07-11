import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList
        .map(each => each.price * each.quantity)
        .reduce((acc, curr) => acc + curr, 0)

      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="check-out-container">
            <h2>
              Order Total: <span>RS {totalAmount}/-</span>
            </h2>
            <p>{cartList.length} items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
