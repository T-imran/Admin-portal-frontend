import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';

const cards = [
  { label: 'Start', color: '#1976d2' },
  { label: 'In Progress', color: '#ffa000' },
  { label: 'Completed', color: '#2e7d32' },
  { label: 'Pending', color: '#d32f2f' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'branchCode', headerName: 'Branch', width: 100 },
  { field: 'accountType', headerName: 'Type', width: 100 },
  { field: 'currencyCode', headerName: 'Currency', width: 100 },
  { field: 'amountLowerLimit', headerName: 'Min Amount', width: 130 },
  { field: 'amountHigherLimit', headerName: 'Max Amount', width: 130 },
  { field: 'effectiveDate', headerName: 'Effective Date', width: 130 },
];

export default function DataTablePage() {
  const [rows, setRows] = useState([]);
  var [page, setPage] = useState(0); // 0-based
  var [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8081/get-product-summary?page=${page}&size=${pageSize}`
      );
      setRows(response.data.content);
      setRowCount(response.data.totalElements);
    } catch (err) {
      console.error('Failed to load data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  return (
    <Box sx={{ p: 3 }}>
      {/* Cards */}
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
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Account Data
        </Typography>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            
  rows={rows}
  columns={columns}
  loading={loading}
  page={page}
  pageSize={pageSize}
  rowCount={rowCount}
  
  paginationMode="server"
  onPageChange={(newPage) => setPage(newPage)}
  onPageSizeChange={(newSize) => {
    setPageSize(newSize);
    setPage(0);
  }}
pageSizeOptions={[5, 10, 20, 50]}
/>

        </div>
      </Paper>
   
    </Box>
  );
}
