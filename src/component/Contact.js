import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase";
import './Contact.css'
import { Button } from './Button'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
     <div className="Contact--container">
      <div className="background-contact">
    <form id="my-form" className="form" onSubmit={handleSubmit}>
      <div className="title-contact">
        <h1>Contact Me </h1><p>🤳</p>
    </div>  
      

      <label>Name</label>
      <input
        placeholder="Enter your Name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Enter your Email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Enter your Message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
        {/* <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button> */}
      <Button  buttonStyle='glow-on-hover' type="submit" form="my-form">Submit</Button>
    </form>
    </div>
    </div> 
  );
};

export default Contact;