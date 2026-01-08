const Hero = () => {
    return (
        <section id="home" className="hero">
            <img
                src="/images/couple/couple2.jpeg"
                alt="Ankita and Santanu"
                className="hero-background"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="hero-subtitle">We're Getting Married!</p>
                <h1 className="hero-title">Santanu & Ankita</h1>
                <p className="hero-date">February 6 & 8, 2026</p>
                <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
                    Join us as we celebrate our love
                </p>
            </div>
        </section>
    );
};

export default Hero;
