import React, { useState } from 'react';

const App = () => {

  const [data, setData] = useState({name:"",email:"",password:"" });

  const FormHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value  });
    
  };

  const SubmitMe = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={SubmitMe}>
        
        <label>Enter Your Name :</label>
        <input
          type="text"
          name="name"
          id='name'
          placeholder="Enter your name"
          value={data.name}
         onChange={(e) => FormHandler(e)}
        />

        <br /><br />

        <label>Enter Your Mail :</label>
        <input
          type="email"
          name="email"
          id='email'
          placeholder="Enter mail"
          value={data.email}
         onChange={(e) => FormHandler(e)}
        />

        <br /><br />

        <label>Enter Password :</label>
        <input
          type="password"
          name="password"
          id='password'
          placeholder="Enter Password"
          value={data.password}
         onChange={(e) => FormHandler(e)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
