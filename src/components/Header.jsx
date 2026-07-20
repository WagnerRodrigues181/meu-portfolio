import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Box,
  Menu,
  MenuItem,
  Dialog,
  Typography,
  Button,
  Snackbar,
  Alert,
  Stack,
  useTheme,
  Container,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useLocation } from "react-router-dom";

export default function Header({ mode, setMode }) {
  const theme = useTheme();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const MY_EMAIL = "rodrigueswagner181@gmail.com";

  const handleContactClick = (e) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenEmailDialog = () => {
    handleCloseMenu();
    setOpenEmailDialog(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MY_EMAIL);
      setSnackbarOpen(true);
    } catch {
      alert("Copie manualmente: " + MY_EMAIL);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/32999996976", "_blank", "noopener,noreferrer");
    handleCloseMenu();
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={mode === "dark" ? 2 : 0}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
          "& .MuiIconButton-root": { color: "#fff" },
          "& .MuiSvgIcon-root": { color: "#fff" },
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <Toolbar
            sx={{
              height: 64,
              minHeight: 64,
              maxHeight: 64,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* LEFT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleContactClick}
                disableRipple
                disableTouchRipple
                sx={{
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "rotate(90deg)" },
                }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                PaperProps={{
                  sx: { mt: 1, borderRadius: 2, boxShadow: theme.shadows[8] },
                }}
              >
                <MenuItem onClick={handleOpenEmailDialog}>
                  <EmailIcon fontSize="small" sx={{ mr: 1.5 }} />
                  E-mail
                </MenuItem>
                <MenuItem onClick={handleWhatsApp}>
                  <WhatsAppIcon fontSize="small" sx={{ mr: 1.5 }} />
                  WhatsApp
                </MenuItem>
              </Menu>
            </Box>

            {/* RIGHT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip
                title={mode === "dark" ? "Modo Claro" : "Modo Escuro"}
                arrow
              >
                <IconButton
                  color="inherit"
                  disableRipple
                  disableTouchRipple
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  sx={{
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "rotate(180deg)" },
                  }}
                >
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Email Dialog */}
      <Dialog
        open={openEmailDialog}
        onClose={() => setOpenEmailDialog(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(145deg, ${alpha("#ffffff", 0.07)} 0%, ${alpha("#ffffff", 0.03)} 100%)`
                : theme.palette.background.paper,
            backdropFilter: "blur(20px)",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            boxShadow: `0 24px 64px ${alpha("#000", 0.45)}, inset 0 1px 0 ${alpha("#fff", 0.07)}`,
            overflow: "hidden",
          },
        }}
      >
        {/* Top accent bar */}
        <Box
          sx={{
            height: 3,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          }}
        />

        <Box sx={{ p: 3 }}>
          {/* Header row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.12),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon
                  sx={{ fontSize: 20, color: theme.palette.primary.main }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, lineHeight: 1.2 }}
                >
                  Enviar E-mail
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Entre em contato diretamente
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              onClick={() => setOpenEmailDialog(false)}
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": { color: theme.palette.text.primary },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Email display */}
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.06),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.9rem",
                color: theme.palette.primary.light,
                wordBreak: "break-all",
                letterSpacing: "0.01em",
              }}
            >
              {MY_EMAIL}
            </Typography>
            <Tooltip title="Copiar" arrow>
              <IconButton
                size="small"
                onClick={handleCopyEmail}
                sx={{
                  flexShrink: 0,
                  color: theme.palette.text.secondary,
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Action buttons */}
          <Stack spacing={1.5}>
            <Button
              variant="contained"
              fullWidth
              href={`mailto:${MY_EMAIL}`}
              startIcon={<OpenInNewIcon sx={{ fontSize: "16px !important" }} />}
              onClick={() => setOpenEmailDialog(false)}
              sx={{
                py: 1.3,
                fontWeight: 700,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "0.9rem",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.35)}`,
                "&:hover": {
                  boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.5)}`,
                  transform: "translateY(-1px)",
                },
              }}
            >
              Abrir cliente de e-mail
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={
                <ContentCopyIcon sx={{ fontSize: "16px !important" }} />
              }
              onClick={handleCopyEmail}
              sx={{
                py: 1.3,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "0.9rem",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                color: theme.palette.primary.light,
                "&:hover": {
                  border: `1px solid ${theme.palette.primary.main}`,
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  transform: "translateY(-1px)",
                },
              }}
            >
              Copiar endereço
            </Button>
          </Stack>
        </Box>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
          E-mail copiado!
        </Alert>
      </Snackbar>
    </>
  );
}