/*eslint-disable*/
import React from "react"
import { DrawerPaper, Logo, Image, SideBarWrapper, ListStyle, Item, ItemIcon, ItemText, NavLinkBar } from './styles'
import logo from '../../assets/images/logo.png'
import { menuBarRoutes } from '../../sideBarItems'
import { useHistory } from 'react-router-dom';

export const MenuBar = () => {
  const history = useHistory()
  const handleClick = (path) => {
    history.push(path)
  }

  const links = (
    <ListStyle>
      {menuBarRoutes.map((prop, key) => {
        return (
          <Item button onClick={() => handleClick(prop.path)}>
            <ItemIcon>
              <prop.icon />

            </ItemIcon>
            <ItemText
              primary={prop.title}
              disableTypography={true}
            />
          </Item>
        );
      })}
    </ListStyle>
  );

  return (
    <div>

      <DrawerPaper variant="persistent" anchor="left" open={true}>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>
        <SideBarWrapper>
          {links}
        </SideBarWrapper>
      </DrawerPaper>

    </div>
  );
}







// /* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/display-name */
// import React, { useState, forwardRef } from 'react';
// import { List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
// import clsx from 'clsx';
// import { ExpandLess, ExpandMore } from "@material-ui/icons";
// import menuItems from '../../sideBarItems';
// import { NavLink as RouterLink } from 'react-router-dom';
// import useStyles from './MenuBarStyles';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// export const MenuBar = (props) => {
//   const [menu, setMenu] = useState({});
//   const { className, ...rest } = props;
//   const classes = useStyles();
//   const handleClick = (item) => {
//     let newData = { ...menu, [item]: !menu[item] };
//     setMenu(newData);
//   }
//   const CustomRouterLink = forwardRef((props, ref) => (
//     <div ref={ref} style={{ flexGrow: 1 }}>
//       <RouterLink {...props} />
//     </div>
//   ));
//   const handleMenu = (children, level = 0) => {
//     return children.map(({ children, name, url, links }) => {
//       if (!children) {
//         return (
//           <List component="div" disablePadding key={name}>
//             <ListItem
//               className={classes.item}
//               disableGutters
//               style={{ padding: "0px" }}
//               key={name}
//             >
//               <Button
//                 className={clsx({
//                   [classes.btnRoot]: true,
//                   [classes.button]: true,
//                   [classes.subMenu]: level
//                 })}
//                 component={CustomRouterLink}
//                 to={url}
//               >
//                 {name}
//               </Button>
//             </ListItem>
//           </List>
//         )
//       }
//       return (


//         <div key={name}>
//           <ListItem
//             className={classes.item}
//             disableGutters
//             key={name}
//             onClick={() => handleClick(name)}
//           >
//             <Button
//               className={clsx({
//                 [classes.btnRoot]: true,
//                 [classes.button]: true,
//                 [classes.subMenu]: level
//               })}>
//               {name} {menu[name] ? <ExpandLess /> : <ExpandMore />}
//             </Button>
//           </ListItem>
//           <Collapse
//             in={(menu[name]) ? true : false}
//             timeout="auto"
//             unmountOnExit
//           >
//             {handleMenu(children, 1)}
//           </Collapse>
//         </div>

//       )
//     })
//   }
//   return (
//     <Drawer
//       anchor="left"
//       classes={{ paper: classes.drawer }}
//       open={true}
//       variant="persistent"
//     >
//       <List {...rest} className={clsx(classes.root, className)} >
//         {handleMenu(menuItems.data)}
//       </List>
//     </Drawer>
//   )
// }
