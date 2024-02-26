import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { SupportRequestsResponse } from 'types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.colors.white,
    color: theme.colors.secondaryText,
    borderBottom: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  '&.MuiTableCell-root': {
    borderBottom: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type Props = {
  title: React.ReactNode;
  data: SupportRequestsResponse[];
  onClose: () => void;
};

export const SupportRequestsWidget: FC<Props> = ({ title, data, onClose }) => {
  const headers = data[0] ? Object.keys(data[0]) : [];

  return (
    <SingleWidget title={title} padding={0} onClose={onClose}>
      <Box sx={{ overflowX: 'scroll', borderRadius: '10px' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <StyledTableCell key={header} align="left" style={{ textTransform: 'uppercase' }}>
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.product}</StyledTableCell>
                <StyledTableCell align="left">$ {row.price}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>
                <StyledTableCell align="left">{row.city}</StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </SingleWidget>
  );
};
