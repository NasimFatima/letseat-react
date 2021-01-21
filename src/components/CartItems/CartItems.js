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
  const decreaseQuantity = (item) => {
    dispatch(updateCart({
      totalBill: item.itemCategory.price, orderItems: {
        price: item.itemCategory.price,
        quantity: item.quantity - 1,
        item_category: item.itemCategory.itemCategory.id
      }
    }))
  }
  const increaseQuantity = (item) => {

    dispatch(updateCart({
      totalBill: item.itemCategory.price, orderItems: {
        price: item.itemCategory.price,
        quantity: item.quantity + 1,
        item_category: item.itemCategory.id
      }
    }))
  }

  return (
    <div>
      {productsInCart.map((product, key) => {
        return (
          <div key={key} style={{ textTransform: 'capitalize', padding: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div>
                {product.itemCategory.itemCategory.menuItem.name}
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                {product.itemCategory.itemCategory.name}
              </div>
              <div style={{ marginLeft: '150px' }}>{product.itemCategory.price}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                {product.itemCategory.size}
              </div>
              <div style={{ marginLeft: '150px' }}>
                {product.quantity === 1 ? (
                  <DeleteIcon
                    onClick={() => decreaseQuantity(product)}
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

