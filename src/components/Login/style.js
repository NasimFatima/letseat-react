/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
const theme = makeStyles()

export const Paper = styled.div`{
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};`

export const CustomForm = styled.div`{
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(3),
}`

