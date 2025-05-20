import { createContext, useContext, useState, useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider
} from "@mui/material";

import { deepPurple, grey, orange } from "@mui/material/colors";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

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
          main: deepPurple[500]
          // "#832561"
        },
        banner: mode === "dark" ? grey[800] : grey[200],
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
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
