import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const FooterParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      // Limitando a altura para cobrir apenas o footer
      canvas.height = 400; // Ajuste conforme necessário
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles - mais partículas e mais visíveis
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) { // Mais partículas
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 1, // Partículas maiores
          speedX: (Math.random() - 0.5) * 0.4, // Movimento um pouco mais rápido
          speedY: (Math.random() - 0.5) * 0.4, // Movimento um pouco mais rápido
          opacity: Math.random() * 0.5 + 0.3, // Opacidade aumentada para maior visibilidade
        });
      }
    };
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Ajustando a posição do mouse para o contexto do footer
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Mouse attraction effect - efeito mais sutil
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) { // Área de influência menor
          particle.speedX += dx * 0.00005; // Efeito mais sutil
          particle.speedY += dy * 0.00005; // Efeito mais sutil
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle com cor dourada mais intensa
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.globalAlpha = particle.opacity * 1.5; // Aumentando a opacidade para maior visibilidade
        ctx.fillStyle = '#FFD700'; // Dourado mais intenso e brilhante
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen', opacity: 1 }} // Opacidade aumentada para maior visibilidade
    />
  );
};

export default FooterParticles;