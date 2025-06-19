import React, { useState } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreakfastImg from '../../utils/images/soup.jpg';
import LunchImg from '../../utils/images/lunch-img.jpg';
import DinnerImg from '../../utils/images/dinner-img.jpg';
import DessertImg from '../../utils/images/sdrinks.jpg';
import DrinksImg from '../../utils/images/liks.jpg';
import MenuCover from '../../utils/images/menu-cover.jpg';


const menuItems = [
  {
    title: 'Soup',
    subtitle: 'Start your morning with energy',
    image: BreakfastImg,
    adminImage: '/admin-images/soup-full.jpg',
  },
  {
    title: 'Main Course',
    subtitle: 'Perfect midday meals',
    image: LunchImg,
    adminImage: '/admin-images/main-course-full.jpg',
  },
  {
    title: 'Bites',
    subtitle: 'Satisfying evening flavors',
    image: DinnerImg,
    adminImage: '/admin-images/bites-full.jpg',
  },
  {
    title: 'Soft Drinks',
    subtitle: 'Sweet endings to your meal',
    image: DessertImg,
    adminImage: '/admin-images/soft-drinks-full.jpg',
  },
  {
    title: 'Liquer',
    subtitle: 'Refresh and revive',
    image: DrinksImg,
    adminImage: '/admin-images/liquer-full.jpg',
  },
];


function Menu() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="menu-page text-light bg-dark">
      {/* Hero Section */}
      <div className="menu-hero" style={{ backgroundImage: `url(${MenuCover})` }}>
        <div className="overlay">
          <motion.h1
            className="menu-title"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="menu-subtitle"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore our handpicked selection of food & beverages
          </motion.p>
        </div>
      </div>

      {/* Menu Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {menuItems.map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card h-100 border-0 shadow-lg bg-black text-white">
                <div className="menu-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top rounded-top"
                    style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => setModalImage(item.image)}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fw-bold text-success">{item.title}</h3>
                  <p className="card-text">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/contact">
            <button className="btn btn-success btn-lg px-4 py-2 text-uppercase fw-semibold shadow">
              Book Your Table
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Modal Image Preview */}
      {modalImage && (
        <div className="modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <img src={modalImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
