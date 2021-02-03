import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';

export const Wrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  margin-top: 70px;

`
export const Button = styled.button`
padding: 5px 12px;
color: white;
font-size: 20px;
font-weight: 700;
background-color: blue;
border: 0px;
border-radius: 3px;
appearance: none;
cursor: pointer;
float: right;
margin-right: 100px;
margin-bottom: 5px;
margin-top: 10px;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
`

export const Gridlist = styled(GridList)`
  width: 100%;
  height: 100%;
`

export const Tiles = styled.div`

  width: 100%;
  padding: 5px;
  text-transform: capitalize;
  margin: auto;
  margin-top: 40px;
  margin-bottm: 20px;

  h2 {
    border: 1px;
    padding: 10px;
    display: block;
    background-color: #000080;
    color: white;
  }
`
export const PriceBox = styled.div`
  display: flex;
  alignItems: center;
`

export const ShoppingIcon = styled.div`
  float: right;
  cursor: pointer;
  margin-left:300px;
  margin-top: 10px;
`
