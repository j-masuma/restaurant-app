import React from 'react';
import '../styles/Reservation.css';
import { BigButton } from './Button';

function Reservation() {
  return (
    <div className="reservation-section">
      {/* Left Image Section */}
      <div className="reservation-image">
        <img src="/images/video.jpg" alt="Dining Experience" />
      </div>

      {/* Right Form Section */}
      <div className="reservation-content">
        <div className='res-cont'>
            <h5 className="reservation-subtitle">Reservation <span>____</span></h5>
            <h1 className="reservation-title">Book A Table Online</h1>
            <form className="reservation-form">
                <div className="form-row">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                        <input type="datetime-local" placeholder="Date & Time" required />
                        <input type="text" placeholder="No of people" required />
                </div>
                <textarea placeholder="Special Request" rows="4"></textarea>
                <BigButton text='BOOK NOW'/>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
