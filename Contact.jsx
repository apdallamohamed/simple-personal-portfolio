import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      
      <div className="container">
        <form action="action_page.php">
          <div>
          <h1 className='contacthaad' >Contact Us</h1>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <select id="country" name="country">
              <option value="Moqdisho">Moqdisho</option>
              <option value="Bosaso">Bosaso</option>
              <option value="Kismaayo">Kismaayo</option>
            </select>
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '150px'}} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;