import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { useApp } from "../ThemedApp";
import {
  Home as HomeIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  Person as ProfileIcon
} from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import { Navigate, useNavigate } from "react-router-dom";

export default function AppDrawer() {
  const navigate = useNavigate();
  const { showDrawer, setShowDrawer, auth, setAuth } = useApp();

  return (
    <div>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <Box
          sx={{
            mb: 6,
            width: 300,
            height: 140,
            bgcolor: "banner",
            position: "relative"
          }}>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              left: 20,
              bottom: -30
            }}>
            <Avatar
              sx={{
                width: 94,
                height: 94,
                color: "white",
                background: "#832530"
              }}
            />
            <Typography sx={{ fontWeight: "bold" }}>Alice</Typography>
          </Box>
        </Box>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <Divider />

          {auth && (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText onClick={() => navigate("/profile")}>
                    Profile
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => setAuth(null)}>
                  <ListItemIcon>
                    <LogoutIcon color="error" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
          {!auth && (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <RegisterIcon />
                  </ListItemIcon>
                  <ListItemText onClick={() => navigate("/register")}>
                    Register
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => setAuth(true)}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer" }}>
                    Login
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
}
