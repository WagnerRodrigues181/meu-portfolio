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
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVitest,
  SiZod,
  SiFramer,
} from "react-icons/si";
import { TbChartBar } from "react-icons/tb";

import nutrilensHome from "../../assets/nutrilens-dashboard.png";
import nutrilensMeals from "../../assets/nutrilens-meal-templates.png";
import nutrilensGraphs from "../../assets/nutrilens-graphs.png";
import nutrilensAchievements from "../../assets/nutrilens-achievement-progress.png";

export default function FeaturedProject() {
  const theme = useTheme();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const lightboxPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  };
  const lightboxNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % screenshots.length);
  };

  const screenshots = [
    { src: nutrilensHome, alt: "Dashboard principal", title: "Dashboard" },
    { src: nutrilensMeals, alt: "Templates de refeições", title: "Refeições" },
    { src: nutrilensGraphs, alt: "Gráficos interativos", title: "Gráficos" },
    {
      src: nutrilensAchievements,
      alt: "Sistema de conquistas",
      title: "Conquistas",
    },
  ];

  const features = [
    {
      emoji: "📊",
      title: "Dashboard Inteligente",
      description:
        "Progresso circular de macros e sistema de streaks com gamificação",
    },
    {
      emoji: "🍽️",
      title: "Gestão de Refeições",
      description:
        "CRUD completo com templates reutilizáveis e histórico por calendário",
    },
    {
      emoji: "📈",
      title: "Visualização de Dados",
      description:
        "4 tipos de gráficos interativos com análise estatística automática",
    },
    {
      emoji: "✅",
      title: "Qualidade",
      description: "96% de cobertura de testes, export/import em CSV/JSON",
    },
  ];

  const techStack = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { label: "Zustand" },
    { icon: <TbChartBar />, label: "Recharts" },
    { icon: <SiFramer />, label: "Framer" },
    { icon: <SiZod />, label: "Zod" },
    { icon: <SiVitest />, label: "Vitest 96%" },
  ];

  const handlePrev = () =>
    setActiveTab((p) => (p - 1 + screenshots.length) % screenshots.length);
  const handleNext = () => setActiveTab((p) => (p + 1) % screenshots.length);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: `radial-gradient(ellipse, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 3,
              mb: 1.5,
              display: "block",
              fontSize: "0.7rem",
            }}
          >
            ✦ Projeto em Destaque ✦
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", md: "3rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1,
              mb: 1.5,
            }}
          >
            <Box component="span" sx={{ mr: 1.5 }}>
              🥗
            </Box>
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NutriLens
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.8),
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Rastreador nutricional completo com análise de macros, visualização
            de dados e alta cobertura de testes
          </Typography>
        </Box>

        {/* Card Container */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(145deg, ${alpha("#ffffff", 0.05)} 0%, ${alpha("#ffffff", 0.02)} 100%)`
                : `linear-gradient(145deg, ${alpha("#ffffff", 0.9)} 0%, ${alpha("#ffffff", 0.7)} 100%)`,
            backdropFilter: "blur(20px)",
            boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)}, 0 32px 64px ${alpha("#000", 0.4)}, inset 0 1px 0 ${alpha("#fff", 0.08)}`,
          }}
        >
          {/* === HERO IMAGE AREA === */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background:
                theme.palette.mode === "dark"
                  ? alpha("#000", 0.3)
                  : alpha("#000", 0.04),
              cursor: "pointer",
            }}
            onClick={() => setLightboxIndex(activeTab)}
          >
            {/* Main image */}
            <Box
              component="img"
              src={screenshots[activeTab].src}
              alt={screenshots[activeTab].alt}
              sx={{
                width: "100%",
                height: { xs: 220, sm: 340, md: 420 },
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transition: "transform 0.5s ease",
                "&:hover": { transform: "scale(1.015)" },
              }}
            />

            {/* Bottom fade overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: theme.palette.mode === "dark" ? "45%" : "25%",
                background:
                  theme.palette.mode === "dark"
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
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.background.paper, 0.7),
                backdropFilter: "blur(10px)",
                border: `1px solid ${alpha("#fff", 0.1)}`,
                color: theme.palette.text.primary,
                width: 36,
                height: 36,
                "&:hover": {
                  bgcolor: alpha(theme.palette.background.paper, 0.95),
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              sx={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.background.paper, 0.7),
                backdropFilter: "blur(10px)",
                border: `1px solid ${alpha("#fff", 0.1)}`,
                color: theme.palette.text.primary,
                width: 36,
                height: 36,
                "&:hover": {
                  bgcolor: alpha(theme.palette.background.paper, 0.95),
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </IconButton>

            {/* Screenshot counter badge */}
            <Box
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                bgcolor: alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(12px)",
                border: `1px solid ${alpha("#fff", 0.1)}`,
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, letterSpacing: 1 }}
              >
                {activeTab + 1} / {screenshots.length}
              </Typography>
            </Box>
          </Box>

          {/* === THUMBNAIL STRIP === */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              px: 3,
              py: 2,
              borderBottom: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
              overflowX: "auto",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {screenshots.map((s, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveTab(idx)}
                sx={{
                  flexShrink: 0,
                  width: 80,
                  height: 52,
                  borderRadius: 1.5,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `2px solid ${activeTab === idx ? theme.palette.primary.main : alpha(theme.palette.divider, 0.2)}`,
                  transition: "all 0.2s ease",
                  opacity: activeTab === idx ? 1 : 0.5,
                  "&:hover": {
                    opacity: 1,
                    border: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`,
                  },
                }}
              >
                <Box
                  component="img"
                  src={s.src}
                  alt={s.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* === INFO AREA === */}
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            {/* Tech chips */}
            <Stack
              direction="row"
              spacing={0.8}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 3.5 }}
            >
              {techStack.map((tech, idx) => (
                <Chip
                  key={idx}
                  icon={tech.icon}
                  label={tech.label}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                    "& .MuiChip-icon": {
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.light
                          : theme.palette.primary.dark,
                      fontSize: 14,
                    },
                  }}
                />
              ))}
            </Stack>

            {/* Features grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                gap: 2,
                mb: 4,
              }}
            >
              {features.map((f, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: 2,
                    borderRadius: 2.5,
                    background: alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: alpha(theme.palette.primary.main, 0.1),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1.4rem", mb: 0.75 }}>
                    {f.emoji}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      display: "block",
                      mb: 0.5,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                      display: "block",
                    }}
                  >
                    {f.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Action buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href="https://nutrilens-pearl.vercel.app/"
                target="_blank"
                sx={{
                  flex: 1,
                  textTransform: "none",
                  py: 1.4,
                  fontWeight: 700,
                  borderRadius: 2.5,
                  fontSize: "0.9rem",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.35)}`,
                  "&:hover": {
                    boxShadow: `0 6px 28px ${alpha(theme.palette.primary.main, 0.5)}`,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Ver Aplicação
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/WagnerRodrigues181/nutri-lens"
                target="_blank"
                sx={{
                  textTransform: "none",
                  py: 1.4,
                  fontWeight: 700,
                  borderRadius: 2.5,
                  fontSize: "0.9rem",
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.light
                      : theme.palette.primary.dark,
                  minWidth: { sm: 180 },
                  "&:hover": {
                    border: `1px solid ${theme.palette.primary.main}`,
                    background: alpha(theme.palette.primary.main, 0.08),
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
            {/* Close */}
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

            {/* Prev */}
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

            {/* Next */}
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

            {/* Image */}
            <Box
              component="img"
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].alt}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />

            {/* Counter + title */}
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
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, letterSpacing: 0.5 }}
              >
                {screenshots[lightboxIndex].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: alpha(theme.palette.text.secondary, 0.7),
                  fontWeight: 500,
                }}
              >
                {lightboxIndex + 1} / {screenshots.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
