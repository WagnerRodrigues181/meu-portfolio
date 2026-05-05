import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  alpha,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  const theme = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121", // Mantendo sua cor original
        color: "white",
        width: "100%",
        py: 3, // Padding vertical um pouco maior para respiro
        px: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Coluna no mobile, linha no desktop
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        position: "relative",
      }}
    >
      {/* Grupo de Redes Sociais */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Link
          href="https://www.linkedin.com/in/wagner-rodrigues-monteiro/"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "color 0.2s",
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          <LinkedInIcon />
        </Link>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "grey.700", mx: 1 }}
        />

        <Link
          href="https://github.com/WagnerRodrigues181"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "color 0.2s",
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          <GitHubIcon />
        </Link>
      </Box>

      {/* Texto de Créditos */}
      <Typography
        variant="body2"
        sx={{
          opacity: 0.8,
          textAlign: "center",
          mx: { xs: 0, sm: 2 },
        }}
      >
        Built with React + TypeScript + ☕
      </Typography>

      {/* Botão Back to Top */}
      <Tooltip title="Voltar ao topo" arrow>
        <IconButton
          onClick={handleScrollToTop}
          aria-label="voltar ao topo"
          sx={{
            color: "white",
            bgcolor: alpha("#ffffff", 0.1),
            border: `1px solid ${alpha("#ffffff", 0.2)}`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}`,
              transform: "translateY(-3px)", // Efeito de elevação suave
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            },
          }}
          size="small"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
