import styled from 'styled-components';
import { Field } from 'formik';

export const Bar = styled.div`
  padding: 16px;
  background: LightGray;
  margin: 16px;
  font-weight: 900
`;

export const FormGroup = styled(Field)`
  border: 1px solid #ccc;
  height: 44px;
  padding: 0 16px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  cursor: pointer;
  padding: 10px 8px;
  border-radius: 4px;
  border: 1px solid #1aaa55;
  font-size: 16px;
  text-transform: capitalize;
  grid-column: 1/-1;
`
