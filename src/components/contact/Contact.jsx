import './contact.css'

const Contact = () => {
  return (
    <section className="container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container grid">
        <div className="contact-in">
          <h3 className="contact-title">Let's talk about everything!</h3>
          <p className="contact-det">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="" className="contact-form">
          <div className="contact-group">
            <div className="contact-div">
              <input type="text" className="contact-input" placeholder='Inter your name' />
            </div>
            <div className="contact-div">
              <input type="email" className="contact-input" placeholder='Inter your Email' />
            </div>
          </div>
            <div className="contact-div">
              <input type="text" className="contact-input" placeholder='Inter your Subject' />
            </div>
            <div className="contact-div contact-area">
              <textarea name="" id="" cols="30" rows="10" className="contact-input" placeholder='Write your Message'></textarea>
            </div>

            <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact