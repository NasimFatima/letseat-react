import styled from 'styled-components';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


export const TableResponsive = styled.div`
  width: 100%;
  margin-left: 300px;
  overflowX: auto
`;

export const TableStyle = styled(Table)`
  marginBottom: 0;
  width: 100%;
  maxWidth: 100%;
  backgroundColor: transparent;
  borderSpacing: 0;
  borderCollapse: collapse
`;

export const TablesRow = styled(TableRow)`
  height: 56px;
  display: table-row;
  outline: none;
  verticalAlign: middle;
  font-weight: 900
`;

export const TableHeader = styled(TableHead)`
  background-color: LightGrey;
`;


export const TableHeadCell = styled(TableCell)`
  color: DarkGoldenRod;
  lineHeight: 1.42857143;
  padding: 12px 8px;
  verticalAlign: middle;
  fontSize: 0.8125rem;
  font-weight: 900

`;

export const TableBodyCell = styled(TableCell)`
  lineHeight: 1.42857143;
  padding: 12px 8px;
  verticalAlign: middle;
  fontSize: 0.8125rem;
`;
