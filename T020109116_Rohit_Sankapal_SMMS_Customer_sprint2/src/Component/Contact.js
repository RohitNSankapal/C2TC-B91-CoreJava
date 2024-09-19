import React from 'react';
import './Cont.css';
function Contact()
{
    return(
        <div class="fun" style={{fontSize: +30}}>
            <div class="container main">
                <h1>We're Here to Help</h1>
                <p style={{textAlign:'center'}}>Any questions, feel free to reach out to us.</p>
                <div class="contact-form">
                    <form method="post">
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;