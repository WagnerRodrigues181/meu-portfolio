import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
  alpha,
  IconButton,
  Dialog,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { projects } from "../../data/portfolioData.jsx";

// Tokens CRT Phosphor (pro linkforge)
const CRT = {
  bg: "#050505",
  surface: "#0a0a0a",
  border: "#2b2b2b",
  text: "#fafafa",
  textMuted: "#7a7a7a",
  accent: "#f5f5f5",
  headingFont: "'Space Grotesk', sans-serif",
  bodyFont: "'JetBrains Mono', monospace",
};

export default function FeaturedProject({ project }) {
  const theme = useTheme();
  const proj = project ?? projects.find((p) => p.featured);
  const isCrt = proj?.theme === "crt";

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  if (!proj) return null;

  const screenshots = proj.images.map((src, idx) => ({
    src,
    alt: `${proj.title} screenshot ${idx + 1}`,
    title: `Screenshot ${idx + 1}`,
  }));

  const lightboxPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  };
  const lightboxNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % screenshots.length);
  };
  const handlePrev = () =>
    setActiveTab((p) => (p - 1 + screenshots.length) % screenshots.length);
  const handleNext = () => setActiveTab((p) => (p + 1) % screenshots.length);

  // Cores derivadas: CRT usa tokens fixos monocromáticos, o resto usa o tema café
  const accentColor = isCrt ? CRT.accent : theme.palette.primary.main;
  const borderColor = isCrt
    ? CRT.border
    : alpha(theme.palette.primary.main, 0.2);
  const surfaceBg = isCrt
    ? CRT.bg
    : theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${alpha("#ffffff", 0.05)} 0%, ${alpha("#ffffff", 0.02)} 100%)`
      : `linear-gradient(145deg, ${alpha("#ffffff", 0.9)} 0%, ${alpha("#ffffff", 0.7)} 100%)`;
  const headingFont = isCrt ? CRT.headingFont : undefined;
  const bodyFont = isCrt ? CRT.bodyFont : undefined;

  return (
    <Box
      sx={{
        py: { xs: 7, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 960,
          height: 480,
          background: `radial-gradient(ellipse, ${alpha(accentColor, isCrt ? 0.06 : 0.12)} 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <Typography
            variant="overline"
            sx={{
              color: accentColor,
              fontWeight: 700,
              letterSpacing: 3.5,
              mb: 2,
              display: "block",
              fontSize: "0.84rem",
              fontFamily: bodyFont,
            }}
          >
            ✦ Projeto em Destaque ✦
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.64rem", md: "3.6rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              mb: 2,
              fontFamily: headingFont,
              ...(isCrt
                ? { color: CRT.text }
                : {
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }),
            }}
          >
            {proj.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isCrt ? CRT.textMuted : alpha(theme.palette.text.secondary, 0.8),
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.7,
              fontFamily: bodyFont,
              fontSize: "1.08rem",
            }}
          >
            {proj.description}
          </Typography>
        </Box>

        {/* Card Container */}
        <Box
          sx={{
            borderRadius: isCrt ? 2 : 4,
            overflow: "hidden",
            border: `1px solid ${borderColor}`,
            background: surfaceBg,
            backdropFilter: isCrt ? "none" : "blur(20px)",
            boxShadow: isCrt
              ? `0 32px 64px ${alpha("#000", 0.6)}`
              : `0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)}, 0 32px 64px ${alpha("#000", 0.4)}, inset 0 1px 0 ${alpha("#fff", 0.08)}`,
            position: "relative",
          }}
        >
          {/* Scanline overlay — só no CRT */}
          {isCrt && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 3,
                background:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px, transparent 1px, transparent 3px)",
              }}
            />
          )}

          {/* === HERO IMAGE AREA === */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background: isCrt
                ? CRT.surface
                : theme.palette.mode === "dark"
                  ? alpha("#000", 0.3)
                  : alpha("#000", 0.04),
              cursor: "pointer",
            }}
            onClick={() => setLightboxIndex(activeTab)}
          >
            <Box
              component="img"
              src={screenshots[activeTab].src}
              alt={screenshots[activeTab].alt}
              sx={{
                width: "100%",
                height: { xs: 264, sm: 408, md: 504 },
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transition: "transform 0.5s ease",
                "&:hover": { transform: "scale(1.015)" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: isCrt ? "35%" : theme.palette.mode === "dark" ? "45%" : "25%",
                background: isCrt
                  ? `linear-gradient(to top, ${CRT.bg} 0%, transparent 100%)`
                  : theme.palette.mode === "dark"
                    ? "linear-gradient(to top, rgba(10,10,15,1) 0%, transparent 100%)"
                    : "linear-gradient(to top, rgba(245,245,250,0.35) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Nav arrows */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: isCrt ? alpha(CRT.surface, 0.85) : alpha(theme.palette.background.paper, 0.7),
                backdropFilter: "blur(10px)",
                border: `1px solid ${isCrt ? CRT.border : alpha("#fff", 0.1)}`,
                borderRadius: isCrt ? 0 : "50%",
                color: isCrt ? CRT.text : theme.palette.text.primary,
                width: 44,
                height: 44,
                "&:hover": {
                  bgcolor: isCrt ? CRT.border : alpha(theme.palette.background.paper, 0.95),
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 17 }} />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: isCrt ? alpha(CRT.surface, 0.85) : alpha(theme.palette.background.paper, 0.7),
                backdropFilter: "blur(10px)",
                border: `1px solid ${isCrt ? CRT.border : alpha("#fff", 0.1)}`,
                borderRadius: isCrt ? 0 : "50%",
                color: isCrt ? CRT.text : theme.palette.text.primary,
                width: 44,
                height: 44,
                "&:hover": {
                  bgcolor: isCrt ? CRT.border : alpha(theme.palette.background.paper, 0.95),
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 17 }} />
            </IconButton>

            <Box
              sx={{
                position: "absolute",
                top: 18,
                right: 18,
                bgcolor: isCrt ? alpha(CRT.surface, 0.85) : alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(12px)",
                border: `1px solid ${isCrt ? CRT.border : alpha("#fff", 0.1)}`,
                borderRadius: isCrt ? 0 : 2,
                px: 1.8,
                py: 0.6,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontFamily: bodyFont,
                  fontSize: "0.85rem",
                  color: isCrt ? CRT.text : undefined,
                }}
              >
                {activeTab + 1} / {screenshots.length}
              </Typography>
            </Box>
          </Box>

          {/* === THUMBNAIL STRIP === */}
          <Box
            sx={{
              display: "flex",
              gap: 1.2,
              px: 3.6,
              py: 2.4,
              borderBottom: `1px solid ${isCrt ? CRT.border : alpha(theme.palette.divider, 0.15)}`,
              overflowX: "auto",
              bgcolor: isCrt ? CRT.bg : undefined,
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {screenshots.map((s, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveTab(idx)}
                sx={{
                  flexShrink: 0,
                  width: 96,
                  height: 62,
                  borderRadius: isCrt ? 0 : 1.5,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `2px solid ${
                    activeTab === idx
                      ? accentColor
                      : isCrt
                        ? CRT.border
                        : alpha(theme.palette.divider, 0.2)
                  }`,
                  transition: "all 0.2s ease",
                  opacity: activeTab === idx ? 1 : 0.5,
                  "&:hover": {
                    opacity: 1,
                    border: `2px solid ${alpha(accentColor, 0.6)}`,
                  },
                }}
              >
                <Box
                  component="img"
                  src={s.src}
                  alt={s.title}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </Box>
            ))}
          </Box>

          {/* === INFO AREA === */}
          <Box sx={{ p: { xs: 3.6, md: 4.8 }, bgcolor: isCrt ? CRT.bg : undefined }}>
            {/* Tech chips */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4.2 }}>
              {proj.stack.map((tech, idx) => (
                <Chip
                  key={idx}
                  icon={tech.icon}
                  label={tech.label}
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.84rem",
                    height: 34,
                    fontFamily: bodyFont,
                    borderRadius: isCrt ? 0.5 : undefined,
                    bgcolor: isCrt ? "transparent" : alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${isCrt ? CRT.border : alpha(theme.palette.primary.main, 0.25)}`,
                    color: isCrt
                      ? CRT.text
                      : theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                    "& .MuiChip-icon": {
                      color: isCrt
                        ? CRT.textMuted
                        : theme.palette.mode === "dark"
                          ? theme.palette.primary.light
                          : theme.palette.primary.dark,
                      fontSize: 17,
                    },
                  }}
                />
              ))}
            </Stack>

            {/* Features list */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.8,
                mb: 4.8,
              }}
            >
              {proj.features.map((f, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: 2.1,
                    borderRadius: isCrt ? 0 : 2.5,
                    background: isCrt ? CRT.surface : alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${isCrt ? CRT.border : alpha(theme.palette.primary.main, 0.1)}`,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: isCrt ? CRT.border : alpha(theme.palette.primary.main, 0.1),
                      border: `1px solid ${isCrt ? CRT.text : alpha(theme.palette.primary.main, 0.25)}`,
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: bodyFont,
                      fontWeight: isCrt ? 500 : 600,
                      color: isCrt ? CRT.text : theme.palette.text.primary,
                      lineHeight: 1.6,
                      fontSize: "1rem",
                    }}
                  >
                    {f}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Action buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.8}>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={proj.demo}
                target="_blank"
                sx={{
                  flex: 1,
                  textTransform: "none",
                  py: 1.68,
                  fontWeight: 700,
                  fontFamily: bodyFont,
                  borderRadius: isCrt ? 0.5 : 2.5,
                  fontSize: "1.08rem",
                  background: isCrt ? CRT.accent : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  color: isCrt ? "#000" : undefined,
                  boxShadow: isCrt ? "none" : `0 4px 20px ${alpha(theme.palette.primary.main, 0.35)}`,
                  "&:hover": {
                    background: isCrt ? "#d0d0d0" : undefined,
                    boxShadow: isCrt ? "none" : `0 6px 28px ${alpha(theme.palette.primary.main, 0.5)}`,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Ver Aplicação
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={proj.github}
                target="_blank"
                sx={{
                  textTransform: "none",
                  py: 1.68,
                  fontWeight: 700,
                  fontFamily: bodyFont,
                  borderRadius: isCrt ? 0.5 : 2.5,
                  fontSize: "1.08rem",
                  border: `1px solid ${isCrt ? CRT.border : alpha(theme.palette.primary.main, 0.4)}`,
                  color: isCrt
                    ? CRT.text
                    : theme.palette.mode === "dark"
                      ? theme.palette.primary.light
                      : theme.palette.primary.dark,
                  minWidth: { sm: 216 },
                  "&:hover": {
                    border: `1px solid ${isCrt ? CRT.text : theme.palette.primary.main}`,
                    background: isCrt ? CRT.surface : alpha(theme.palette.primary.main, 0.08),
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Show me the code!
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: alpha(theme.palette.background.paper, 0.92),
            backdropFilter: "blur(20px)",
            borderRadius: 3,
            border: `1px solid ${alpha("#fff", 0.08)}`,
            overflow: "hidden",
          },
        }}
      >
        {lightboxIndex !== null && (
          <Box sx={{ position: "relative", userSelect: "none" }}>
            <IconButton
              onClick={() => setLightboxIndex(null)}
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
                zIndex: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: "blur(10px)",
              }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              onClick={lightboxPrev}
              sx={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(12px)",
                border: `1px solid ${alpha("#fff", 0.12)}`,
                "&:hover": {
                  bgcolor: theme.palette.background.paper,
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={lightboxNext}
              sx={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(12px)",
                border: `1px solid ${alpha("#fff", 0.12)}`,
                "&:hover": {
                  bgcolor: theme.palette.background.paper,
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box
              component="img"
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].alt}
              sx={{ width: "100%", height: "auto", display: "block", maxHeight: "90vh", objectFit: "contain" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(12px)",
                border: `1px solid ${alpha("#fff", 0.1)}`,
                borderRadius: 2,
                px: 2,
                py: 0.6,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                {screenshots[lightboxIndex].title}
              </Typography>
              <Typography variant="caption" sx={{ color: alpha(theme.palette.text.secondary, 0.7), fontWeight: 500 }}>
                {lightboxIndex + 1} / {screenshots.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}