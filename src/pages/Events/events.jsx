import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchedEvents = [
      {
        id: 1,
        title: "Cocktail Night",
        description:
          "Enjoy an exclusive evening of handcrafted cocktails, live DJ music, and a vibrant bar atmosphere.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 2,
        title: "Bar & Grill Experience",
        description:
          "Savor mouth-watering grilled dishes with signature drinks in our open-air restaurant setting.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 3,
        title: "Private Dining & Celebrations",
        description:
          "Celebrate birthdays, anniversaries, or corporate gatherings in our elegant dining hall.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 4,
        title: "Wine Tasting Night",
        description:
          "Join us for a curated selection of premium wines with pairing snacks and expert sommeliers.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 1,
        title: "Cocktail Night",
        description:
          "Enjoy an exclusive evening of handcrafted cocktails, live DJ music, and a vibrant bar atmosphere.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 2,
        title: "Bar & Grill Experience",
        description:
          "Savor mouth-watering grilled dishes with signature drinks in our open-air restaurant setting.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },

      {
        id: 3,
        title: "Private Dining & Celebrations",
        description:
          "Celebrate birthdays, anniversaries, or corporate gatherings in our elegant dining hall.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },
      
      {
        id: 4,
        title: "Wine Tasting Night",
        description:
          "Join us for a curated selection of premium wines with pairing snacks and expert sommeliers.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },
    ];

    setEvents(fetchedEvents);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="events-container">
      <div className="events-overlay" />
      <header className="events-header" data-aos="fade-down">
        <h1>Upcoming Events</h1>
        <p>Join us for exciting experiences at our bar and restaurant!</p>
      </header>

      <div className="event-grid">
        {events.map((event, index) => (
          <section
            className="event-card"
            key={event.id}
            data-aos={
              index % 3 === 0
                ? "fade-right"
                : index % 3 === 1
                ? "fade-left"
                : "fade-up"
            }
          >
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              {/* Admin panel style: no button */}
            </div>
          </section>
        ))}
      </div>

      {showScrollButton && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Events;
