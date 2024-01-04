import React, { useEffect } from 'react'
import title_image from '../images/title-img.png'
import title_image2 from '../images/title-img2.png'
import hero_white from '../images/hero-white.png'
import hero_orange from '../images/hero-orange.png'
import { heroImg, service_data, how_workImg, work_data, catching } from '../utils'
import WOW from 'wowjs';

const Home = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }, []);
  return (
    <div>
    <section className="hero">
      <div className="container">
        <div className="row"> 
          <div className="col-md-6 col-lg-4 hero-left wow slideInLeft">
            <div className="hero-title title-img-outer">
              <h1>It's good to be<span className="title-border">home</span></h1>
              <span className="title-img"><img src={title_image} alt="title image" /></span>
            </div>
            <p className="title-info">Quality home cleaning made simple with our reliable housekeeping team and all of the products and tools included.</p>
            <a href="#" className="blue-btn slik-btn" title="Join Slik">Join Slik</a>
          </div>
          <div className="col-md-6 col-lg-8 hero-right">
            <div className="banner-img-block">
              <div className="circle1"><img src={hero_white} alt="" /></div>
              <div className="circle2"><img src={hero_orange} alt="" /></div>
              <div className="banner-img-block-inner">
                {heroImg.map((imgData) => (
                  <img
                    key={imgData.id}
                    src={imgData.src}
                    alt={imgData.alt}
                    className={imgData.class}
                    data-wow-duration={imgData.delay}
                    data-wow-delay={imgData.duration}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="service-section">
      <div className="container">
        <div className="row service">
          <div className="col-xl-9 mx-auto text-center">
            <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Comfy, clean homes all over <span className="title-border">London</span></h2>
            <p className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              Quality home cleans by the reliable, friendly Slik team - with our service, products and payment options
              it's never been easier to keep a clear, fresh space in the city.
            </p>

            <div className="row service-main">
              {service_data.map((sdata) => (
                <div
                  className={`col-lg-4 col-md-6 service-block wow ${sdata.class}`}
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                  key={sdata.id}
                >
                  <div className="service-block-inner">
                    <div className="icon-img"><span>icon</span></div>
                      <h4>{sdata.name}</h4>
                      <p>{sdata.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="how-work">
      <div className="container-fluid">
        <div className="title-img-outer wow fadeInUp" data-wow-delay="0.5s">
          <h2 className="text-center">How it works</h2>
          <span className="title-img"><img src={title_image2} alt="title image" /></span>
        </div>

        <div className="row how-work-inner">
          <div className="fluid-img-block ps-0">
            {how_workImg.map((hw) => (
              <img
                key={hw.id}
                src={hw.src}
                alt={hw.alt}
                className={hw.class}
                delay={hw.delay}
                duration={hw.duration}
              />
            ))}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 ms-auto fluid-content-outer">
                <div className="fluid-content">
                  <ul>
                    {work_data.map((wd,index) => (
                      <li key={index}>
                      <div className="left">
                        <span className="index-icon wow bounceInUp" data-wow-duration="1s">
                          {wd.id}
                          <img src={wd.src} alt={wd.alt} />
                        </span>
                      </div>
                      <div className="right wow fadeInUp">
                        <h4>
                          {wd.name}
                        </h4>
                        <p>{wd.desc}</p>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="catching">
      <div className="container">
        <h3 className="text-center wow fadeInUp">It's catching on</h3>
        <div className="row catching-row">
          {catching.map((catchdata, i) => (
            <div className="col-lg-4 col-md-6 catching-block-outer wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.5s" key={i}>
            <div className="catching-block">
              <div className="catching-header">
                <div className="catching-header-left">
                </div>
                <div className="catching-header-right">
                  <h5>{catchdata.title}</h5>
                  <span>{catchdata.subtitle}</span>
                </div>
              </div>
              <div className="catching-body">
                <p>{catchdata.desc}</p>
                <div className="ratting">
                  <img src={catchdata.src} alt="ratting" />
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
