import React, { useEffect, useRef } from 'react';

interface NinjaCombatProps {
  primaryColor: string;
  secondaryColor: string;
}

export const NinjaCombat: React.FC<NinjaCombatProps> = ({ primaryColor, secondaryColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 150;

    let frame = 0;
    const ninjaPositions = {
      ninja1: { x: 50, direction: 1 },
      ninja2: { x: 250, direction: -1 }
    };

    const drawNinja = (x: number, direction: number, color: string) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.translate(x, 100);
      ctx.scale(direction, 1);

      // Body
      ctx.fillRect(-10, -20, 20, 40);
      
      // Head
      ctx.beginPath();
      ctx.arc(0, -30, 10, 0, Math.PI * 2);
      ctx.fill();

      // Sword animation
      const swordAngle = Math.sin(frame * 0.1) * 0.5;
      ctx.rotate(swordAngle);
      ctx.fillRect(10, -25, 30, 5);

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      ninjaPositions.ninja1.x = 50 + Math.sin(frame * 0.05) * 20;
      ninjaPositions.ninja2.x = 250 + Math.sin(frame * 0.05 + Math.PI) * 20;

      // Draw ninjas
      drawNinja(ninjaPositions.ninja1.x, ninjaPositions.ninja1.direction, primaryColor);
      drawNinja(ninjaPositions.ninja2.x, ninjaPositions.ninja2.direction, secondaryColor);

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  }, [primaryColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto"
      style={{ maxWidth: '100%' }}
    />
  );
};