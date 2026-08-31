import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ComingSoonCard from "../components/home/ComingSoonCard";
import FeaturedProject from "../components/home/FeaturedProject";
import ProjectsGrid from "../components/home/ProjectsGrid";
import TechStackSection from "../components/home/TechStackSection";
import CertificationsSection from "../components/home/CertificationsSection";
import ContactSection from "../components/home/ContactSection";
import CertificationModal from "../components/home/CertificationModal";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCert(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <HeroSection />
      <AboutSection />
      <ComingSoonCard />
      <FeaturedProject />
      <ProjectsGrid />
      <TechStackSection />
      <CertificationsSection onOpenModal={handleOpenModal} />
      <ContactSection />

      {selectedCert && (
        <CertificationModal
          cert={selectedCert}
          isClosing={isClosing}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
}