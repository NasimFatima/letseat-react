import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';


export const Container = styled.div`
  display: flex;
  flexWrap: wrap;
  justifyContent: space-around;
  overflow: hidden;
  height: 1000px;
  max-height: relative;
  margin-top: 70px;
`;


export const List = styled(GridList)`

  width: 100%;
  height: 100%;
  padding-left: 300px;
  padding-top: 30px;
  cell-height: 100%;
`

export const MenuItem = styled.div`
  text-transform: capitalize;
  margin-top: 40px;
  margin-bottm: 20px;
  width: 70%;
  padding: 5px `

export const NameHeading = styled.h2`
  display: block; background-color: LightGray;
  margin-bottom: 20px;
`

export const InnerItems = styled.div`
  display: block;
`

export const DetailsBlock = styled.div`
  padding: 5px
`

export const CartIcon = styled.div`
  float: right;
  marginLeft: 30%;
  cursor: pointer;
`
