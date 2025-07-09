import React from 'react';
import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const cards = [
  { label: 'Start', color: '#4caf50' },      // green
  { label: 'Progress', color: '#2196f3' },   // blue
  { label: 'Complete', color: '#9c27b0' },   // purple
  { label: 'Pending', color: '#ff9800' },    // orange
];

// Sample data for table
const rows = [
  { id: 1, name: 'Task A', status: 'Start' },
  { id: 2, name: 'Task B', status: 'Progress' },
  { id: 3, name: 'Task C', status: 'Complete' },
  { id: 4, name: 'Task D', status: 'Pending' },
];

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Top cards */}
      <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    mb: 4,
  }}
>
  {cards.map(({ label, color }) => (
    label=='Start'?
<Paper
      key={label}
      sx={{
        flex: '1 1 200px',  // flexible width with base 200px
        backgroundColor: color,
        color: 'white',
        p: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 2,
        boxShadow: 3,
        minWidth: 150,
      }}
    >
    
    {label}
    </Paper> :null
  ))}
</Box>

      {/* Data Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task ID</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(({ id, name, status }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
