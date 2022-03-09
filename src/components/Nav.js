import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Map Info</Typography>
        <Box sx={{ m: 4 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </Box>
        <Button color="inherit" component={Link} to="/history">
          History
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
