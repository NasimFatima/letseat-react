import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Headers } from '../Header'
import { MenuBar } from '../MenuBar'
import { Button } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux'

// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '70px',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '700px',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export const Menu = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  const state = useSelector(state => state.menu);
  const headerItems = state.items
  const tileData = state?.details[0]?.item

  const handleClick = () => {
    console.log("Add menu")
  }
  return (
    <div>
      <Button oclick={handleClick} >Add Item</Button>
      <Headers headerItems={headerItems} />
      <MenuBar />
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          </GridListTile>
          {tileData && tileData.map((tile, key) => (
            <GridListTile key={tile.img}>
              {/* <img src={tikka} alt={tile.name} /> */}
              <GridListTileBar
                title={tile.name}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>

  )
}
