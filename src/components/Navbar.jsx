import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: "black" }}> {/* Primary Blue Theme */}
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>

        {/* App Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
          To-Do Manager
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>Home</Button>
          <Button color="inherit" component={Link} to="/s" sx={{ mx: 1 }}>Signup</Button>
          <Button color="inherit" component={Link} to="/c" sx={{ mx: 1 }}>Login</Button>
          <Button color="inherit" component={Link} to="/t" sx={{ mx: 1 }}>Add Task</Button>
          <Button color="inherit" component={Link} to="/l" sx={{ mx: 1 }}>View All Tasks</Button>
          <Button color="inherit" component={Link} to="/p" sx={{ mx: 1 }}>My Tasks</Button>
        </Box>

        {/* Mobile Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem component={Link} to="/s" onClick={handleMenuClose}>Signup</MenuItem>
          <MenuItem component={Link} to="/c" onClick={handleMenuClose}>Login</MenuItem>
          <MenuItem component={Link} to="/t" onClick={handleMenuClose}>Add Task</MenuItem>
          <MenuItem component={Link} to="/l" onClick={handleMenuClose}>View All Tasks</MenuItem>
          <MenuItem component={Link} to="/p" onClick={handleMenuClose}>My Tasks</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
