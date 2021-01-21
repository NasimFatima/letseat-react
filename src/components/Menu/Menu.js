import React, { useEffect } from 'react';
import { Headers } from '../Header';
import { MenuBar } from '../MenuBar';
import {
  Button,
  Container,
  Gridlist,
  Tiles,
  PriceBox,
  ShoppingIcon,
  Wrapper,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux';
import { URLS } from '../../urls';
import { updateLocation } from '../../utils/common';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { setUIValues, updateCart } from '../../redux';
import { getRole } from '../../utils/common';

export const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const role = getRole(user);
  useEffect(() => {
    dispatch(getMenuItems());
    dispatch(setUIValues({ showAddToCart: false }));
  }, []);

  const state = useSelector(state => state.menu);
  const productsInCart = state?.cart;
  let headerItems = [];
  if (state.items.length) headerItems = state.items;
  const tileData = state?.details[0]?.item;

  const handleClick = () => {
    updateLocation(URLS.ADD_MENU_ITEM);
  };
  const addItems = (categoryName, categoryId, item) => {
    const alreadyInCart = productsInCart.filter(
      product => product.itemCategory.id === item.id
    );
    if (alreadyInCart.length > 0) {
      dispatch(
        updateCart({
          totalBill: item.price,
          orderItems: {
            price: alreadyInCart[0].itemCategory.price,
            quantity: alreadyInCart[0].quantity + 1,
            itemCategory: alreadyInCart[0].itemCategory.id,
          },
        })
      );
    } else {
      item['categoryName'] = categoryName;
      item['categoryId'] = categoryId;
      item['quantity'] = 1;
      item['status'] = 'Pending';
      item['ItemCategory'] = item['id'];
      delete item['id'];
      dispatch(updateCart({ totalBill: item.price, orderItems: item }));
    }
  };

  return (
    <div>
      <MenuBar />
      {role !== 'Customer' && (
        <div>
          <Button onClick={handleClick}>Add Item</Button>
        </div>
      )}
      <Container>
        {headerItems.length > 0 && <Headers headerItems={headerItems} />}
        <Wrapper>
          <Gridlist cellHeight={'100%'}>
            {tileData &&
              tileData.map((tile, key) => (
                <Tiles key={key}>
                  <h2>{tile.name}</h2>
                  <p>Description: {tile.description}</p>
                  <h3>Size</h3>
                  {tile.itemCategory &&
                    tile.itemCategory.map((item, key) => (
                      <PriceBox key={key}>
                        <h4>
                          {item.size} Price: {item.price}
                        </h4>
                        <ShoppingIcon>
                          Add To Cart{' '}
                          <AddShoppingCartIcon
                            onClick={() => addItems(tile.name, tile.id, item)}
                          ></AddShoppingCartIcon>
                        </ShoppingIcon>
                      </PriceBox>
                    ))}
                </Tiles>
              ))}
          </Gridlist>
        </Wrapper>
      </Container>
    </div>
  );
};
