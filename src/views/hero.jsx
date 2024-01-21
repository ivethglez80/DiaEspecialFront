import React, { useRef, useEffect, useState } from "react";
import heroVid from "./../img/heroVid1.mp4";
import heroPic from "./../img/heroPic.png"; 
import heroVidSm from "./../img/heroVid1Sm.mp4";
import heroPicSm from "./../img/heroPicSm.png"; 

const Hero = () => {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // 640px es el breakpoint por defecto de 'sm' en Tailwind

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                setVideoError(true);
            });
        }
    }, [isMobile]); // Agrega isMobile como dependencia

    return (
        <>
            <div>
                {videoError ? (
                    <img 
                        src={isMobile ? heroPicSm : heroPic} 
                        alt="Backup" 
                        className="max-w-full h-auto" 
                    />
                ) : (
                    <video
                        ref={videoRef}
                        src={isMobile ? heroVidSm : heroVid}
                        className="max-w-full h-auto"
                        muted
                        playsInline
                        autoPlay
                        onError={() => setVideoError(true)}
                    />
                )}
            </div>
        </>
    );
};

export default Hero;
