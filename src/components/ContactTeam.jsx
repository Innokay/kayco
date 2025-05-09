import React from 'react';

const ContactTeam = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contact Our Team</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {/* Facebook */}
        <a href="https://facebook.com/Kay's Collection" target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2', fontSize: '2rem' }}>
          <i className="fab fa-facebook"></i>
          <p className='text-success'>Facebook</p>
        </a>
        {/* X (Twitter) */}
        <a href="https://twitter.com/kayscollection" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', fontSize: '2rem' }}>
          <i className="fab fa-twitter"></i>
          <p className='text-primary'>Twitter(X)</p>
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/+254793650045" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '2rem' }}>
          <i className="fab fa-whatsapp"></i>
          <p>Whatsapp</p>
        </a>
        {/* Instagram */}
        <a href="https://instagram.com/kayscollection" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', fontSize: '2rem' }}>
          <i className="fab fa-instagram"></i>
          <p className='text-danger'>Instagram</p>
        </a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>We are located in Lanet area in Nakuru county. We are opposite Buffalo Mall in Nakuru. Welcome and have the best user experience.</p>
        <p>You can also come and find us in our offices or on our official android application Kays Collections. IOS Edition coming soon</p>
        <p>You can also order for a good, we will get it delivered in minutes. We are you!</p>
        <p>Dear Customer, you are important to us. Please leave comments, complimentaries or complaints here</p>
    </div>
      <button className="btn btn-dark" onClick={() => window.location.href = 'mailto:kayscollection921@gmail.com'}>
        Email Us
      </button>
    </div>
  );
};

export default ContactTeam;
