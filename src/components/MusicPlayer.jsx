import { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/music/sanai.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handleEnter = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Play failed", e));
        }

        // Trigger flower effect
        createFlowerBloom();

        // Delay removing overlay slightly for effect
        setTimeout(() => setHasEntered(true), 500);
    };

    const createFlowerBloom = () => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '99999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const petals = [];
        // Rich Red and Yellow/Gold Mix (Marigold and Rose theme)
        const colors = ['#FF0000', '#FFD700', '#FF4500', '#C0392B', '#FDB813', '#FF6347'];

        for (let i = 0; i < 150; i++) {
            petals.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                speedX: (Math.random() - 0.5) * 20, // Faster explosion
                speedY: (Math.random() - 0.5) * 20,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                size: Math.random() * 15 + 8, // Varied petal sizes
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1
            });
        }

        let animationFrame;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activePetals = false;

            petals.forEach(petal => {
                if (petal.opacity > 0) {
                    activePetals = true;
                    petal.x += petal.speedX;
                    petal.y += petal.speedY;
                    petal.rotation += petal.rotationSpeed;
                    petal.opacity -= 0.008; // Slower fade
                    petal.speedY += 0.15; // Heavier gravity

                    ctx.save();
                    ctx.translate(petal.x, petal.y);
                    ctx.rotate((petal.rotation * Math.PI) / 180);
                    ctx.globalAlpha = petal.opacity;
                    ctx.fillStyle = petal.color;

                    // Draw Realistic Petal Shape (Teardrop)
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    // Right curve
                    ctx.bezierCurveTo(petal.size * 0.5, -petal.size * 0.5, petal.size, -petal.size, 0, -petal.size * 1.5);
                    // Left curve
                    ctx.bezierCurveTo(-petal.size, -petal.size, -petal.size * 0.5, -petal.size * 0.5, 0, 0);
                    ctx.fill();
                    ctx.restore();
                }
            });

            if (activePetals) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                document.body.removeChild(canvas);
            }
        };

        animate();
    };

    if (hasEntered) return null;

    return (
        <div className="welcome-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backdropFilter: 'blur(8px)',
            transition: 'opacity 0.8s ease'
        }}>
            <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease' }}>
                <h1 style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '4rem',
                    color: 'var(--accent-gold)',
                    marginBottom: '1rem'
                }}>Santanu & Ankita</h1>

                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '3rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                }}>Wedding Invitation</p>

                <button
                    onClick={handleEnter}
                    style={{
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        background: 'transparent',
                        border: '2px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '1px'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--accent-gold)';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--accent-gold)';
                    }}
                >
                    Enter Celebration
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;
