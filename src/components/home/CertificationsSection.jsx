import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  alpha,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

import trybeFrontendImage from "../../assets/trybe-frontend.png";
import trybeBackendImage from "../../assets/trybe-backend.png";
import trybeCSImage from "../../assets/trybe-cs.png";
import trybeCSharpImage from "../../assets/trybe-csharp.png";
import trybeFullstackImage from "../../assets/trybe-fullstack.png";
import horaCodarLogicaImage from "../../assets/hora-codar-logica.png";

const certifications = [
  {
    id: 1,
    title: "Módulo Front-End (Trybe)",
    image: trybeFrontendImage,
  },
  {
    id: 2,
    title: "Módulo Back-End (Trybe)",
    image: trybeBackendImage,
  },
  {
    id: 3,
    title: "Módulo Ciência da Computação (Trybe)",
    image: trybeCSImage,
  },
  {
    id: 4,
    title: "Certificação Eletiva em C# (Trybe)",
    image: trybeCSharpImage,
  },
  {
    id: 5,
    title: "Formação em Desenvolvimento Full-Stack (Trybe)",
    image: trybeFullstackImage,
  },
  {
    id: 6,
    title: "Método Master Lógica (Hora de Codar)",
    image: horaCodarLogicaImage,
  },
];

// Animações refinadas
const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const modalFadeIn = `
  @keyframes modalFadeIn {
    0% { 
      opacity: 0;
    }
    100% { 
      opacity: 1;
    }
  }
`;

const modalFadeOut = `
  @keyframes modalFadeOut {
    0% { 
      opacity: 1;
    }
    100% { 
      opacity: 0;
    }
  }
`;

const contentZoomIn = `
  @keyframes contentZoomIn {
    0% { 
      transform: scale(0.96);
      opacity: 0;
    }
    100% { 
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const contentZoomOut = `
  @keyframes contentZoomOut {
    0% { 
      transform: scale(1);
      opacity: 1;
    }
    100% { 
      transform: scale(0.96);
      opacity: 0;
    }
  }
