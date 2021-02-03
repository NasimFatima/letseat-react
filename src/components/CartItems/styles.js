import Table from '@material-ui/core/Table';
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export const CustomTable = styled(Table)`
min-width: 700;
`;

export const CustomRow = styled(TableRow)`
background-color: LightGrey;
color: white;

`

export const CustomTableCell = styled(TableCell)`
font-weight: bold;
`
