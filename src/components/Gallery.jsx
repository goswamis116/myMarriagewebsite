import { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "/images/couple/couple1.png", title: "Together Forever" },
        { src: "/images/couple/bride.png", title: "The Beautiful Bride" },
        { src: "/images/couple/groom.png", title: "The Handsome Groom" },
        { src: "/images/wedding/mandap.png", title: "Sacred Mandap" },
        { src: "/images/wedding/ceremony.png", title: "Wedding Ceremony" },
        { src: "/images/venue/outdoor.png", title: "Beautiful Venue" },
    ];

    return (
        <section id="gallery" className="section scroll-reveal">
            <h2 className="section-title">Our Gallery</h2>

            <div className="video-section" style={{
                marginBottom: '4rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                <div className="video-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    {/* Video 1: Invitation */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ textAlign: 'center', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>Invitation Video</h4>
                        <div className="video-wrapper" style={{
                            position: 'relative',
                            width: '100%',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            border: '2px solid var(--accent-gold)',
                            background: '#000'
                        }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src="https://www.youtube.com/embed/Bglt4Z_aM-k?playsinline=1&modestbranding=1&rel=0"
                                    title="Wedding Invitation Video"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Video 2: Engagement */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ textAlign: 'center', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>Engagement Ceremony</h4>
                        <div className="video-wrapper" style={{
                            position: 'relative',
                            width: '100%',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            border: '2px solid var(--accent-gold)',
                            background: '#000'
                        }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src="https://www.youtube.com/embed/rwLu-MA9734?playsinline=1&modestbranding=1&rel=0"
                                    title="Engagement Ceremony Video"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="gallery-image"
                        />
                        <div className="gallery-overlay">
                            <span className="gallery-overlay-text">{image.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        padding: '2rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'var(--shadow-md)'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
