'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function Petals() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        class Petal {
            x: number;
            y: number;
            size: number;
            speed: number;
            rotation: number;
            rotationSpeed: number;
            oscillation: number;
            oscillationSpeed: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height; // Start above viewport initially to stagger? Or randomly placed. 
                // Randomly placed initially for immediate effect, then recycle above
                this.y = Math.random() * height;
                this.size = Math.random() * 10 + 5;
                this.speed = Math.random() * 1 + 0.5;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.oscillation = Math.random() * Math.PI * 2;
                this.oscillationSpeed = Math.random() * 0.02;
                // Pink/Red variations
                const colors = ['#ff4d6d', '#ff8fa3', '#fff0f3', '#ffc2d1'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y += this.speed;
                this.x += Math.sin(this.oscillation) * 0.5;
                this.oscillation += this.oscillationSpeed;
                this.rotation += this.rotationSpeed;

                if (this.y > height) {
                    this.y = -20;
                    this.x = Math.random() * width;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.7;

                // Draw a simple petal shape (ellipse with a point)
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
                ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
                ctx.fill();

                ctx.restore();
            }
        }

        const petals: Petal[] = [];
        const petalCount = 40;

        // Initialize petals
        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal());
        }

        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            petals.forEach(petal => {
                if (!shouldReduceMotion) {
                    petal.update();
                }
                petal.draw(ctx);
            });

            if (!shouldReduceMotion) {
                animationId = requestAnimationFrame(animate);
            }
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [shouldReduceMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
