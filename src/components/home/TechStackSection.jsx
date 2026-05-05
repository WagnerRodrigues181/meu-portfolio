import React from "react";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import TechStackBox from "../common/TechStackBox";
import {
  frontEndStacks,
  backEndStacks,
  otherStacks,
} from "../../data/portfolioData.jsx";

export default function TechStackSection() {
  const theme = useTheme();

  const SectionTitle = ({ children }) => (
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        mb: 5,
        textAlign: "center",
        color: theme.palette.primary.main,
        position: "relative",
        display: "inline-block",
        left: "50%",
        transform: "translateX(-50%)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -10,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
          borderRadius: "2px",
        },
      }}
    >
      {children}
    </Typography>
  );

  return (
    <Box
      sx={{
        py: 10,
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(180deg, ${alpha(
                theme.palette.primary.dark,
                0.03
              )} 0%, ${alpha(theme.palette.background.default, 0.5)} 100%)`
            : `linear-gradient(180deg, ${alpha(
                theme.palette.primary.light,
                0.03
              )} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 10,
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          Tech Stack
        </Typography>

        {/* FRONT-END */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle>Front-End</SectionTitle>
          <TechStackBox stacks={frontEndStacks} />
        </Box>

        {/* BACK-END */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle>Back-End</SectionTitle>
          <TechStackBox stacks={backEndStacks} />
        </Box>

        {/* OUTROS */}
        <Box>
          <SectionTitle>Outros</SectionTitle>
          <TechStackBox stacks={otherStacks} isOthersSection={true} />
        </Box>
      </Container>
    </Box>
  );
}
