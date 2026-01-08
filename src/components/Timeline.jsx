import { useState, useEffect, useRef } from 'react';

const Timeline = () => {
    const [trainPosition, setTrainPosition] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const element = sectionRef.current;
            const { top, height } = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start moving when the top of the section hits the middle of the viewport
            // and finish when the bottom of the section hits the middle
            const startPoint = windowHeight * 0.8;
            const endPoint = -height + windowHeight * 0.5;

            let progress = (startPoint - top) / (startPoint - endPoint);

            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            setTrainPosition(progress * 100);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stops = [
        {
            station: "Bardhaman Katwa",
            date: "",
            events: [],
            side: "left"
        },
        {
            station: "Love Route",
            date: "",
            events: ["Journey of Love"],
            side: "right"
        },
        {
            station: "Kolkata",
            date: "Feb 6 & 8, 2026",
            events: ["Wedding Ceremony", "Reception"],
            side: "left"
        }
    ];

    return (
        <section id="timeline" className="section" ref={sectionRef} style={{ overflow: 'hidden', padding: '4rem 1rem' }}>
            <h2 className="section-title">Our Wedding Journey</h2>

            <div className="journey-container" style={{
                position: 'relative',
                maxWidth: '800px',
                margin: '0 auto',
                minHeight: '800px'
            }}>
                {/* Railroad Track - Base (Grey/Future) */}
                <div className="railrod-track" style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '100%',
                    background: '#e0e0e0', // Light grey for future path
                    borderRadius: '4px',
                    zIndex: 0
                }}></div>

                {/* Railroad Track - Progress (Gold/Past) */}
                <div className="railrod-progress" style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: `${trainPosition}%`, // Fills based on train position
                    background: 'var(--accent-gold)',
                    borderRadius: '4px',
                    zIndex: 1,
                    transition: 'height 0.1s linear'
                }}></div>

                {/* Railroad Track - Sleepers (Ties) */}
                <div className="railroad-ties" style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '100%',
                    backgroundImage: 'linear-gradient(to bottom, #bdc3c7 4px, transparent 4px)',
                    backgroundSize: '100% 20px',
                    zIndex: 0
                }}></div>

                {/* Moving Train */}
                <div className="train-wrapper" style={{
                    position: 'absolute',
                    left: '50%',
                    top: `${trainPosition}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    transition: 'top 0.1s linear',
                    textAlign: 'center',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="train-icon" style={{
                        fontSize: '2.5rem',
                        filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
                        transform: 'rotate(270deg)' // Pointing Down
                    }}>
                        🚂
                    </div>
                </div>

                {/* Stations/Stops */}
                {stops.map((stop, index) => {
                    // Adjusted positions to ensure start and end are fully visible
                    const position = index === 0 ? '5%' : index === 1 ? '50%' : '90%';
                    const isLeft = stop.side === 'left';
                    const isReached = trainPosition >= (index === 0 ? 5 : index === 1 ? 50 : 90);

                    return (
                        <div key={index} className="station-stop" style={{
                            position: 'absolute',
                            top: position,
                            width: '100%',
                            display: 'flex',
                            justifyContent: isLeft ? 'flex-start' : 'flex-end',
                            padding: isLeft ? '0 55% 0 0' : '0 0 0 55%',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            zIndex: 5,
                            transform: 'translateY(-50%)' // Center vertically on the point
                        }}>
                            {/* Station Dot */}
                            <div className="station-dot" style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '20px',
                                height: '20px',
                                background: isReached ? 'var(--accent-gold)' : 'white',
                                border: `4px solid ${isReached ? 'var(--accent-gold)' : '#bdc3c7'}`,
                                borderRadius: '50%',
                                zIndex: 15, // Above train
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}></div>

                            <div className="station-content" style={{
                                background: 'var(--bg-secondary)',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid var(--border-color)',
                                textAlign: isLeft ? 'right' : 'left',
                                width: '100%',
                                position: 'relative'
                            }}>
                                <h3 style={{
                                    color: 'var(--accent-gold)',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)'
                                }}>{stop.station}</h3>

                                <div style={{
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-primary)'
                                }}>{stop.date}</div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {stop.events.map((event, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.2rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {event}
                                        </li>
                                    ))}
                                </ul>

                                {index === 0 && <div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>🚩</div>}
                                {index === 2 && <div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>🏁</div>}
                            </div>
                        </div>
                    );
                })}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .station-content {
                        padding: 1rem !important;
                    }
                    .station-content h3 {
                        font-size: 1.2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Timeline;
