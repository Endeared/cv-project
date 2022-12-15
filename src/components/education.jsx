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
            <div class="main">
               <div class="generalInfo">GENERAL INFO
                  <div class="infoCont">
                     <input name="name" type="text" placeholder="Input name..." id="name" onChange={this.handleInputChange} value={this.state.name}></input>
                     <input name="email" placeholder="Input email..." id="email" onChange={this.handleInputChange} value={this.state.email}></input>
                     <input name="mobile" placeholder="Input mobile..." id="mobile" onChange={this.handleInputChange} value={this.state.mobile}></input>
                     <input name="date" placeholder="Input date..." id="mobile" onChange={this.handleInputChange} value={this.state.date}></input>
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

               <div class="education">EDUCATION
                  <div class="infoCont">
                     <input name="school" type="text" placeholder="Input School / Uni..." id="name" onChange={this.handleInputChange} value={this.state.school}></input>
                     <input name="study" placeholder="Input Major / Study..." id="study" onChange={this.handleInputChange} value={this.state.study}></input>
                     <input name="startDateS" placeholder="Input start date..." id="startDateS" onChange={this.handleInputChange} value={this.state.startDateS}></input>
                     <input name="endDateS" placeholder="Input end date..." id="endDateS" onChange={this.handleInputChange} value={this.state.endDateS}></input>
                  </div>
               </div>

               <div class="extraInfo">EXTRA INFORMATION
                  <div class="infoCont">
                     <pre><textarea rows="10" cols="102" name="moreInfo" type="text" placeholder="Input more information..." id="moreInfo" onChange={this.handleInputChange} value={this.state.moreInfo}></textarea></pre>
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
                           <div class="email">
                           {this.state.email}
                           </div>
                           <div class="mobile">
                           {this.state.mobile}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="bodyCont">
                     <div class="experienceDesc">
                        <div class="experienceDescText">Experience (Most Relevant)</div>
                        <hr></hr>
                        <div class="experienceInfoCont">
                           <div class="leftExp">
                              <div class="pos">Position: {this.state.position}</div>
                              <div class="comp">Company: {this.state.company}</div>
                           </div>
                           <div class="rightExp">
                              <div class="startW">Start Date: {this.state.startDateW}</div>
                              <div class="endW">End Date: {this.state.endDateW}</div>
                           </div>
                        </div>
                     </div>
                     <div class="educationDesc">
                        <div class="educationDescText">Education (Most Relevant)</div>
                        <hr></hr>
                        <div class="educationInfoCont">
                           <div class="leftEd">
                              <div class="uni">School: {this.state.school}</div>
                              <div class="maj">Major / Study: {this.state.study}</div>
                           </div>
                           <div class="rightEd">
                              <div class="startS">Start Date: {this.state.startDateS}</div>
                              <div class="endS">End Date: {this.state.endDateS}</div>
                           </div>
                        </div>
                     </div>
                     <div class="extraInfoDesc">
                        <div class="extraInfoDescText">Extra Information (Most Relevant)</div>
                        <hr></hr>
                        <pre><div class="extraInfoCont">
                        {this.state.moreInfo}
                        </div></pre>
                     </div>
                  </div>
               </div>
            </div>
      );
   }

}
