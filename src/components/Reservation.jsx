import React from 'react';
import '../styles/Reservation.css';

function Reservation() {
  return (
    <div className="reservation-section">
      {/* Left Image Section */}
      <div className="reservation-image">
        <img src="/images/video.jpg" alt="Dining Experience" />
        <div className="play-button">
          <div className="circle">
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="reservation-content">
        <h5 className="reservation-subtitle">Reservation <span>____</span></h5>
        <h1 className="reservation-title">Book A Table Online</h1>
        <form className="reservation-form">
            <div className="form-row">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
                    <input type="datetime-local" placeholder="Date & Time" required />
                    <select required>
                        <option value="1">No Of People: 1</option>
                        <option value="2">No Of People: 2</option>
                        <option value="3">No Of People: 3</option>
                        <option value="4">No Of People: 4</option>
                    </select>
            </div>
            <textarea placeholder="Special Request" rows="4"></textarea>
            <button type="submit" className="book-now-btn">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
