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
               <div class="generalInfo">GENERAL INFO
                  <div class="infoCont">
                     <input name="name" type="text" placeholder="Input name..." id="name" onChange={this.handleInputChange} value={this.state.name}></input>
                     <input name="email" placeholder="Input email..." id="email" onChange={this.handleInputChange} value={this.state.email}></input>
                     <input name="mobile" placeholder="Input mobile..." id="mobile" onChange={this.handleInputChange} value={this.state.mobile}></input>
                     <input name="date" placeholder="Input date..." id="mobile" onChange={this.handleInputChange} value={this.state.date}></input>
                  </div>
               </div>

               <div class="education">EDUCATION
                  <div class="infoCont">
                     <input name="school" type="text" placeholder="Input School / Uni..." id="name" onChange={this.handleInputChange} value={this.state.school}></input>
                     <input name="study" placeholder="Input Major / Study..." id="study" onChange={this.handleInputChange} value={this.state.study}></input>
                     <input name="startDateS" placeholder="Input start date..." id="startDateS" onChange={this.handleInputChange} value={this.state.startDateS}></input>
                     <input name="endDateS" placeholder="Input end date..." id="endDateS" onChange={this.handleInputChange} value={this.state.endDateS}></input>
                  </div>
               </div>

               <div class="experience">EXPERIENCE
                  <div class="infoCont">
                     <input name="position" type="text" placeholder="Input position..." id="name" onChange={this.handleInputChange} value={this.state.position}></input>
                     <input name="company" placeholder="Input company..." id="study" onChange={this.handleInputChange} value={this.state.company}></input>
                     <input name="startDateW" placeholder="Input start date..." id="startDateS" onChange={this.handleInputChange} value={this.state.startDateW}></input>
                     <input name="endDateW" placeholder="Input end date..." id="endDateS" onChange={this.handleInputChange} value={this.state.endDateW}></input>
                  </div>
               </div>

               <div class="cvBuilder">
                  <div class="headerCont">
                     <div class="header">
                        <div class="leftHead">
                           <div class="name">
                           {this.state.name}
                           </div>
                           <div class="date">
                           {this.state.date}
                           </div>
                        </div>
                        <div class="rightHead">

                        </div>
                     </div>
                  </div>
               </div>
            </div>
      );
   }

}
