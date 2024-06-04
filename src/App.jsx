import './App.css';
import emailjs from '@emailjs/browser'
import {useRef} from "react"

function App() {
  const form = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    // TODO: Setup client's mail id
    emailjs.sendForm(
        'amankriet_gmail',
        'amankriet_gmail_template',
        form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
    ).then(result => {
      console.log('success:',result);
    }, (err) => {
      console.log('error:',err);
    })
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h2>Escapes By Touristica</h2>
        </div>
        <ul>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
          {/* <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Travel Company</h1>
          <p>Your journey begins here</p>
          <button id="explore-btn">Explore Now</button>
        </div>
        <div id="services">
          <h2>Your Destination, Our Plan 🤘</h2>
          <p>
            We provide you the best Adventure Coordinator, Weekend Getaway,
            Family Trips, Group Tours and many more services for your upcoming
            travel destinations!
          </p>
        </div>
      </section>
      <footer id="contact">
        <div className="footer-content">
          <div className="contacts-links">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <a href="mailto:escapesbytouristica@gmail.com?subject=Travel Request from Web&body=Hello Touristica, ">
                    escapesbytouristica@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918700643020">+91 8700643020</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <h2>Follow Us</h2>
              <ul>
                {/* <li>
                  <a href="https://facebook.com/example" target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/example" target="_blank">
                    Twitter
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/touristica__/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail} method="post">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <p>&copy; Escapes By Touristica</p>
        </div>
      </footer>
    </>
  );
}

export default App;
