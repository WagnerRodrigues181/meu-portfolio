import React from "react";
import { Box, IconButton, useTheme, alpha, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { zoomIn, zoomOut } from "../../styles/animations";

export default function CertificationModal({ cert, isClosing, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
        animation: isClosing
          ? `${zoomOut} 0.3s ease-out`
          : `${zoomIn} 0.3s ease-out`,
        cursor: "pointer",
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: "70%" },
          maxHeight: "90vh",
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: theme.shadows[24],
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: theme.palette.text.primary,
            bgcolor: alpha(theme.palette.background.paper, 0.7),
            "&:hover": {
              bgcolor: theme.palette.background.paper,
            },
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
