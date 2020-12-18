import styled from 'styled-components';

export const CustomForm = styled.form`

  display: grid;
  row-gap: 30px;

  h1 {
    color: blue
  }
`;

export const FormInput = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  label {
    font-weight: 500;
    margin-bottom: 5px;
    color: grey
  }
  input , select {
    grid-column: 1/-1;
    background-color: white;
    margin: 10px 0 5px;
    margin-top: 10px;
    border-radius: 4px;
    font-size: 14px;
    height: 31px;
    display: flex;
  }
  button {
    background-color: blue;
    color: white;
    cursor: pointer;
    padding: 10px 8px;
    border-radius: 4px;
    border: 1px solid #1aaa55;
    font-size: 16px;
    text-transform: capitalize;
    grid-column: 1/-1;
  }
`
export const CustomField = styled.div`
  grid-column: 1/-1;
  background-color: white;
  margin: 10px 0 5px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 14px;
  height: 31px;
  display: flex;

`;

export const Error = styled.div`
  color: tomato;
  text-align: bottom;`

export const Wrapper = styled.div`
  padding: 30px 20px;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);
  border-radius: 4px;
  margin: auto;
  margin-bottom: 30px;
  width: 50vw;

`
