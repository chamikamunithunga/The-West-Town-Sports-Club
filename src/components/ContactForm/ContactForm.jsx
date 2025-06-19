import React from 'react';
import './ContactForm.css';
import { motion } from 'framer-motion';

function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="social-icons-container d-flex justify-content-center gap-4">
                <div className="glass-icon-box">
                    <a
                        href="https://www.instagram.com/your-instagram-profile"
                        target="_blank"
                        rel="noreferrer"
                        className="glass-icon text-center flex-column"
                    >
                        <i className="fab fa-instagram fa-2x instagram-color mb-2"></i>
                        <p className="icon-label">Instagram</p>
                        <p className="shop-label">The West Town Sports Club</p>
                    </a>
                </div>

                <div className="glass-icon-box">
                    <a
                        href="https://www.facebook.com/p/The-West-Town-Sports-Club-100063980139846/"
                        target="_blank"
                        rel="noreferrer"
                        className="glass-icon text-center flex-column"
                    >
                        <i className="fab fa-facebook fa-2x facebook-color mb-2"></i>
                        <p className="icon-label">Facebook</p>
                        <p className="shop-label">The West Town Sports Club</p>
                    </a>
                </div>

                <div className="glass-icon-box">
                    <a
                        href="https://wa.me/yourwhatsappnumber"
                        target="_blank"
                        rel="noreferrer"
                        className="glass-icon text-center flex-column"
                    >
                        <i className="fab fa-whatsapp fa-2x whatsapp-color mb-2"></i>
                        <p className="icon-label">WhatsApp</p>
                        <p className="shop-label">The West Town Sports Club</p>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactForm;
