import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [mode, setMode] = useState(
    localStorage.getItem("theme") || (prefersDarkMode ? "dark" : "light"),
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#5d4037" : "#8b6f47",
            light: mode === "light" ? "#8b6f47" : "#a08060",
            dark: mode === "light" ? "#3e2723" : "#6f4e37",
          },
          secondary: {
            main: mode === "light" ? "#6f4e37" : "#a08060",
          },
          background: {
            default: mode === "light" ? "#f5f5f0" : "#1a1a1a",
            paper: mode === "light" ? "#ffffff" : "#242424",
          },
          text: {
            primary: mode === "light" ? "#3e2723" : "#f5f5f0",
            secondary: mode === "light" ? "#5d4037" : "#c4b5a0",
          },
          divider:
            mode === "light" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
        },
        typography: {
          fontFamily: [
            "'Inter'",
            "'Georgia'",
            "system-ui",
            "-apple-system",
            "sans-serif",
          ].join(","),
          h1: { fontWeight: 800, letterSpacing: "-0.02em" },
          h2: { fontWeight: 700, letterSpacing: "-0.01em" },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
          body1: { lineHeight: 1.7 },
          button: { textTransform: "none", fontWeight: 600 },
        },
        shape: { borderRadius: 8 },
        shadows: [
          "none",
          "0px 2px 4px rgba(0,0,0,0.05)",
          "0px 4px 8px rgba(0,0,0,0.08)",
          "0px 6px 12px rgba(0,0,0,0.1)",
          "0px 8px 16px rgba(0,0,0,0.12)",
          "0px 10px 20px rgba(0,0,0,0.14)",
          "0px 12px 24px rgba(0,0,0,0.16)",
          "0px 14px 28px rgba(0,0,0,0.18)",
          "0px 16px 32px rgba(0,0,0,0.2)",
          "0px 18px 36px rgba(0,0,0,0.22)",
          "0px 20px 40px rgba(0,0,0,0.24)",
          "0px 22px 44px rgba(0,0,0,0.26)",
          "0px 24px 48px rgba(0,0,0,0.28)",
          "0px 26px 52px rgba(0,0,0,0.3)",
          "0px 28px 56px rgba(0,0,0,0.32)",
          "0px 30px 60px rgba(0,0,0,0.34)",
          "0px 32px 64px rgba(0,0,0,0.36)",
          "0px 34px 68px rgba(0,0,0,0.38)",
          "0px 36px 72px rgba(0,0,0,0.4)",
          "0px 38px 76px rgba(0,0,0,0.42)",
          "0px 40px 80px rgba(0,0,0,0.44)",
          "0px 42px 84px rgba(0,0,0,0.46)",
          "0px 44px 88px rgba(0,0,0,0.48)",
          "0px 46px 92px rgba(0,0,0,0.5)",
          "0px 48px 96px rgba(0,0,0,0.52)",
        ],
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: "10px 24px",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": { boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" },
              },
              contained: {
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: { borderRadius: 12, transition: "all 0.3s ease" },
            },
          },
          MuiChip: {
            styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
