"use client";
import { useEffect, useRef, useState } from "react";
import { SkillsCanvasContainer, StyledCanvas, Popup } from "./SkillsCanvas.styles";

export default function SkillsCanvas() {
  const canvasRef = useRef(null);
  const [popupMessage, setPopupMessage] = useState(""); // State for the popup message
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 }); // State for the popup position

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const skills = [
      "Next.js",
      "React",
      "TypeScript",
      "Javascript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Logo Design",
      "Brand Identity",
      "Character Design",
      "Concept Art",
      "Game Assets",
      "Game UI",
      "UI Design",
      "User Testing",
    ];

    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let draggedNode = null;

    // Track mouse position
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // If dragging, update the position of the dragged node
      if (isDragging && draggedNode) {
        draggedNode.x = mouseX;
        draggedNode.y = mouseY;

        // Check if the dragged node is near the edges
        const margin = 50; // Distance from the edge to trigger the message
        if (
          draggedNode.x - draggedNode.radius < margin ||
          draggedNode.x + draggedNode.radius > canvas.width - margin ||
          draggedNode.y - draggedNode.radius < margin ||
          draggedNode.y + draggedNode.radius > canvas.height - margin
        ) {
          setPopupMessage("Hey leave me alone!");
          setPopupPosition({ x: draggedNode.x, y: draggedNode.y - draggedNode.radius - 20 }); // Position above the circle
        } else {
          setPopupMessage(""); // Clear the message when not near the edges
        }
      }
    });

    canvas.addEventListener("mousedown", () => {
      // Check if the mouse is over any circle
      draggedNode = nodes.find((node) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < node.radius;
      });

      if (draggedNode) {
        isDragging = true;
      }
    });

    canvas.addEventListener("mouseup", () => {
      isDragging = false;
      draggedNode = null;
      setPopupMessage(""); // Clear the message when dragging stops
    });

    // Node class
    class Node {
      x;
      y;
      radius;
      skill;
      speedX;
      speedY;
      color;
      hoverColor;
      fontSize;

      constructor(skill) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = skill.length * 3.5 + 20;
        this.skill = skill;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(255, 107, 107, ${Math.random() * 0.3 + 0.1})`;
        this.hoverColor = `rgba(255, 107, 107, 0.8)`; // Brighter color for hover
        this.fontSize = Math.min(16, this.radius / 3);
      }

      update() {
        // Skip movement if the node is being dragged
        if (this === draggedNode) return;

        // Bounce off edges while considering the radius
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX *= -1;
          this.x = Math.max(this.radius, Math.min(this.x, canvas.width - this.radius));
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY *= -1;
          this.y = Math.max(this.radius, Math.min(this.y, canvas.height - this.radius));
        }

        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        // Check if the mouse is hovering over the circle
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Change color if hovered
        const isHovered = distance < this.radius;
        ctx.fillStyle = isHovered ? this.hoverColor : this.color;

        // Draw circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw text
        ctx.fillStyle = "#f0f0f0";
        ctx.font = `${this.fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.skill, this.x, this.y);
      }
    }

    // Create nodes
    const nodes = skills.map((skill) => new Node(skill));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      // Connect nodes that are close to each other
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 107, 107, ${0.1 - distance / 1500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <SkillsCanvasContainer>
      <StyledCanvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      {popupMessage && (
        <Popup style={{ top: popupPosition.y, left: popupPosition.x }}>
          {popupMessage}
        </Popup>
      )}
    </SkillsCanvasContainer>
  );
}