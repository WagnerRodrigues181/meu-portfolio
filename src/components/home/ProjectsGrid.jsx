import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  useTheme,
  alpha,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { projects } from "../../data/portfolioData.jsx";
import { fadeInUp } from "../../styles/animations";

export default function ProjectsGrid() {
  const theme = useTheme();

  const nonFeaturedProjects = projects.filter((proj) => !proj.featured);

  const [imageIndices, setImageIndices] = useState(
    nonFeaturedProjects.reduce((acc, _, idx) => ({ ...acc, [idx]: 0 }), {}),
  );

  const handleNextImage = (e, projectIndex, totalImages) => {
    e.stopPropagation();
    setImageIndices((prev) => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % totalImages,
    }));
  };

  const handlePrevImage = (e, projectIndex, totalImages) => {
    e.stopPropagation();
    setImageIndices((prev) => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] - 1 + totalImages) % totalImages,
    }));
  };

  const renderProjectCard = (proj, index) => {
    const hasMultipleImages = proj.images && proj.images.length > 1;
    const currentImageIndex = imageIndices[index] || 0;
    const mainImage = proj.images ? proj.images[currentImageIndex] : proj.image;

    return (
      <Grid item xs={12} sm={6} key={index}>
        <Card
          sx={{
            borderRadius: 3.5,
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            animation: `${fadeInUp} 0.6s ease-out ${index * 0.12}s both`,
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(160deg, ${alpha("#ffffff", 0.055)} 0%, ${alpha("#ffffff", 0.02)} 100%)`
                : `linear-gradient(160deg, ${alpha("#ffffff", 0.92)} 0%, ${alpha("#ffffff", 0.75)} 100%)`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
            boxShadow: `0 8px 32px ${alpha("#000", 0.3)}, inset 0 1px 0 ${alpha("#fff", 0.06)}`,
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: `0 20px 48px ${alpha("#000", 0.45)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.3)}, inset 0 1px 0 ${alpha("#fff", 0.1)}`,
              "& .proj-image": { transform: "scale(1.04)" },
              "& .image-nav-btn": { opacity: 1 },
            },
          }}
        >
          {/* Image - dominant, tall */}
          <Box
            sx={{
              position: "relative",
              paddingTop: "62%",
              overflow: "hidden",
              flexShrink: 0,
              bgcolor:
                theme.palette.mode === "dark"
                  ? alpha("#000", 0.35)
                  : alpha("#000", 0.03),
            }}
          >
            <img
              className="proj-image"
              src={mainImage}
              alt={`${proj.title} screenshot ${currentImageIndex + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Bottom fade */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: theme.palette.mode === "dark" ? "40%" : "20%",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(to top, rgba(8,8,12,0.95) 0%, transparent 100%)"
                    : "linear-gradient(to top, rgba(245,245,250,0.3) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Nav arrows */}
            {hasMultipleImages && (
              <>
                <IconButton
                  className="image-nav-btn"
                  onClick={(e) => handlePrevImage(e, index, proj.images.length)}
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: alpha(theme.palette.background.paper, 0.75),
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${alpha("#fff", 0.1)}`,
                    opacity: 0,
                    transition: "all 0.25s ease",
                    width: 32,
                    height: 32,
                    "&:hover": {
                      bgcolor: theme.palette.background.paper,
                      transform: "translateY(-50%) scale(1.1)",
                    },
                  }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                </IconButton>
                <IconButton
                  className="image-nav-btn"
                  onClick={(e) => handleNextImage(e, index, proj.images.length)}
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: alpha(theme.palette.background.paper, 0.75),
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${alpha("#fff", 0.1)}`,
                    opacity: 0,
                    transition: "all 0.25s ease",
                    width: 32,
                    height: 32,
                    "&:hover": {
                      bgcolor: theme.palette.background.paper,
                      transform: "translateY(-50%) scale(1.1)",
                    },
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                </IconButton>

                {/* Counter */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    bgcolor: alpha(theme.palette.background.paper, 0.72),
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${alpha("#fff", 0.1)}`,
                    px: 1.2,
                    py: 0.3,
                    borderRadius: 1.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: 0.5,
                    }}
                  >
                    {currentImageIndex + 1}/{proj.images.length}
                  </Typography>
                </Box>
              </>
            )}

            {/* Dot indicators */}
            {hasMultipleImages && (
              <Stack
                direction="row"
                spacing={0.5}
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {proj.images.map((_, dotIdx) => (
                  <Box
                    key={dotIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndices((p) => ({ ...p, [index]: dotIdx }));
                    }}
                    sx={{
                      width: dotIdx === currentImageIndex ? 16 : 6,
                      height: 6,
                      borderRadius: 3,
                      bgcolor:
                        dotIdx === currentImageIndex
                          ? theme.palette.primary.main
                          : alpha("#fff", 0.4),
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>

          {/* Content */}
          <CardContent
            sx={{
              p: 2.5,
              pb: "20px !important",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 1,
                fontSize: "1.05rem",
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              {proj.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: alpha(theme.palette.text.secondary, 0.85),
                mb: 2,
                lineHeight: 1.65,
                fontSize: "0.82rem",
              }}
            >
              {proj.description}
            </Typography>

            {/* Stack chips */}
            <Stack
              direction="row"
              spacing={0.6}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2.5, mt: "auto" }}
            >
              {proj.stack.map((item, stackIndex) => (
                <Chip
                  key={stackIndex}
                  icon={item.icon}
                  label={item.label}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    height: 24,
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                    "& .MuiChip-icon": {
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.light
                          : theme.palette.primary.dark,
                      fontSize: 13,
                    },
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              ))}
            </Stack>

            {/* Buttons */}
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="contained"
                startIcon={<LaunchIcon sx={{ fontSize: "14px !important" }} />}
                href={proj.demo}
                target="_blank"
                fullWidth
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  py: 0.9,
                  borderRadius: 2,
                  fontSize: "0.8rem",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}`,
                  "&:hover": {
                    boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.45)}`,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Demo
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<GitHubIcon sx={{ fontSize: "14px !important" }} />}
                href={proj.github}
                target="_blank"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  py: 0.9,
                  borderRadius: 2,
                  fontSize: "0.8rem",
                  minWidth: 90,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.light
                      : theme.palette.primary.dark,
                  "&:hover": {
                    border: `1px solid ${theme.palette.primary.main}`,
                    background: alpha(theme.palette.primary.main, 0.08),
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Code
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Box sx={{ py: 10, position: "relative", overflow: "hidden" }}>
      {/* Subtle ambient glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: 500,
          height: 500,
          background: `radial-gradient(ellipse, ${alpha(theme.palette.primary.main, 0.07)} 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 3,
              mb: 1,
              display: "block",
              fontSize: "0.7rem",
            }}
          >
            ✦ Portfólio ✦
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 1.5,
              letterSpacing: "-0.03em",
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 40%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Outros Projetos
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Aplicações que demonstram expertise em diferentes tecnologias e
            padrões de desenvolvimento
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {nonFeaturedProjects.map(renderProjectCard)}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 7 }}>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/WagnerRodrigues181?tab=repositories"
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 3,
              px: 5,
              py: 1.4,
              fontWeight: 700,
              fontSize: "0.95rem",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              transition: "all 0.25s ease",
              "&:hover": {
                border: `1px solid ${theme.palette.primary.main}`,
                background: alpha(theme.palette.primary.main, 0.08),
                transform: "translateY(-2px)",
                boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
            }}
          >
            Explorar Mais Projetos no GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
