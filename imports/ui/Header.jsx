import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

import { Link, Outlet } from "react-router-dom";

export default Header = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} to={""} sx={{ color: grey[50] }}>
              Transfer
            </Button>
            <Button component={Link} to={"garage"} sx={{ color: grey[50] }}>
              Garage
            </Button>
          </Box>
          <a>#diosvo</a>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
