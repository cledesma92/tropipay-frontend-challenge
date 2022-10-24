import React from 'react';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const ContactMe = () => {
  return (
    <div  className="section grey lighten-4">
      <div className="row container grey-text text-darken-3 lighten-3">
        <h4 id='three'><b>Contact me</b></h4>
        <p>Leave me your message and I will get back to you as soon as possible.</p>
        <div className="row">
          <form style={{padding: "0px"}} className="col s12"  action="https://formsubmit.co/46a29111cb2b7e1ac6872ccf4d3c8276" method="POST">
            <div className="row">
              <div className="input-field col l6 s12">
                <input id="first_name" type="text" name='first_name' required/>
                <label for="first_name">Your name</label>
              </div>
              <div className="input-field col l6 s12">
              <input id="email" type="email" name='email' required/>
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="message" class="materialize-textarea" name='message' required></textarea>
                <label for="message">Your message</label>
              </div>
            </div>
            <button className='right btn waves-effect waves-light indigo darken-1' type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export {ContactMe}
