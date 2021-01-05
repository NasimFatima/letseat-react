import styled from 'styled-components';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

export const DrawerPaper = styled(Drawer)`

  border: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  zIndex: 1;
`;


export const Logo = styled.div`
  position: relative;
  display: block;
  margin: auto;
  `;

export const Image = styled.img`
  width: 150px;
  position: relative;
  verticalAlign: middle;
  border: 0
`;


export const SideBarWrapper = styled.div`
    background-color: LightGrey;
    position: relative;
    height: calc(100vh - 75px);
    overflow: auto;
    width: 260px;
    zIndex: 4;
    overflowScrolling: touch;
  `;

export const ListStyle = styled(List)`
  marginTop: 20px;
  paddingLeft: 0;
  paddingTop: 0;
  paddingBottom: 0;
  marginBottom: 0;
  listStyle: none;
  position: unset;
`;

export const Item = styled(ListItem)`
  position: relative;
  display: block;
  height: 60px;
  textDecoration: none;
  cursor: pointer;
  :hover {
    background-color: DarkGoldenRod
  }
`;

export const ItemIcon = styled.div`
  width: 24px;
  height: 30px;
  fontSize: 24px;
  lineHeight: 30px;
  float: left;
  marginRight: 15px;
  textAlign: center;
  verticalAlign: middle;
  display: inline-block;
  color: rgba( + hexToRgb(whiteColor) + ; 0.8)
`;


export const ItemText = styled(ListItemText)`
  margin: 0;
  lineHeight: 30px;
  fontSize: 14px;
  display: inline-block;
`;

export const NavLinkBar = styled(NavLink)`
  color: Black;
  height: 50px;
  text-decoration: none;
`
