import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Collapse,
  Button,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TechStackBox from "../common/TechStackBox";
import {
  frontEndStacks,
  backEndStacks,
  otherStacks,
} from "../../data/portfolioData.jsx";

export default function TechStackSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [backEndOpen, setBackEndOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

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

  const CollapseToggle = ({ open, onToggle, label }) => (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Button
        onClick={onToggle}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.85rem",
          color: theme.palette.primary.main,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          borderRadius: 3,
          px: 3,
          py: 0.8,
          bgcolor: alpha(theme.palette.primary.main, 0.05),
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        {open ? "Recolher" : label}
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        py: 10,
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(180deg, ${alpha(theme.palette.primary.dark, 0.03)} 0%, ${alpha(theme.palette.background.default, 0.5)} 100%)`
            : `linear-gradient(180deg, ${alpha(theme.palette.primary.light, 0.03)} 0%, ${theme.palette.background.default} 100%)`,
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

        {/* FRONT-END — sempre visível */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle>Front-End</SectionTitle>
          <TechStackBox stacks={frontEndStacks} />
        </Box>

        {/* BACK-END */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle>Back-End</SectionTitle>
          {isMobile ? (
            <>
              <Collapse in={backEndOpen} timeout={400}>
                <TechStackBox stacks={backEndStacks} />
              </Collapse>
              <CollapseToggle
                open={backEndOpen}
                onToggle={() => setBackEndOpen((p) => !p)}
                label="Ver tecnologias Back-End"
              />
            </>
          ) : (
            <TechStackBox stacks={backEndStacks} />
          )}
        </Box>

        {/* OUTROS */}
        <Box>
          <SectionTitle>Outros</SectionTitle>
          {isMobile ? (
            <>
              <Collapse in={othersOpen} timeout={400}>
                <TechStackBox stacks={otherStacks} isOthersSection={true} />
              </Collapse>
              <CollapseToggle
                open={othersOpen}
                onToggle={() => setOthersOpen((p) => !p)}
                label="Ver outras tecnologias"
              />
            </>
          ) : (
            <TechStackBox stacks={otherStacks} isOthersSection={true} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
