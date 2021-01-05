import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Bar = styled(AppBar)`
  position: static;
  margin-left: 260px;
  background-color: LightGrey;
  margin-top: 70px;
  max-width: 100%
`;

export const Typograph = styled(Typography)`
  flexGrow: 1;
  padding: 5px;
  display: block;
  outline: none;
  verticalAlign: middle;
  font-weight: 900;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: DarkGoldenRod;
  text-transform: capitalize
`;
