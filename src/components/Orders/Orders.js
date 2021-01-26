/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { CustomTable } from '../Table/Table'
import { MenuBar } from '../MenuBar'
import { useDispatch, useSelector } from 'react-redux';
import { viewOrder, updateOrder } from '../../redux'
import moment from 'moment'

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
  const changeOrderStatus = (orderId) => {

    dispatch(updateOrder({ status: 2, id: orderId }))
  }
  return (
    <div>
      <MenuBar />
      {ordersData.map((order, key) => {
        return (

          <div key={key}>
            <div style={{ marginLeft: '300px', paddingBottom: '20px', textTransform: 'capitalize' }}>

              <h1>Order</h1>
              {order.status === 'Pending' && <button style={{ float: 'right', marginRight: '360px', backgroundColor: 'blue', color: 'white', height: '30px' }} onClick={() => changeOrderStatus(order.id)}> Mark As Complete</button>}
              <p>Placed AT: {moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Total Bill: {order.totalBill}</p>
              <p>Status: {order.status}</p>
              {order.customer &&
                <p>Order By:  {`${order.customer.firstName}  ${order.customer.lastName}`}</p>
              }
            </div>
            {order.order.length > 0 &&
              <CustomTable tableHeaderColor="primary" tableHead={headers} tableData={order.order} />}

          </div>)
      })}
    </div>
  )
}

