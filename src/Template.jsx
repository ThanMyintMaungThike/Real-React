import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Box, Container, Snackbar } from "@mui/material";
import { useApp } from "./ThemedApp";

export default function Template() {
  const { globalMsg, setGlobalMsg } = useApp();

  return (
    <Box>
      <Header />
      <AppDrawer />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <Snackbar
        anchorOrigin={{
          horizontal: "center",
          vertical: "top"
        }}
        open={Boolean(globalMsg)}
        autoHideDuration={2000}
        onClose={() => setGlobalMsg(null)}
        message={globalMsg}
      />
    </Box>
  );
}
