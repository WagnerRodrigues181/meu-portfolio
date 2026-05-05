import { keyframes } from "@mui/system";

export const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animação de entrada do modal - muito mais suave e elegante
export const zoomIn = keyframes`
  0% { 
    transform: scale(0.95); 
    opacity: 0;
  }
  100% { 
    transform: scale(1); 
    opacity: 1;
  }
`;

// Animação de saída do modal - transição suave e natural
export const zoomOut = keyframes`
  0% { 
    transform: scale(1); 
    opacity: 1;
  }
  100% { 
    transform: scale(0.95); 
    opacity: 0;
  }
`;

// Fade suave para o backdrop
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
