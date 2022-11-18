import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function AdminNavbar() {
  const navigate = useNavigate()

  const LogoutHandler = () => {
    localStorage.removeItem("admin");
    navigate('/adminlogin')
  }
  return (
    <Box sx={{ flexGrow: 1, position: "absolute" }}>
      <AppBar sx={{ bgcolor: "rgba(0, 0, 0,0.31)", background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", }}  >
        <Box position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin
            </Typography>
            <Button onClick={LogoutHandler} color="inherit">Logout</Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  )
}

export default AdminNavbar