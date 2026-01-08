const About = () => {
    return (
        <section id="about" className="section scroll-reveal">
            <h2 className="section-title">The Happy Couple</h2>

            <div className="about-container">
                <div className="couple-card">
                    <div className="couple-image-wrapper">
                        <img
                            src="/images/couple/groom.png"
                            alt="Santanu - The Groom"
                            className="couple-image"
                        />
                    </div>
                    <h3 className="couple-name">Santanu</h3>
                    <p className="couple-role">The Groom</p>
                    <p style={{ color: 'var(--text-secondary)', padding: '0 1rem' }}>
                        A passionate soul with endless ambition and a caring heart. His dedication and
                        love for life inspire everyone around him.
                    </p>
                </div>

                <div className="couple-card">
                    <div className="couple-image-wrapper">
                        <img
                            src="/images/couple/bride.png"
                            alt="Ankita - The Bride"
                            className="couple-image"
                        />
                    </div>
                    <h3 className="couple-name">Ankita</h3>
                    <p className="couple-role">The Bride</p>
                    <p style={{ color: 'var(--text-secondary)', padding: '0 1rem' }}>
                        A beautiful soul with a heart full of love and dreams. Her smile lights up every room,
                        and her kindness touches everyone she meets.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
                <p className="script-font" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Our Love Story
                </p>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                    Two hearts, one journey. From the moment we met, we knew there was something special.
                    Through laughter, adventures, and countless memories, our love has grown stronger each day.
                    Now, we're ready to begin our forever together, and we'd love for you to be part of our special day.
                </p>
            </div>
        </section>
    );
};

export default About;
