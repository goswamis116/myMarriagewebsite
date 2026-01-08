const InvitationCard = () => {
    return (
        <section className="section scroll-reveal" style={{ padding: '2rem 1rem' }}>
            <div className="invitation-card" style={{
                background: '#fff',
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png"), linear-gradient(to bottom, #fffdf5, #fff8e1)',
                color: '#4a3b2a',
                padding: '3rem 2rem',
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '2px solid var(--accent-gold)',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Decorative corners */}
                <div style={{
                    position: 'absolute', top: '10px', left: '10px',
                    width: '40px', height: '40px',
                    borderTop: '3px solid var(--accent-gold)',
                    borderLeft: '3px solid var(--accent-gold)'
                }}></div>
                <div style={{
                    position: 'absolute', top: '10px', right: '10px',
                    width: '40px', height: '40px',
                    borderTop: '3px solid var(--accent-gold)',
                    borderRight: '3px solid var(--accent-gold)'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '10px', left: '10px',
                    width: '40px', height: '40px',
                    borderBottom: '3px solid var(--accent-gold)',
                    borderLeft: '3px solid var(--accent-gold)'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '10px', right: '10px',
                    width: '40px', height: '40px',
                    borderBottom: '3px solid var(--accent-gold)',
                    borderRight: '3px solid var(--accent-gold)'
                }}></div>

                {/* Om Symbol or decoration */}
                <div style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>

                </div>

                <div style={{ fontSize: '1.2rem', lineHeight: '2', whiteSpace: 'pre-line', fontFamily: "'Noto Serif Bengali', serif" }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '1rem' }}>সবিনয় নিবেদন,</p>

                    <p>মহাশয়/মহাশয়া,</p>

                    <p style={{ margin: '1.5rem 0' }}>
                        প্রজাপতি ঋষির আশীর্বাদে মাঙ্গলিক সানাইয়ের সুরে সুর মিলিয়ে পবিত্র বেদমন্ত্র উচ্চারণের মধ্য দিয়ে আগামী ২৩শে মাঘ, ১৪৩২ (ইং ৬ই ফেব্রুয়ারী, ২০২৬) শুক্রবার আমাদের একমাত্র কন্যা শ্রীমতী টুম্পা গোস্বামী ও জামাতা শ্রী স্বপন গোস্বামী-র একমাত্র পুত্র<br />
                        <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: 'bold', margin: '10px 0', display: 'inline-block' }}>কল্যাণীয় শান্তনু-র</span><br />
                        সহিত কাটোয়া, বর্ধমান নিবাসী শ্রী মদন মোহন মহাশয়ের একমাত্র কন্যা<br />
                        <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: 'bold', margin: '10px 0', display: 'inline-block' }}>কল্যাণীয়া অঙ্কিতা-র</span><br />
                        শুভ পরিণয় সুসম্পন্ন হইবে।
                    </p>

                    <p>
                        এতদুপলক্ষে উক্ত দিবসে সন্ধ্যায় নিজ বাসভবন-এ আয়োজিত বিবাহ বাসর অনুষ্ঠানে আপনি/আপনারা উপস্থিত থাকিয়া নবদম্পতিকে আশীর্বাদ দানে বাধিত করিবেন।
                    </p>
                </div>

                <div style={{
                    marginTop: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '1rem'
                }}>
                    <div style={{ textAlign: 'right', fontStyle: 'italic' }}>
                        <p>ইতি-</p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>বিনীত : শ্রী দীননাথ ব্যানার্জ্জী</p>
                    </div>

                    {/* Dada Image */}
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid var(--accent-gold)',
                        boxShadow: 'var(--shadow-md)',
                        flexShrink: 0
                    }}>
                        <img
                            src="/images/couple/dadu.jpg"
                            alt="Dinanath Banerjee"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvitationCard;
