import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const CartItems = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.menu);
  const productsInCart = state?.cart;
  const deleteItemFromCart = (item) => {
    let index = productsInCart.map((product) => product.item_category).indexOf(item['item_category']);
    if (index > -1) {

      productsInCart.splice(index, 1);
      console.log("Result", productsInCart);
      dispatch(updateCart(productsInCart))
    }
  }
  const decreaseQuantity = (item) => {
    let index = productsInCart.map((product) => product.item_category).indexOf(item['item_category']);
    if (index > -1) {
      productsInCart[index]['quantity'] = item.quantity - 1
      dispatch(updateCart(productsInCart))
    }
  }
  const increaseQuantity = (item) => {
    let index = productsInCart.map((product) => product.item_category).indexOf(item['item_category']);
    if (index > -1) {
      productsInCart[index]['quantity'] = item.quantity + 1
      dispatch(updateCart(productsInCart))
    }
  }

  return (
    <div>
      {productsInCart.map((product, key) => {
        return (
          <div key={key} style={{ textTransform: 'capitalize', padding: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div>
                {product.categoryName}
              </div>
              <div style={{ marginLeft: '150px' }}>{product.price}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                {product.size}
              </div>
              <div style={{ marginLeft: '150px' }}>
                {product.quantity === 1 ? (
                  <DeleteIcon
                    onClick={() => deleteItemFromCart(product)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                    <RemoveIcon onClick={() => decreaseQuantity(product)}
                      style={{ cursor: 'pointer' }} />
                  )}
                {product.quantity} <AddIcon onClick={() => increaseQuantity(product)}
                  style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>

        );
      })}
      <div style={{ display: 'flex', paddingLeft: '20px' }}>
        <div>Total: </div><div style={{ marginLeft: '150px' }}>{productsInCart.reduce((n, { price, quantity }) => n + (price * quantity), 0)}</div>
      </div>
    </div >
  )
}

