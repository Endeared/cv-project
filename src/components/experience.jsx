import React, { Component } from 'react'


export default class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         mobile: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
   }

   handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
         [name]: value
      });
   }


   render() {
      return (
            <div>
               <div>EXPERIENCE</div>
               <input name="name" type="text" placeholder="Input name..." id="name" onChange={this.handleInputChange} value={this.state.name}></input>
               <input name="email" placeholder="Input email..." id="email" onChange={this.handleInputChange} value={this.state.email}></input>
               <input name="mobile" placeholder="Input mobile..." id="mobile" onChange={this.handleInputChange} value={this.state.mobile}></input>
               <p>{this.state.name}</p>
               <p>{this.state.email}</p>
               <p>{this.state.mobile}</p>
            </div>
      );
   }

}
