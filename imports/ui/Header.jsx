import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "15px" }}
          >
            Meteor University
          </Typography>
          <a>#diosvo</a>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
