import confetti from "canvas-confetti";

export const confettiEffect = () => {
  confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 160,
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
};
