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
      <Grid container spacing={2} mb={4}>
        {cards.map(({ label, color }) => (
          <Grid item xs={12} sm={6} md={3} key={label}>
            <Paper
              sx={{
                backgroundColor: color,
                color: 'white',
                p: 2,
                textAlign: 'center',
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {label}
            </Paper>
          </Grid>
        ))}
      </Grid>

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
