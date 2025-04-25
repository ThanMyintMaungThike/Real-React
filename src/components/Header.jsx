import { useApp } from "../ThemedApp";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Menu as MenuIcon
} from "@mui/icons-material";

export default function Header() {
  const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setShowDrawer(true)}>
          <MenuIcon />
        </IconButton>

        <Typography sx={{ ml: 2, flexGrow: 1, color: "text.fade" }}>
          My Story
        </Typography>

        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>

          {mode === "dark" ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("light")}>
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => setMode("dark")}>
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
