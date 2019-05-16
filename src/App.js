import React, { Component } from 'react';
import './App.css';
import ReservationForm from './ReservationForm';


class App extends Component {
  constructor() {
    super()
    this.state ={
      
    }
  }
  addReservation =() => {

  }

  deleteReservation =() => {
    
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
