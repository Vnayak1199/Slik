import React from 'react'
import { aboutbox } from '../utils/aboutData'
import { accordionBlock1, accordionBlock2, accordionBlock3, accordionBlock4, accordionBlock5, accordionBlock6, accordionBlock7 } from '../utils/faqData'

const About = () => {
return (
<>
  <section className="about-row">
  <div className="about">
  <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto about-head">
          <div className="title-img-outer">
            <h1 className="text-center">We're keen on clean and we press for <span className="title-border">fresh</span></h1>
          </div>
          <p className="title-info">
            Coming home to clean is a sweet gift of life and should be available to all of us, no matter how busy our
            schedule is!
          </p>
        </div>
      </div>
    </div>
  </div>
      <div className="container-fluid p-0">
        {aboutbox.map((aboutd, i) => (
          <div className="row about-img-section ">
          <div className="fluid-img-block">
            <img src={aboutd.src} className="full-img" alt="About" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 fluid-content-outer">
                <div className="fluid-content">
                  <span className="index-icon">icon</span>
                  <h3>{aboutd.title} <strong className="title-border">{aboutd.strong}</strong></h3>
                  <p>{aboutd.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </section>

    <section className="faq">
      <div className="container">
        <div className="faq-inner">
        <h2 className="text-center">The FAQs</h2>
        <p>
          We're making lives across London simpler with our Slik home cleaning subscription plans, all the details of which can be found below.
        </p>

        <div className="faq-content">
            <div className="accordion" id='accordion1'>
            <h5>COVID-19</h5>
            {accordionBlock1.map((AccoBlockData1, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData1.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData1.data_target} aria-expanded="false" aria-controls={AccoBlockData1.area_control}>
                      {AccoBlockData1.button}
                      <span>
                        <img src={AccoBlockData1.src1} alt="open" className="plus" />
                        <img src={AccoBlockData1.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData1.collapse_id} className="collapse" aria-labelledby={AccoBlockData1.aria_labelledby} data-bs-parent={AccoBlockData1.data_parent}>
                  <div className="card-body">{AccoBlockData1.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion2'>
            <h5>Subscriptions</h5>
            {accordionBlock2.map((AccoBlockData2, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData2.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData2.data_target} aria-expanded="false" aria-controls={AccoBlockData2.area_control}>
                      {AccoBlockData2.button}
                      <span>
                        <img src={AccoBlockData2.src1} alt="open" className="plus" />
                        <img src={AccoBlockData2.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData2.collapse_id} className="collapse" aria-labelledby={AccoBlockData2.aria_labelledby} data-bs-parent={AccoBlockData2.data_parent}>
                  <div className="card-body">{AccoBlockData2.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion3'>
            <h5>Cleaning products</h5>
            {accordionBlock3.map((AccoBlockData3, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData3.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData3.data_target} aria-expanded="false" aria-controls={AccoBlockData3.area_control}>
                      {AccoBlockData3.button}
                      <span>
                        <img src={AccoBlockData3.src1} alt="open" className="plus" />
                        <img src={AccoBlockData3.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData3.collapse_id} className="collapse" aria-labelledby={AccoBlockData3.aria_labelledby} data-bs-parent={AccoBlockData3.data_parent}>
                  <div className="card-body">{AccoBlockData3.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion4'>
            <h5>The Slik cleaning team</h5>
            {accordionBlock4.map((AccoBlockData4, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData4.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData4.data_target} aria-expanded="false" aria-controls={AccoBlockData4.area_control}>
                      {AccoBlockData4.button}
                      <span>
                        <img src={AccoBlockData4.src1} alt="open" className="plus" />
                        <img src={AccoBlockData4.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData4.collapse_id} className="collapse" aria-labelledby={AccoBlockData4.aria_labelledby} data-bs-parent={AccoBlockData4.data_parent}>
                  <div className="card-body">{AccoBlockData4.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion5'>
            <h5>Home access</h5>
            {accordionBlock5.map((AccoBlockData5, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData5.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData5.data_target} aria-expanded="false" aria-controls={AccoBlockData5.area_control}>
                      {AccoBlockData5.button}
                      <span>
                        <img src={AccoBlockData5.src1} alt="open" className="plus" />
                        <img src={AccoBlockData5.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData5.collapse_id} className="collapse" aria-labelledby={AccoBlockData5.aria_labelledby} data-bs-parent={AccoBlockData5.data_parent}>
                  <div className="card-body">{AccoBlockData5.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion6'>
            <h5>Pricing</h5>
            {accordionBlock6.map((AccoBlockData6, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData6.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData6.data_target} aria-expanded="false" aria-controls={AccoBlockData6.area_control}>
                      {AccoBlockData6.button}
                      <span>
                        <img src={AccoBlockData6.src1} alt="open" className="plus" />
                        <img src={AccoBlockData6.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData6.collapse_id} className="collapse" aria-labelledby={AccoBlockData6.aria_labelledby} data-bs-parent={AccoBlockData6.data_parent}>
                  <div className="card-body">{AccoBlockData6.desc}</div>
                </div>
              </div>
              ))}
          </div>

          <div className="accordion" id='accordion7'>
            <h5>Further help</h5>
            {accordionBlock7.map((AccoBlockData7, i) => (
              <div className="card">
                <div className="card-header" id={AccoBlockData7.cardHeader_id}>
                  <h6 className="mb-0">
                  
                    <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={AccoBlockData7.data_target} aria-expanded="false" aria-controls={AccoBlockData7.area_control}>
                      {AccoBlockData7.button}
                      <span>
                        <img src={AccoBlockData7.src1} alt="open" className="plus" />
                        <img src={AccoBlockData7.src2} alt="close" className="minus" />
                      </span>
                    </button>
                  </h6>
                </div>
            
                <div id={AccoBlockData7.collapse_id} className="collapse" aria-labelledby={AccoBlockData7.aria_labelledby} data-bs-parent={AccoBlockData7.data_parent}>
                  <div className="card-body">{AccoBlockData7.desc}</div>
                </div>
              </div>
              ))}
          </div>

        </div>
        </div>
      </div>
    </section>
</>
)
}

export default About