import React, { useEffect } from 'react';
import { CustomTable } from '../Table/Table'
import { MenuBar } from '../MenuBar'
import { useDispatch, useSelector } from 'react-redux';
import { viewOrder } from '../../redux'

export const Orders = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.order);
  const ordersData = data?.orders
  useEffect(() => {
    dispatch(viewOrder());
  }, []);

  const headers = [{ title: 'Price', key: 'price' }, { title: 'Quantity', key: 'quantity' },
  { title: 'Item', key: 'item' },
  { title: 'Category', key: 'category' },
  { title: 'Size', key: 'size' }
  ]
  return (
    <div>
      <MenuBar />
      {ordersData.map((order, key) => {
        return (

          <div key={key}>
            <div style={{ marginLeft: '300px', paddingBottom: '20px' }}>
              <h1>Order</h1>
              <p>Placed AT: {order.createdAt}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Total Bill: {order.totalBill}</p>
              <p>Status: {order.status}</p>
              {order.orderBy &&
                <p>Order By:  {`${order.orderBy.firstName}  ${order.orderBy.lastName}`}</p>
              }
            </div>
            {order.order.length > 0 &&
              <CustomTable tableHeaderColor="primary" tableHead={headers} tableData={order.order} />}

          </div>)
      })}
    </div>
  )
}

