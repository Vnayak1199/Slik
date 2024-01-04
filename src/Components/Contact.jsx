import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="contact">
      <div className="container">
        <h1 className="text-center">Contact the Slik team</h1>

        <div className="contact-main">
          <div className="row">
            <div className="col-md-6 contact-left">
              <h3 className="title-border">By email</h3>
              <p>
                Send emails to <a href="mailto:hi@slikhome.com">hi@slikhome.com</a> and we'll get back to you as soon as we can.
              </p>
            </div>
            <div className="col-md-6 contact-right">
              <h3 className="title-border">Request a call</h3>
              <p>
                Enter your details below to get a call back from one of the team.
              </p>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Phone number" />
                </div>
                <button type="submit" className="btn border-btn">Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Contact
