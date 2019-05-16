import React from 'react';
import ReservationCard from './ReservationCard';

const ReservationContainer = ({reservations})=>{
    const reservationCards = reservations.map(reservation => (
        <ReservationCard {...reservation} />
    ))

    return(
        <main>
        {reservationCards}
        </main>
    )
}

export default ReservationContainer