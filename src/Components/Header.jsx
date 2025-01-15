import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useApp } from "../ThemedApp";
import {
  Add as AddIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

export default function Header() {
  const { showForm, setShowForm } = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1, ml: 2 }}>YayCha</Typography>

        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>
          <IconButton color="inherit" edge="end">
            <LightModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
