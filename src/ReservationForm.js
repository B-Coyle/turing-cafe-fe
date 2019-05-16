import React, {Component} from 'react';


class ReservationForm extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            date: '',
            time: '',
            number: 1
        }
    }

    handleChange=(e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addReservation(this.state)

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.name}
                    placeholder='Name'
                    onChange={this.handleChange}
                    name='name'
                />
                <input 
                type="text"
                value={this.state.date}
                placeholder="Date (mm/dd)"
                name='date'
                onChange={this.handleChange}
                />
                <input 
                type='text'
                value={this.state.time}
                placeholder="Time"
                name="time"
                onChange={this.handleChange}
                />
                <input 
                type="number"
                value= {this.state.number}
                placeholder="Number of guests"
                onChange={this.handleChange}
                name='guests'
                min="1"
                />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default ReservationForm;