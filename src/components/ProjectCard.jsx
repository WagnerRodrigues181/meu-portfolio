import { Box, Stack, Chip, Typography, Button, alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

export default function ProjectCard({
  image,
  title,
  stack,
  repo,
  demo,
  description,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: 3.5,
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(160deg, ${alpha("#ffffff", 0.055)} 0%, ${alpha("#ffffff", 0.02)} 100%)`
            : `linear-gradient(160deg, ${alpha("#ffffff", 0.9)} 0%, ${alpha("#ffffff", 0.7)} 100%)`,
        backdropFilter: "blur(20px)",
        border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
        boxShadow: `0 8px 32px ${alpha("#000", 0.3)}, inset 0 1px 0 ${alpha("#fff", 0.06)}`,
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 20px 48px ${alpha("#000", 0.45)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.3)}`,
          "& .card-image": { transform: "scale(1.04)" },
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          paddingTop: "58%",
          flexShrink: 0,
        }}
      >
        <img
          className="card-image"
          src={image}
          alt={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: `linear-gradient(to top, ${
              theme.palette.mode === "dark"
                ? "rgba(8,8,12,0.95)"
                : "rgba(245,245,250,0.95)"
            } 0%, transparent 100%)`,
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 1,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            background: `linear-gradient(135deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.85),
              mb: 2,
              lineHeight: 1.65,
              fontSize: "0.82rem",
            }}
          >
            {description}
          </Typography>
        )}

        {/* Tech stack chips */}
        <Stack
          direction="row"
          spacing={0.6}
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 2.5, mt: "auto" }}
        >
          {stack.map((tech, index) => (
            <Chip
              key={index}
              icon={
                tech.icon
                  ? React.cloneElement(tech.icon, { style: { fontSize: 13 } })
                  : undefined
              }
              label={tech.label}
              size="small"
              sx={{
                fontWeight: 600,
                fontSize: "0.68rem",
                height: 24,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                color: theme.palette.primary.light,
                "& .MuiChip-icon": { color: theme.palette.primary.light },
                "& .MuiChip-label": { px: 1 },
              }}
            />
          ))}
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={1}>
          {demo && (
            <Button
              size="small"
              variant="contained"
              startIcon={<LaunchIcon sx={{ fontSize: "14px !important" }} />}
              href={demo}
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
          )}
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHubIcon sx={{ fontSize: "14px !important" }} />}
            href={repo}
            target="_blank"
            sx={{
              textTransform: "none",
              fontWeight: 700,
              py: 0.9,
              borderRadius: 2,
              fontSize: "0.8rem",
              minWidth: 90,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
              color: theme.palette.primary.light,
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
      </Box>
    </Box>
  );
}
