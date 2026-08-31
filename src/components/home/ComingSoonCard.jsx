import { Box, Container, Typography, Stack, Chip, alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { comingSoonProject } from "../../data/portfolioData.jsx";

export default function ComingSoonCard() {
  const theme = useTheme();
  const proj = comingSoonProject;

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            border: `1.5px dashed ${alpha(theme.palette.primary.main, 0.35)}`,
            background:
              theme.palette.mode === "dark"
                ? alpha("#ffffff", 0.025)
                : alpha("#000000", 0.02),
            position: "relative",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={1.5}
            sx={{ mb: 2 }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              <Box component="span" sx={{ mr: 1 }}>
                {proj.emoji}
              </Box>
              {proj.title}
            </Typography>

            <Chip
              icon={<ScheduleIcon sx={{ fontSize: "15px !important" }} />}
              label={`Em desenvolvimento · previsão ${proj.expected}`}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: "0.72rem",
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                color: theme.palette.primary.light,
              }}
            />
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.85),
              lineHeight: 1.65,
              mb: 2.5,
              maxWidth: 640,
            }}
          >
            {proj.description}
          </Typography>

          <Stack direction="row" spacing={0.6} flexWrap="wrap" useFlexGap>
            {proj.stack.map((tech, idx) => (
              <Chip
                key={idx}
                icon={tech.icon}
                label={tech.label}
                size="small"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.68rem",
                  height: 24,
                  bgcolor: alpha(theme.palette.primary.main, 0.06),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
                  color: alpha(theme.palette.text.secondary, 0.75),
                  "& .MuiChip-icon": {
                    color: alpha(theme.palette.text.secondary, 0.75),
                    fontSize: 12,
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}