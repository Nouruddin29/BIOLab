import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className="form_container" id="contact_us">
      <div className="text">
        <h1>Please Fill your info !</h1>
        </div>
        <div className="formpage">
        <form className="form">
        <label>Name</label>
        <input placeholder="Name" />

   

        <label>Age</label>
        <input placeholder="Age" />


        <label>Sex</label>
        <input placeholder="Sex" />
        
        <label>Phone</label>
        <input placeholder="Phone" />
        
        <label>Address</label>
        <input placeholder="Address" />
        <label>Email</label>
        <input placeholder="Email" />

     
      </form>
    </div>  
    <div>
        <div className="buttonn">
        <Button variant="outlined">
          <Link to={"/HomePage"}>Back</Link>
        </Button>
        <Button variant="contained" disableElevation>
          <Link to={"/DateAndTime"}>Next</Link>
        </Button>
    </div>    
 </div>
      
</div>
  );
};

export default Form;
