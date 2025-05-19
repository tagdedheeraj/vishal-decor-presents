
import React, { useEffect, useRef } from 'react';

const VideoMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = 600;

    const connectionPoints: {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      connections: number[];
    }[] = [];

    // Create initial points
    for (let i = 0; i < 50; i++) {
      connectionPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        connections: []
      });
    }

    // Animation function
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clear connection lists
      connectionPoints.forEach(point => {
        point.connections = [];
      });

      // Update point positions and find connections
      connectionPoints.forEach((point, i) => {
        point.x += point.speedX;
        point.y += point.speedY;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.speedX *= -1;
        if (point.y < 0 || point.y > canvas.height) point.speedY *= -1;

        // Find connections
        connectionPoints.forEach((otherPoint, j) => {
          if (i === j) return;

          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            point.connections.push(j);
          }
        });
      });

      // Draw connections
      connectionPoints.forEach((point, i) => {
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 165, 0, 0.8)';
        ctx.fill();

        // Draw connections
        point.connections.forEach(j => {
          const otherPoint = connectionPoints[j];
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(otherPoint.x, otherPoint.y);
          
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - distance / 100;
          
          ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.3})`;
          ctx.stroke();
        });
      });

      requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 to-navy/80 z-0"></div>
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  );
};

export default VideoMap;
