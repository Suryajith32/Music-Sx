import { Box, Stack } from '@mui/material'
import React from 'react'
import AdminFeed from '../../AdminComponents/AdminFeed'
import AdminNavbar from '../../AdminComponents/AdminNavbar'
import Sidebar from '../../AdminComponents/Sidebar'

function AdminHome() {
  return (
    <Box>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar />
        <AdminFeed />
      </Stack>
      <AdminNavbar />
    </Box>
  )
}

export default AdminHome