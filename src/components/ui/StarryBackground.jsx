import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StarryBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80" />
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
            />
            {/* Twinkling stars effect could be added here with more divs or canvas */}
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-2 h-2 bg-secondary rounded-full animate-bounce duration-1000" />
            <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        </div>
    );
};

export default StarryBackground;
