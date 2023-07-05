import React from 'react'
import './About.css'
const about = (props) => {
  return(
      <div style={{marginTop: '72px'}}>
    <div className="about">
        <h3>Burger Builder</h3>
        <h4>About App:</h4>
        <p>Burger Builder App is basically used to create a virtual burger with the help of mentioned ingredients 
            and order it by filling our details.</p>
            <p>Steps to Order your Burger:</p>
            <ol>
                <li>Create a burger with the help of mentioned ingredients.</li>
                <li>Confirm you ingredients in burger and press continue.</li>
                <li>View your burger final look, if its good then press Continue.</li>
                <li>Now finally, fill your details (Name, Address, Email, Phone No. and Delivery Type) to Order.</li>
                <li>Now click on Order to order your burger, We will reach you very soon to deliver it.</li>
            </ol>
            </div>
            <div className="about">
        <h4>ReactJs concepts Used</h4>
        <ul>
            <li>Basis Fetures and Synax(ES6)</li>
            <li>JSX and Components</li>
            <li>Function and Class Components</li>
            <li>Lifecycle Methods</li>
            <li>Event Handling</li>
            <li>Ajax/Http Call (axios)</li>
            <li>Forms and its Validations</li>
            <li>React Routing</li>
        </ul>
    </div>
    </div>
   )
 }

export default about