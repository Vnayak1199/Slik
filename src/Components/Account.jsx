import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { accountSlide } from '../utils/accountSwiper';

const Account = () => {
  return (
    <div>
      <section className="account">
      <div className="container-fluid">
        <div className="row account-main">
          <div className="account-sidebar">
            <div className="sidebar-title">
              <h6>My account</h6>
            </div>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab"
                aria-controls="v-pills-home" aria-selected="true">Account overview</a>
              <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab"
                aria-controls="v-pills-profile" aria-selected="false">Notifications</a>
            </div>

          </div>
          <div className="account-right">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                aria-labelledby="v-pills-home-tab">
                <h5>Hello, Jane Doe</h5>
                <p>
                  From your account you can view and edit your subscription details, change your frequency and see
                  notifications.
                </p>
                <div className='account-swiper'>
                <Swiper
                    spaceBetween={35}
                    slidesPerView={2.7}
                    loop={true}
                    speed={2000}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320:{
                          slidesPerView:1.2,
                          spaceBetween:20,
                        },
                        621: {
                            slidesPerView: 1.5,
                          },
                          768: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                          },
                          992: {
                            slidesPerView: 2.7,
                          }
                      }}
                    >
                        {accountSlide.map((swiperItem,i) => (
                            <SwiperSlide className={swiperItem.class} key={i}>
                            <span>{swiperItem.icon}</span>
                            <h6>{swiperItem.title}</h6>
                            <p>{swiperItem.desc}</p>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>

                <h5>Your account overview</h5>
                <div className="table-responsive account-overview">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>Mark</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>Jacob</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Password</th>
                        <td>Larry</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>1 Street Address, London, SE1 234</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Home desc.</th>
                        <td>2 bedrooms; 2 bathrooms</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Subscription</th>
                        <td>Weekly</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Day/time</th>
                        <td>I’m flexible</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                      <tr>
                        <th>Keys</th>
                        <td>Leave with my porter</td>
                        <td><a href="#">Change</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <h3>Notification</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Account
