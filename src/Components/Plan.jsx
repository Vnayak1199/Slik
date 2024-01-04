import React from 'react'

const Plan = () => {
  return (
    <>
      <section className="plan">
      <div className="container">
        <div className="row plan-main">
          <div className="col-md-7 plan-left wow flipInX" data-wow-delay="0.5s">
            <h2>Want a Slik home?</h2>
            <p>Select from our weekly and fortnightly plans.</p>
          </div>
          <div className="col-md-5 plan-right wow bounceInRight" data-wow-delay="0.5s">
            <a href="#" className="slik-btn white-btn" title="Join Slik">Join Slik</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Plan
