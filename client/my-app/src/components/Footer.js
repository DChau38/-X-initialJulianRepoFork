import React, {useState} from 'react';
import axios from 'axios';

function ContactMeFooter(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    return (
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me with any questions, comments, or inquiries!</p>
          <p>Directly emailing Duksing.Chau001@umb.edu or chauduksing2@gmail.com is fine too</p>
          <form onSubmit={handleSubmit}>
            <div class="nameSection">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
            </div>
            <div class="emailSection">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
            </div>
            <div class="messageSection">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your message" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
     );
    }

//helper functions
const handleChange = (event)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
}
const handleSubmit=async(event)=>{
    e.preventDefault();
    try {
        const response=await axios.post('https://localhost:9000/sentEmails',formData);
        console.log(response.data());
        setFormData({name:'',email:'',message:''});
    }
    catch (error){
        console.error('Error sending message',error);
    }
}
export default ContactMeFooter;