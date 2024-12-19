import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";
export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250, backgroundColor: "#f8f9fa", height: "100%" }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
     <List>
     {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((text) => (
      <ListItem button key={text}>
        <ListItemText primary={text} className={styles.navButton} />
      </ListItem>
    ))}

        <ListItem button>
          <Button className={`${styles.authButton} ${styles.signIn}`}>Sign In</Button>
        </ListItem>
        <ListItem button>
          <Button className={`${styles.authButton} ${styles.signUp}`}>Sign Up</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styles.header}>
      <AppBar position="static" style={{ backgroundColor: "#fff", boxShadow: "none" }}>
        <Toolbar style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#333", marginRight: "1.5rem" }}
          >
            <img src="https://crypto-port.ru/img/logo.svg"></img>
            </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            {mobileOpen ? <CloseIcon style={{ color: "#333" }} /> : <MenuIcon style={{ color: "#333" }} />}
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem" }}>
           <Link className={styles.link} to="/rules"><h2 className={styles.navButton}>Rules</h2></Link> 
            <h2 className={styles.navButton}>About</h2>
            <h2 className={styles.navButton}>Services</h2>
            <h2 className={styles.navButton}>Reviews</h2>
            <h2 className={styles.navButton}>Contact</h2>
           <Link className={styles.link} to="/auth"> <button className={`${styles.authButton} ${styles.signIn}`}>Sign In</button></Link>
           <Link className={styles.link} to="/auth"><button className={`${styles.authButton} ${styles.signUp}`}>Sign Up</button></Link> 
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};
