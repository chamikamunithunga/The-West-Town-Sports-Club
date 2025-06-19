import React, { useState, useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: 'Chef Amal',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088',
      description: 'Master of fusion cuisine, creating unforgettable flavors that blend tradition with innovation.'
    },
    {
      name: 'Tharushi Perera',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
      description: 'Ensures every guest enjoys a smooth, memorable dining experience from start to finish.'
    },
    {
      name: 'Ishan Fernando',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
      description: 'Supports the kitchen magic with precision and passion for culinary perfection.'
    },
    {
      name: 'Anushka Silva',
      role: 'Head Waiter',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      description: 'Dedicated to providing top-notch service and a warm welcome every time.'
    },
  ];

  return (
    <div className='about-page'>

      {/* Hero Header */}
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>About</h1>
        </motion.div>
      </header>

      {/* About Description */}
      <div className="container my-5">
        <div className="row">
          <motion.div 
            className="col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>Welcome to The West Town Sports in Negambo, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
            <p>Our restaurant is situated just 5 minutes from the train station and shopping center. Perfect for breakfast, a fancy lunch, or a cozy dinner with family or friends. We can’t wait to serve you our delicious dishes!</p>
            <Link to='/contact'>
              <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mt-3 shadow'>Contact us</button>
            </Link>
          </motion.div>

          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className='img-fluid rounded' alt="our staff" />
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section container my-5">
        <h2 className="text-center mb-5 fw-bold">Meet Our Team</h2>
        <div className="row g-5">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <motion.div
                className="card team-card h-100 text-center shadow-sm position-relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="team-img-wrapper">
                  <img
                    src={member.image}
                    className="card-img-top"
                    alt={member.name}
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  <div className="overlay">
                    <p className="text-white small px-2">{member.description}</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{member.name}</h5>
                  <p className="text-muted mb-1">{member.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      {/* Reviews */}
      <div className="my-5">
        <Reviews />
      </div>

      {/* Scroll to Top Button */}
      {scrollY > 200 && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default About;
