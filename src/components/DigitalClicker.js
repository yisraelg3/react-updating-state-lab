// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    
    state = {
        timesClicked: 0
    }

    handleCLick = () => {
        //let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        console.log(this.state.timesClicked)
    return (
        <div>
            {/* <label htmlFor='timesClicked'>{this.state.timesClicked}</label> */}
            <button  onClick={this.handleCLick}>{this.state.timesClicked}</button>
        </div>
    )
  }
}










// import {useState} from 'react'

// export default function DigitalClicker() {

//     let [timesClicked,setTimesClicked] = useState(0) 

//     const handleClick = () => {
//         setTimesClicked(timesClicked + 1)
//     }
    
//     return (
//     <div>
//         <label htmlFor='timesClicked'>{timesClicked}</label>
//         <button id = 'timesClicked' onClick={handleClick}/>
//       </div>
//   )
// }
