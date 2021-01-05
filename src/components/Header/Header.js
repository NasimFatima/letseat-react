import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Bar, Typograph, Button } from './styles'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { getItemDetails } from '../../redux'

export const Headers = (props) => {
  const dispatch = useDispatch();
  const { headerItems } = props
  const handleClick = (id) => {
    dispatch(getItemDetails(id))
  }
  return (
    <div>
      <Bar>
        <Toolbar>
          {headerItems.map((item, key) => {
            return (<Typograph variant='h6' key={key}>
              <Button onClick={() => handleClick(item.id)}> {item.name}</Button>
            </Typograph>)

          })
          }
        </Toolbar>
      </Bar>
    </div>
  )

}

Headers.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.object),
};
