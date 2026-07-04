import { useEffect, useRef } from "react";

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 100 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      alphaSpeed: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        
        // Curated colors aligned with design palette
        const colors = ["#3B82F6", "#06B6D4", "#8B5CF6", "#64748B"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.15;
        this.alphaSpeed = (Math.random() - 0.5) * 0.002;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce or wrap edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulse alpha
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.65 || this.alpha < 0.1) {
          this.alphaSpeed = -this.alphaSpeed;
        }

        // Mouse interaction (slight repelling or pull)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gently push away from mouse
          this.x -= Math.cos(angle) * force * 0.8;
          this.y -= Math.sin(angle) * force * 0.8;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.alpha;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        // Subtle glow filter
        if (this.size > 1.5) {
          context.shadowBlur = 6;
          context.shadowColor = this.color;
        }
        context.fill();
        context.restore();
      }
    }

    const init = () => {
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      particles = [];
      
      // Responsive particle count
      const density = Math.floor((width * height) / 11000);
      const count = Math.min(density, 120);
      
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
      }

      // Draw faint connections for particles close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // purple connection
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
