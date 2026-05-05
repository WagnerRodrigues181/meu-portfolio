import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
          color: theme.palette.text.primary,
        }}
      >
        Sobre Mim
      </Typography>

      <Card
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: theme.shadows[4],
          background:
            theme.palette.mode === "dark"
              ? alpha(theme.palette.background.paper, 0.6)
              : theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              mb: 3,
            }}
          >
            Sou desenvolvedor Full-Stack com foco em Front-End, formado pela
            Trybe em 2024 com mais de 1.500 horas de prática. Trabalho com React
            e TypeScript priorizando arquitetura modular, testes automatizados e
            código que sustenta crescimento. Meus projetos pessoais foram
            construídos com atenção real a qualidade, não só a entrega.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              mb: 3,
            }}
          >
            Com mais de 30 projetos desenvolvidos, entre eles 10 aplicações
            front-end completas, construí familiaridade real com o ciclo de
            desenvolvimento: da ideia ao deploy, passando por integração de
            APIs, testes e decisões de arquitetura.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Chip
              label="Português (Nativo)"
              color="primary"
              variant="outlined"
            />
            <Chip
              label="Inglês (Intermediário)"
              color="primary"
              variant="outlined"
            />
            <Chip
              label="Metodologias Ágeis"
              color="secondary"
              variant="outlined"
            />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
