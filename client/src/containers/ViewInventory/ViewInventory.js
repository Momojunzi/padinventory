import React, {Component} from 'react';
import axios from 'axios';
import './ViewInventory.css';

class ViewInventory extends Component {

  state = {
    inventory:[]
  }

  componentDidMount() {
    this.getInventory();
  }

  componentDidUpdate() {
    this.totalAcc();
  }

  getInventory = () => {
    axios.get("/api/getInventory")
      .then(result => {
        console.log(result.data);
        this.setState({inventory: result.data}, ()=>{
          //this.totalAcc();
          console.log("inv: " + this.state.inventory[0].location)})
      })
  }

  totalAcc = () => {
    const pads = this.state.inventory.map(entry=>{
      return entry.pads;
    })
    const ht = this.state.inventory.map(entry =>{
      return entry.handTrucks;
    }) 
    console.log(pads, ht);
  }

  render () {
    const inv = this.state.inventory.map(entry=>{
      return(
        <tbody>
          <tr>
            <td>{entry.location}</td>
            <td>{entry.pads}</td>
            <td>{entry.handTrucks}</td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row col-10 justify-content-center view-div">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col"># of Pads</th>
            <th scope="col"># of Hand Trucks</th>
          </tr>
        </thead>
        {inv}
      </table>
      </div>
    )
  }
}

export default ViewInventory;
