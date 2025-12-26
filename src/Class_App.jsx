import React from "react";

 class Class_App extends React.Component {


  constructor() {

    super();

    this.state= {
        name : "",
        number : "",
        email : ""
       
    }
  }


     HandleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
      
    }

    SubmitMe=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }


  render() {
    return (
      <>
      
      <h1>Form Handling Class Component</h1>

      <form onSubmit={(e)=>this.SubmitMe(e)} >
        <label htmlFor="">Enter Name :</label>
        <input type="text" name="name" id="name" placeholder="Enter Name" value={this.state.name} onChange={(e)=>this.HandleChange(e)}/>
        <br />
        <br />
         <label htmlFor="">Enter number :</label>
        <input type="number" name="number" id="number" placeholder="Enter Number" value={this.state.number} onChange={(e)=>this.HandleChange(e)}/>
        <br />
        <br />
         <label htmlFor="">Enter Email :</label>
        <input type="email" name="email" id="email" placeholder="Enter Email"   value={this.state.email} onChange={(e)=>this.HandleChange(e)}/>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      
      
      </>
    )
  }
}

export default Class_App
