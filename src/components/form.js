import React, { Component } from 'react'

class Form extends Component {

  render() {
    return (
      
      <div>
        
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
           // value={this.state.name}
            placeholder="name"
            //onChange={this.handleNameChange}
          />
          <input
            type="text"
           // value={this.state.address}
            placeholder="address"
            //onChange={this.handleAddressChange}
          />
          <input
            type="text"
            //value={this.state.description}
            placeholder="description"
           // onChange={this.handleDescriptionChange}
          />
         
          <button type="submit">create</button>
        </form>
      </div>
    );
  }
}

export default Form;