import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

export const CartModal = styled(Modal)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CartBody = styled.div`
  background-color: white;
  border: 2px solid #000;
  padding: 20px
`
export const CheckoutButton = styled(Button)`
  float: 'right',
  marginTop: '10px'
`
