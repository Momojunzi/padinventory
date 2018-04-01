import React, {Component} from 'react';
import InputForm from '../../components/InputForm/InputForm.js';
import './Inventory.css';
import axios from 'axios';

class Inventory extends Component {
  state = {
    inventory: {
      location:"",
      pads: "",
      handTrucks: ""
    }
  }

  updateInventory = () => {
    const {location, pads, handTrucks} = this.state.inventory;
    const inventory = {
      location: location,
      pads: parseInt(pads),
      handTrucks: parseInt(handTrucks)
    }
    axios.post('/api/updateInventory',inventory)
      .then((result)=>{console.log("response: " + result)});
  }

  getFormData = (event) => {
    const state = this.state;
    const target = event.target;
    const value = target.value;
    const inputName = target.id;
    state.inventory[inputName] = value;
    this.setState(state.inventory);
  }

  render() {
    return(
      <div className="row col-10 justify-content-center form-div" >
        <InputForm changeHandler={this.getFormData} clickHandler={this.updateInventory} />
      </div>
    )
  }
}

export default Inventory;
