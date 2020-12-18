/* eslint-disable no-unused-vars */
import React from 'react';
import API from '../../Services/axios';
import { Headers } from '../Header'
export const Home = () => {
  API.get(`users/dummy/`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {

    })
  return (
    <div>
      <Headers />
      HERE IN HOME
    </div>
  )
}


