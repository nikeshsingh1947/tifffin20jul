import React from 'react';
import './Navbarquicklinks.css';

export const EventLinks = () => {
  const events = [
    "House Party",
    "Birthday Party",
    "Corporate Event",
    "Kitty Party",
    "Anniversary",
    "Wedding Events",
    "Sports/School Events",
    "Bhandara/Langar"
  ];
  const handleBookNow = () => {
    const fullContactNumber = `+91${8383871535}`;
    window.location.href = `tel:${fullContactNumber}`;
  };

  return (
    <div className="grid-container">
      {events.map((event, index) => (
        <div className="grid-item" key={index} onClick={handleBookNow}>
          {event}
        </div>
      ))}
    </div>
  );
}
