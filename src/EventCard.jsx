import React from 'react';

const EventCard = ({ event }) => {
  const { title, description} = event;

  return (
    // <div className="card">
    //   <img src={image} alt={title} className="card-image" />
    //   <div className="card-content">
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //     <p>
    //       <strong>Date:</strong> {date} | <strong>Time:</strong> {time}
    //     </p>
    //     <p><strong>Venue:</strong> {venue}</p>
    //   </div>
    // </div>
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
