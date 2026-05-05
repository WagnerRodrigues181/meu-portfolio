import React from "react";
import { Box, Grid, Typography, useTheme, alpha } from "@mui/material";
import { fadeInUp } from "../../styles/animations";

export default function TechStackBox({ stacks, isOthersSection = false }) {
  const theme = useTheme();

  return (
    <Grid container spacing={isOthersSection ? 3 : 2} justifyContent="center">
      {stacks.map((stack, index) => (
        <Grid
          item
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 90, sm: 100, md: 110 },
              height: { xs: 90, sm: 100, md: 110 },
              bgcolor: alpha(theme.palette.primary.main, 0.9),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: theme.shadows[3],
              animation: `${fadeInUp} 0.6s ease-out ${index * 0.05}s both`,
              "&:hover": {
                transform: "translateY(-8px) scale(1.05)",
                boxShadow: theme.shadows[12],
                bgcolor: theme.palette.primary.dark,
                "& .tech-icon": {
                  transform: "scale(1.2) rotate(5deg)",
                },
              },
            }}
          >
            {/* Verifica se é uma imagem ou um ícone */}
            {stack.icon.type === "img" ? (
              <Box
                className="tech-icon"
                sx={{
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                {React.cloneElement(stack.icon, {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  },
                })}
              </Box>
            ) : (
              React.cloneElement(stack.icon, {
                className: "tech-icon",
                style: {
                  fontSize: 48,
                  color: "white",
                  transition: "transform 0.3s ease",
                },
              })
            )}
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              color: theme.palette.text.primary,
              mt: 1.5,
              fontSize: { xs: "0.75rem", sm: "0.825rem" },
              fontWeight: 600,
              width: isOthersSection ? 130 : 110,
              minHeight: isOthersSection ? 44 : 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              wordWrap: "break-word",
              whiteSpace: "normal",
              lineHeight: 1.4,
            }}
          >
            {stack.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
