import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";

export default function ContactSection() {
  const theme = useTheme();

  const ContactButton = ({
    href,
    icon,
    title,
    subtitle,
    hoverColor,
    download,
  }) => (
    <Button
      href={href}
      target={download ? undefined : "_blank"}
      download={download}
      fullWidth
      sx={{
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        bgcolor: alpha(theme.palette.background.paper, 0.6),
        backdropFilter: "blur(10px)",
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        borderRadius: 4,
        color: theme.palette.text.primary,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: theme.shadows[2],
        "&:hover": {
          transform: "translateY(-8px)",
          bgcolor: alpha(hoverColor || theme.palette.primary.main, 0.1),
          borderColor: hoverColor || theme.palette.primary.main,
          boxShadow: `0 12px 30px ${alpha(
            hoverColor || theme.palette.primary.main,
            0.2,
          )}`,
          "& .icon-box": {
            transform: "scale(1.1) rotate(-5deg)",
            bgcolor: hoverColor || theme.palette.primary.main,
            color: "#fff",
          },
        },
      }}
    >
      <Box
        className="icon-box"
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          bgcolor: alpha(hoverColor || theme.palette.primary.main, 0.1),
          color: hoverColor || theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          mb: 1,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Button>
  );

  return (
    <Box
      id="contato"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(180deg, 
                ${alpha(theme.palette.primary.dark, 0.05)} 0%,
                ${alpha(theme.palette.primary.dark, 0.12)} 35%,
                ${alpha(theme.palette.primary.dark, 0.12)} 60%,
                ${alpha(theme.palette.primary.dark, 0.08)} 85%,
                #1a1a1a 100%
              )`
            : `linear-gradient(180deg, 
                ${alpha(theme.palette.primary.light, 0.03)} 0%,
                ${alpha(theme.palette.primary.light, 0.07)} 35%,
                ${alpha(theme.palette.primary.light, 0.07)} 60%,
                ${alpha(theme.palette.primary.light, 0.04)} 85%,
                #f5f5f0 100%
              )`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "50%",
          background: alpha(theme.palette.primary.main, 0.04),
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={2}
          alignItems="center"
          mb={{ xs: 4, md: 8 }}
          textAlign="center"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Vamos Conversar?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Estou sempre aberto a novos desafios e parcerias. Seja para discutir
            um projeto ou apenas trocar uma ideia, minha caixa de entrada está
            aberta.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <ContactButton
              href="mailto:rodrigueswagner181@gmail.com"
              icon={<EmailIcon sx={{ fontSize: 32 }} />}
              title="Envie um E-mail"
              subtitle="rodrigueswagner181@gmail.com"
              hoverColor={theme.palette.primary.main}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ContactButton
              href="https://api.whatsapp.com/send?phone=5532999996976"
              icon={<WhatsAppIcon sx={{ fontSize: 32 }} />}
              title="WhatsApp"
              subtitle="Resposta rápida"
              hoverColor={theme.palette.success.main}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ContactButton
              href="/assets/Wagner_Rodrigues_Frontend_Developer.pdf"
              icon={<DescriptionIcon sx={{ fontSize: 32 }} />}
              title="Currículo"
              subtitle="Baixar versão PDF"
              hoverColor={theme.palette.secondary.main}
              download
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