`;

// Modal de Certificação com animações refinadas
function CertificationModal({ cert, isClosing, onClose }) {
  const theme = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{modalFadeIn}</style>
      <style>{modalFadeOut}</style>
      <style>{contentZoomIn}</style>
      <style>{contentZoomOut}</style>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0, 0, 0, 0.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
          animation: isClosing
            ? "modalFadeOut 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "modalFadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        onClick={onClose}
      >
        <Box
          sx={{
            maxWidth: { xs: "95%", sm: "85%", md: "75%", lg: "65%" },
            maxHeight: "90vh",
            bgcolor: theme.palette.background.paper,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: `0 25px 50px -12px ${alpha(
              theme.palette.common.black,
              0.5
            )}`,
            position: "relative",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            animation: isClosing
              ? "contentZoomOut 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards"
              : "contentZoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            willChange: "transform, opacity",
            cursor: "default",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: theme.palette.text.primary,
              bgcolor: alpha(theme.palette.background.paper, 0.95),
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              "&:hover": {
                bgcolor: theme.palette.background.paper,
                transform: "rotate(90deg) scale(1.05)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 10,
              boxShadow: theme.shadows[8],
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Loading skeleton */}
          {!isImageLoaded && (
            <Box
              sx={{
                width: "100%",
                height: "90vh",
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  animation: "pulse 1.5s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                  },
                }}
              >
                Carregando...
              </Typography>
            </Box>
          )}

          <img
            src={cert.image}
            alt={cert.title}
            onLoad={() => setIsImageLoaded(true)}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              display: isImageLoaded ? "block" : "none",
              opacity: isImageLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

// Componente Principal
export default function CertificationsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCert, setSelectedCert] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCert(null);
      setIsClosing(false);
    }, 250); // Reduzido para 250ms para sincronizar com a animação
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && selectedCert) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedCert]);

  return (
    <>
      <style>{fadeInUp}</style>
      <style>{floatAnimation}</style>

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(180deg, ${alpha(
            theme.palette.background.default,
            1
          )} 0%, ${alpha(theme.palette.primary.dark, 0.03)} 50%, ${alpha(
            theme.palette.background.default,
            1
          )} 100%)`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, ${alpha(
              theme.palette.primary.main,
              0.05
            )} 0%, transparent 50%), 
                         radial-gradient(circle at 80% 50%, ${alpha(
                           theme.palette.secondary.main,
                           0.05
                         )} 0%, transparent 50%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                mb: 3,
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <EmojiEventsIcon
                sx={{
                  fontSize: 56,
                  color: theme.palette.primary.main,
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Conquistas
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Certificações e formações que marcam minha jornada
            </Typography>
          </Box>

          {/* Carrossel */}
          <Box sx={{ position: "relative", px: { xs: 0, sm: 6 } }}>
            {/* Botão Esquerda */}
            {!isMobile && (
              <IconButton
                onClick={() => handleScroll("left")}
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  width: 56,
                  height: 56,
                  boxShadow: theme.shadows[8],
                  "&:hover": {
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: "translateY(-50%) scale(1.1)",
                    borderColor: theme.palette.primary.main,
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 32 }} />
              </IconButton>
            )}

            {/* Container do Carrossel */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 3, md: 4 },
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                py: 2,
                px: { xs: 2, sm: 0 },
              }}
            >
              {certifications.map((cert, index) => (
                <Card
                  key={cert.id}
                  onClick={() => handleOpenModal(cert)}
                  sx={{
                    minWidth: { xs: 280, sm: 340, md: 380 },
                    maxWidth: { xs: 280, sm: 340, md: 380 },
                    cursor: "pointer",
                    borderRadius: 4,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    height: 420,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.15
                    )}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: `0 4px 20px ${alpha(
                      theme.palette.common.black,
                      0.08
                    )}`,
                    willChange: "transform, box-shadow",
                    "&:hover": {
                      transform: "translateY(-16px) scale(1.03)",
                      boxShadow: `0 20px 40px ${alpha(
                        theme.palette.primary.main,
                        0.25
                      )}`,
                      borderColor: theme.palette.primary.main,
                      "& .cert-image": {
                        transform: "scale(1.15) rotate(2deg)",
                      },
                      "& .cert-overlay": {
                        opacity: 1,
                      },
                      "& .cert-badge": {
                        transform: "scale(1.1) rotate(12deg)",
                      },
                    },
                  }}
                >
                  {/* Imagem */}
                  <Box
                    sx={{
                      position: "relative",
                      height: 280,
                      overflow: "hidden",
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }}
                  >
                    {/* Badge de Certificação */}
                    <Box
                      className="cert-badge"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: theme.shadows[8],
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: "transform",
                      }}
                    >
                      <EmojiEventsIcon sx={{ color: "white", fontSize: 28 }} />
                    </Box>

                    <img
                      className="cert-image"
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition:
                          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: "transform",
                      }}
                    />

                    {/* Overlay */}
                    <Box
                      className="cert-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(180deg, transparent 0%, ${alpha(
                          theme.palette.primary.dark,
                          0.9
                        )} 100%)`,
                        opacity: 0,
                        transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        pb: 3,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          fontSize: "0.875rem",
                        }}
                      >
                        Clique para ampliar
                      </Typography>
                    </Box>
                  </Box>

                  {/* Conteúdo */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                      }}
                    >
                      {cert.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Botão Direita */}
            {!isMobile && (
              <IconButton
                onClick={() => handleScroll("right")}
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  width: 56,
                  height: 56,
                  boxShadow: theme.shadows[8],
                  "&:hover": {
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: "translateY(-50%) scale(1.1)",
                    borderColor: theme.palette.primary.main,
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 32 }} />
              </IconButton>
            )}
          </Box>

          {/* Indicador de scroll (mobile) */}
          {isMobile && (
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 16 }} />
                Deslize para ver mais
                <ChevronRightIcon sx={{ fontSize: 16 }} />
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Modal */}
      {selectedCert && (
        <CertificationModal
          cert={selectedCert}
          isClosing={isClosing}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
