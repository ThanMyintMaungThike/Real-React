import { createContext, useContext, useState, useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider
} from "@mui/material";

import App from "./App";
import AppDrawer from "./components/AppDrawer";

import { deepPurple, grey, orange } from "@mui/material/colors";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(true);
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#832561"
        },
        banner: mode === "dark" ? grey[800] : "#832561",
        text: {
          fade: grey[400]
        }
      }
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showDrawer,
          setShowDrawer,
          showForm,
          setShowForm,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
          mode,
          setMode
        }}>
        <App />

        <AppDrawer />

        <Snackbar
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom"
          }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
