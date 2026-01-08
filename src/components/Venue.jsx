const Venue = () => {
    const venues = [
        {
            title: "Wedding Ceremony",
            image: "/images/wedding/mandap.png",
            date: "February 6, 2026",
            time: "7:00 PM",
            location: "Barun paradise, Own residence",
            address: "Naskarhat Tagore park, Kolkata-700039",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Barun+Paradise,+Naskarhat+Tagore+Park,+Kolkata,+West+Bengal+700039",
            mapEmbed: "https://maps.google.com/maps?q=Barun+Paradise,+Naskarhat+Tagore+Park,+Kolkata,+West+Bengal+700039&t=&z=15&ie=UTF8&iwloc=&output=embed"
        },
        {
            title: "Reception",
            image: "/images/venue/outdoor.png",
            date: "February 8, 2026",
            time: "7:00 PM",
            location: "Barun paradise, Own residence",
            address: "Naskarhat Tagore park, Kolkata-700039",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Barun+Paradise,+Naskarhat+Tagore+Park,+Kolkata,+West+Bengal+700039",
            mapEmbed: "https://maps.google.com/maps?q=Barun+Paradise,+Naskarhat+Tagore+Park,+Kolkata,+West+Bengal+700039&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
    ];

    return (
        <section id="venue" className="section scroll-reveal">
            <h2 className="section-title">Venue Details</h2>

            <div className="venue-grid">
                {venues.map((venue, index) => (
                    <div key={index} className="venue-card">
                        <div className="venue-image-wrapper">
                            <img
                                src={venue.image}
                                alt={venue.title}
                                className="venue-image"
                            />
                        </div>
                        <div className="venue-info">
                            <h3 className="venue-title">{venue.title}</h3>
                            <div className="venue-details">
                                <div className="venue-detail-item">
                                    <span className="venue-icon">📅</span>
                                    <span>{venue.date}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="venue-icon">🕐</span>
                                    <span>{venue.time}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="venue-icon">📍</span>
                                    <span>{venue.location}</span>
                                </div>
                                <div className="venue-detail-item">
                                    <span className="venue-icon">🏛️</span>
                                    <span>{venue.address}</span>
                                </div>
                            </div>

                            <div className="venue-map-section" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a
                                    href={venue.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-map"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.8rem 1.5rem',
                                        background: '#9C260C',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: 'var(--radius-sm)',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center',
                                        border: '1px solid transparent'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#9C260C';
                                        e.currentTarget.style.border = '1px solid #9C260C';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = '#9C260C';
                                        e.currentTarget.style.color = 'white';
                                        e.currentTarget.style.border = '1px solid transparent';
                                    }}
                                >
                                    View on Google Map 🗺️
                                </a>

                                <div className="map-container" style={{
                                    width: '100%',
                                    height: '250px',
                                    borderRadius: 'var(--radius-sm)',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <iframe
                                        src={venue.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Map for ${venue.title}`}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Venue;
