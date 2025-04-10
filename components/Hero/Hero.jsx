import React, { useState } from "react";
import {
  Arrow,
  ArrowContainer,
  Badge,
  Container,
  Description,
  RedTitle,
  Title,
  Canvas,
} from "./Hero.styles";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = ({ scrollToSection }) => {
  const canvasRef = useRef(null);
  const [isBroken, setIsBroken] = useState(false); // State to trigger the animation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle system
    class Particle {
      x;
      y;
      size;
      speedX;
      speedY;
      color;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        // Randomly select between red and white color
        const colors = [
          `rgba(255, 107, 107, ${Math.random() * 0.5})`,
          `rgba(255, 255, 255, ${Math.random() * 0.5})`,
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = Math.min(100, window.innerWidth / 20);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.x;
      mouseY = e.y;
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        // Connect particles close to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 107, 107, ${0.6 - distance / 200})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(particle.x, particle.y);
          ctx.stroke();
        }

        // Connect nearby particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  // Split the word "Creative" into individual letters
  const letters = "Creative".split("");

  // Animation variants for the letters
  const letterVariants = {
    initial: { y: 0, rotate: 0, opacity: 1 },
    broken: {
      y: [0, 50, 100], // Fall down
      rotate: [0, 45, 90], // Rotate as they fall
      opacity: [1, 0.8, 0], // Fade out
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Canvas ref={canvasRef} />

      <Container
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Badge
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>Frontend Developer • Graphic Artist • Illustrator</span>
        </Badge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animate each letter */}
          <motion.span
            style={{ display: "inline-block", cursor: "pointer" }}
            onClick={() => setIsBroken(true)} // Trigger the animation on click
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="initial"
                animate={isBroken ? "broken" : "initial"}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <RedTitle>Technologist</RedTitle>
        </Title>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I create at the intersection of code and design, blending technical
          expertise with artistic vision to craft unique digital experiences.
        </Description>

        <ArrowContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => scrollToSection("work")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            whileHover={{
              y: [0, 15, 0],
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 0.75,
                ease: "easeInOut",
              },
            }}
          >
            <Arrow />
          </motion.div>
        </ArrowContainer>
      </Container>
    </>
  );
};

export default Hero;