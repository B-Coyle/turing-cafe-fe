import React, { Component } from 'react';
import './App.css';
import ReservationForm from './ReservationForm';
// import ReservationContainer from './ReservationContainer';
// import apiCalls from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state ={
      reservations: []
      
    }
  }
  addReservation =() => {

  }

  deleteReservation =() => {

  }


  render() {
    const reservations=this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm reservations={reservations} addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
        {/* <ReservationContainer reservations={reservations} deleteReservation={this.deleteReservation}/> */}
        </div>
      </div>
    )
  }
}

export default App;
