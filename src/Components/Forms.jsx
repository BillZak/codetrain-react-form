

import React, { Component } from 'react';

class Forms extends Component {
    constructor(props){
        super(props);
        this.state ={
            email : '',
            name : '',
            telno : '',
            pno : '',
            location : '',
            school : '',
            why : '',
            how : '',
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value});
    }
 
    handleSubmit(e){
        e.preventDefault();
          console.log(this.state.email)
          console.log(this.state.name)
          console.log(this.state.telno)
          console.log(this.state.pno)
          console.log(this.state.location)
          console.log(this.state.school)
          console.log(this.state.why)
          console.log(this.state.how)
        
          this.setState({name : '', email:'',telno:'',pno:'',location:'',school:'',why:'',how:'',});
    }

    
 


    render() {
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <div className="Email">
                    <label>Email address<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="Email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email"/>
                    </div>
                    <div className="name">
                    <label>Full Name<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="name" id="name" value={this.state.name} placeholder="Your answer"  onChange={this.handleChange}/>
                    </div>
                    <div className="tel">
                    <label>Phone Number<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="tel" name="telno" id="telno" placeholder="Your answer"  value={this.state.telno}  onChange={this.handleChange}/>  	
                    </div>
                    <div className="pno">
                    <label>Phone number of next of kin</label><br/>
                    <label style={{fontSize: '15px'}}>Phone number of someone we can reach out 
                    to in case your phone is off or not reachable.Eg;your parent,guardian 
                    or sibling, or spouse</label><br/>
                    <input type="tel" name="pno" id="pno" placeholder="Your answer"  value={this.state.pno}  onChange={this.handleChange}/>  	
                    </div>
                    <div className="payment">
                    <label>Can you pay 60% or more of the full Codetrain fees(GHS6000 for
                        Ghanaian applicants or $1,200 for international applicants)
                        <span style={{color: 'red'}}>*</span></label><br/>
                    <input type="checkbox" name="choice" value="no"/><label>No</label><br/>
                    <input type="checkbox" name="choice" value="yes"/><label>Yes</label>  	
                    </div>
                    <div className="who">
                    <label>Please indicate who is going to pay your fees<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="checkbox" className="checkbox" name="choose" value="yourself"/><label>Yourself</label><br/>
                    <input type="checkbox" className="checkbox" name="choose" value="parent"/><label>Parent/Sponsor</label><br/>
                    <input type="checkbox" className="checkbox" name="choose" value="organisation"/><label>Organisation</label>  	
                    </div>
                    <div className="loc">
                    <label>Location<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="location" id="location" value={this.state.location} placeholder="Your answer"  onChange={this.handleChange}/>  	
                    </div>
                    <div className="school">
                    <label>Current or previous school<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="school" id="school" value={this.state.school} placeholder="Your answer" onChange={this.handleChange}/>  	
                    </div>
                    <div className="why">
                    <label>Why do you want to join Codetrain?<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="why" id="why" value={this.state.why} placeholder="Your answer" onChange={this.handleChange}/>  	
                    </div>
                    <div className="how">
                    <label>How did you hear about Codetrain?<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="how" id="how" value={this.state.how} placeholder="Your answer" onChange={this.handleChange}/>  	
                    </div>
                    <label style={{color: 'grey',marginLeft: '20px'}}>A copy of your responses will
                    be emailed to the address you provided</label><br/><br/>
                    <div className="greenbar">
                    <label style={{backgroundColor: 'limegreen',color: 'limegreen',borderRadius: '8px',margin: '20px',marginTop: '20px'}}>
                        ------------------------------------------------------------</label><label>Page 1 of 1</label></div><br/>
                    <button style={{backgroundColor: 'dodgerblue',width: '10%',height: '30px', margin: '20px',
                    borderRadius: '6px',color: 'white'}}>submit</button><br/>
                    <label style={{color: 'grey',marginLeft: '20px',fontSize: '15px'}}>Never submit password through Google forms</label>
                    <div>
                        <p style={{textAlign: 'center', marginTop:'70px'}}>This content is niether created nor endorsed by Google. <a href="#" style={{color:'silver'}}>Report Abuse</a> -
                        <a href="#" style={{color:'silver'}}>Terms of Service</a> -<a href="#" style={{color:'silver'}}>Privacy Policy</a></p>
                        <h2>Google Forms</h2>
                    </div>
	        </form>
            
        );
    }
}

export default Forms;
