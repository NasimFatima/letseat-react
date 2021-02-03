import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CustomTable, CustomRow, CustomTableCell } from './styles'


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
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const invoiceSubtotal = subtotal(productsInCart);
  const invoiceTotal = invoiceSubtotal;
  return (
    <TableContainer component={Paper}>
      <CustomTable>
        <TableHead>
          <CustomRow>
            <CustomTableCell>Item</CustomTableCell>
            <CustomTableCell>Type</CustomTableCell>
            <CustomTableCell>Size</CustomTableCell>
            <CustomTableCell >Qty.</CustomTableCell>
            <CustomTableCell >Price</CustomTableCell>
            <CustomTableCell >Action</CustomTableCell>
          </CustomRow>
        </TableHead>
        <TableBody>
          {productsInCart.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.itemCategory.itemCategory.menuItem.name}</TableCell>
              <TableCell>{row.itemCategory.itemCategory.name}</TableCell>
              <TableCell>{row.itemCategory.size}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell >{row.itemCategory.price}</TableCell>
              <TableCell >
                {row.quantity === 1 ? (
                  <DeleteIcon
                    onClick={() => decreaseQuantity(row)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                    <RemoveIcon onClick={() => decreaseQuantity(row)}
                      style={{ cursor: 'pointer' }} />
                  )} <AddIcon onClick={() => increaseQuantity(row)}
                    style={{ cursor: 'pointer' }} /></TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </CustomTable>
    </TableContainer>
  )
}

