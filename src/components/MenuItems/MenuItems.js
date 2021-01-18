/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Headers } from '../Header'
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { setUIValues, addToCart } from '../../redux'
import { toast } from "react-toastify";
import isAuthenticated from '../../utils/isAuthenticated'
import { Container, List, MenuItem, NameHeading, InnerItems, DetailsBlock, CartIcon } from './style'

export const MenuItems = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
    dispatch(setUIValues({ showAddToCart: false }))

  }, []);

  const state = useSelector(state => state.menu);
  const headerItems = state?.items
  const tileData = state?.details[0]?.item


  const showModal = (categoryName, categoryId, item) => {
    item['categoryName'] = categoryName
    item['categoryId'] = categoryId
    item['quantity'] = 1
    item['status'] = 'Pending'
    item['ItemCategory'] = item['id']
    delete item['id']
    dispatch(addToCart(item))
    toast.success("Item Added in Cart")
  }

  return (
    <div>
      <Headers headerItems={headerItems} />
      <Container>
        <List>
          {tileData && tileData.map((tile, key) => (
            <MenuItem key={key} >
              <NameHeading>{tile.name}</NameHeading>
              <p>Description: {tile.description}</p>
              {tile.itemCategory && tile.itemCategory.map((item, key) => (
                <DetailsBlock key={key}>
                  <h3>Size
                  {isAuthenticated() && <CartIcon><AddShoppingCartIcon onClick={() => showModal(tile.name, tile.id, item)}></AddShoppingCartIcon></CartIcon>}
                  </h3>
                  <InnerItems>{item.size}  </InnerItems>
                  <InnerItems> Price: {item.price}</InnerItems>

                </DetailsBlock>
              ))}
            </MenuItem>
          ))}
        </List>
      </Container>
    </div >

  )
}
