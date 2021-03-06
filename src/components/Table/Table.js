import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import {
  TableResponsive,
  TableStyle,
  TableHeader,
  TablesRow,
  TableHeadCell,
  TableBodyCell,
} from './styles';

export const CustomTable = props => {
  const { tableHead, tableData } = props;
  return (
    <TableResponsive>
      <TableStyle>
        <TableHeader>
          <TablesRow>
            {tableHead.map((prop, key) => {
              return <TableHeadCell key={key}>{prop.title}</TableHeadCell>;
            })}
          </TablesRow>
        </TableHeader>
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TablesRow key={key}>
                {tableHead.map((item, key) => {
                  return (
                    <TableBodyCell key={key}>{prop[item.key]}</TableBodyCell>
                  );
                })}
              </TablesRow>
            );
          })}
        </TableBody>
      </TableStyle>
    </TableResponsive>
  );
};

CustomTable.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object),
};
