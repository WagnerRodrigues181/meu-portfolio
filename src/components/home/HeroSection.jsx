import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { fadeInUp, floatAnimation } from "../../styles/animations";
import profilepic from "../../assets/profilepic3.png";

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(135deg, ${alpha(
                theme.palette.primary.dark,
                0.2,
              )} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`
            : `linear-gradient(135deg, ${alpha(
                theme.palette.primary.light,
                0.1,
              )} 0%, ${theme.palette.background.default} 100%)`,
        animation: `${fadeInUp} 1s ease-out`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                border: `8px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                overflow: "hidden",
                width: { xs: 200, sm: 260, md: 300 },
                height: { xs: 200, sm: 260, md: 300 },
                mx: "auto",
                filter: `drop-shadow(0 10px 20px ${alpha(
                  theme.palette.common.black,
                  0.3,
                )})`,
                animation: `${floatAnimation} 3s ease-in-out infinite`,
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={profilepic}
                alt="Wagner Rodrigues"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                lineHeight: 1.1,
                mb: 2,
                pb: 2,
              }}
            >
              Wagner Rodrigues
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
                mb: 2,
                color: theme.palette.text.secondary,
              }}
            >
              Desenvolvedor Full-Stack | Foco em Front-End
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                color: theme.palette.text.secondary,
                mb: 5,
              }}
            >
              Cada projeto foi uma escolha de evoluir além do mínimo esperado.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", pt: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/WagnerRodrigues181"
                target="_blank"
                sx={{ textTransform: "none", borderRadius: 2, px: 3, py: 1.5 }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contato"
                sx={{ textTransform: "none", borderRadius: 2, px: 3, py: 1.5 }}
              >
                Entre em Contato
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
