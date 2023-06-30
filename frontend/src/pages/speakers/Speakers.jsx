import React from 'react'
import './Speakers.css'

const Speakers = () => {
return (
    <>
 <div className="event">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
        <nav className="wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active show" id="nav-home-tab" data-toggle="tab" href="#one" role="tab" aria-selected="true">
              <div className="nav-content">
                <strong>First Day</strong>
                <span>10th January 2019</span>
              </div>
            </a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#two" role="tab" aria-selected="false">
              <div className="nav-content">
                <strong>Second Day</strong>
                <span>10th January 2019</span>
              </div>
            </a>
            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#three" role="tab" aria-selected="false">
              <div className="nav-content">
                <strong>Third Day</strong>
                <span>10th January 2019</span>
              </div>
            </a>
            <a className="nav-item nav-link" id="nav-contact-tab2" data-toggle="tab" href="#four" role="tab" aria-selected="false">
              <div className="nav-content">
                <strong>Fourth Day</strong>
                <span>10th January 2019</span>
              </div>
            </a>
          </div>
        </nav>
        <div className="tab-content py-3 px-3 px-sm-0 wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" id="nav-tabContent" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
          <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="nav-home-tab">
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img" />
                    <h5>Rosalina William</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li>Coffe &amp; Snacks</li>
                    <li>Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li>Waterfront Hotel, London</li>
                    <li>9.30 - 10.30 AM</li>
                  </ul>
                  <h2>UX Design Trend Party 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img" />
                    <h5>Kelian M. Bappe</h5>
                    <p>youtubing</p>
                  </div>
                  <ul>
                    <li>Coffe &amp; Snacks</li>
                    <li>Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Rokolo DJ Dancing 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-magic" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img" />
                    <h5>Hiliniam Nelson</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li>Coffe &amp; Snacks</li>
                    <li>Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Google Youtube Stratigic Party</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="far fa-cogs" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img" />
                    <h5>Kimjing J. Jalim</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li>Coffe &amp; Snacks</li>
                    <li>Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Intro Jiknim Jikis 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-ban" /></div>
                </div>
              </div>
            </div>
            {/* row loop */}
          </div>
          <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="nav-profile-tab">
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img" />
                    <h5>Rosalina William</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>UX Design Trend Party 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img" />
                    <h5>Kelian M. Bappe</h5>
                    <p>youtubing</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Rokolo DJ Dancing 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img" />
                    <h5>Hiliniam Nelson</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Google Youtube Stratigic Party</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img" />
                    <h5>Kimjing J. Jalim</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Intro Jiknim Jikis 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
          </div>
          <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="nav-contact-tab">
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img" />
                    <h5>Rosalina William</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>UX Design Trend Party 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img" />
                    <h5>Kelian M. Bappe</h5>
                    <p>youtubing</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Rokolo DJ Dancing 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img" />
                    <h5>Hiliniam Nelson</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Google Youtube Stratigic Party</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img" />
                    <h5>Kimjing J. Jalim</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Intro Jiknim Jikis 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
          </div>
          <div className="tab-pane fade" id="four" role="tabpanel" aria-labelledby="nav-contact-tab">
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img" />
                    <h5>Rosalina William</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>UX Design Trend Party 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img" />
                    <h5>Kelian M. Bappe</h5>
                    <p>youtubing</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Rokolo DJ Dancing 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img" />
                    <h5>Hiliniam Nelson</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Google Youtube Stratigic Party</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
            {/* row loop */}
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img" />
                    <h5>Kimjing J. Jalim</h5>
                    <p>UX Deisgn</p>
                  </div>
                  <ul>
                    <li><i className="fal fa-coffee" /> Coffe &amp; Snacks</li>
                    <li><i className="fal fa-video" /> Video Streming</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                    <li><i className="fas fa-map-marker-alt" /> Waterfront Hotel, London</li>
                    <li><i className="far fa-clock" /> 9.30 - 10.30 AM</li>
                  </ul>
                  <h2>Intro Jiknim Jikis 2019</h2>
                  <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                  <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</a>
                  <a href="#" className="btn mt-20">Read More</a>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
            {/* row loop */}
          </div>
        </div>
      </div>
      <div className="col-lg-12 justify-content-center text-center">
        <a href="#" className="btn mt-20 mr-10">More Program  +</a>
      </div>
    </div>
  </div>
</div>




 

    
    </>
  )
}

export default Speakers