
import { Footer } from "../Footer";
import axios from 'axios';
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';
import "./Contact.css";
import { useState } from "react";

export const Contact = () => { 
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [clientMessage , setClientMessage] = useState('');
  const sendData = async() =>{
    
   const values = {name,email,phone,clientMessage};
     
       try {
        const res = await axios.post('https://mern-portfolio-backend-ehb7.onrender.com/api/user',values);
        if(res.data.success){
            message.success(res.data.message);
            navigate('/');
        }
        else{
          message.error(res.data.message);
        }
       } catch (error) {
         console.log(error);
         
       }
  };
    
    return(
        <>
     <div className="heading1">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
    </div>
    <div className="form-container">
       <form layout="vertical" className="form-container" onSubmit={(e) => {e.preventDefault()}}>
          <label>Name</label>
            <input type='text' value={name} name="name" plaholder='Enter your name' onChange={(e) => {setName(e.target.value)}}/>
          <label>Email</label>
            <input type='email' value={email} name="email" plaholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}}/>
          <label>Phone</label>
            <input type='text' value={phone} name="phone" plaholder='Enter your phone' onChange={(e) => {setPhone(e.target.value)}}/>
          <label>Message</label>
            <textarea type='text' value={clientMessage} name="message" plaholder='Enter your message' onChange={(e) => {setClientMessage(e.target.value)}}/>
          <button className="submit" type="submit" onClick={sendData}> Submit</button>
       </form>
    </div>
    <hr/>
    <Footer/>
    </>   
    );

};
