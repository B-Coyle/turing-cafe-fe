import React, { Component } from 'react';
import './App.css';
import ReservationForm from './ReservationForm';
import ReservationContainer from './ReservationContainer';

class App extends Component {
  constructor() {
    super()
    this.state ={
      reservations: [],
      
    }
  }
  componentDidMount(){
    console.log('test')
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .catch(error => console.log('Error fetching reservation data', error))
    .then(result => this.setState({ reservations: [...result]}))
  }

  addReservation =(reservation) => {
    const newReservation = {...reservation, id:Date.now()}
    const reservations = {...this.state.reservations, newReservation}
    this.setState({
      reservations
    })
    console.log(this.state.reservations)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm reservations={this.state.reservations} addReservation={this.addReservation}/>
        </div>
        <p>Reservation: </p>
        <div className='resy-container'>
        <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
