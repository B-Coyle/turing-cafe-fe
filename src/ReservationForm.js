import React, {Component} from 'react';


class ReservationForm extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            date: '',
            time: '',
            guests: 0

        }
    }

    handleChange=()=>{
        
    }

    handleSubmit=()=>{

    }

    render(){
        return(
            <form>
                <input 
                    type="text"
                    value={this.state.name}
                    placeholder='Name'
                    onClick={this.handleChange}
                />
                <input />
                <input />
                <input />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default ReservationForm;