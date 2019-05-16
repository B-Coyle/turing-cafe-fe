import React from 'react';

const ReservationCard = ({name, date, time, number, id}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
        </div>
    )
}

export default ReservationCard