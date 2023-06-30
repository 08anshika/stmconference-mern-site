import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>


      <div className="row d-flex m-2">
        <h3 className='text-center about'><strong>About Us</strong></h3>
        <hr />

        <div className="col-md-4">

          <h4 className="text-center"><strong>Conferences</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/10-1.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-name">John Doe
                <p>@johndoedesigner</p>
              </div>
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>TWEETS</p>
                    <h4>1300</h4></div>
                </div>
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>FOLLOWERS</p>
                    <h4>250</h4></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Organizers</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><Link to='/all-organizers'>
            <img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/3.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-name">John Doe
                <p>@johndoedesigner</p>
              </div>
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>TWEETS</p>
                    <h4>1300</h4></div>
                </div>
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>FOLLOWERS</p>
                    <h4>250</h4></div>
                </div>

              </div>
            </div>

          </Link></div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Speakers</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><Link to='/all-speakers'><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/coworking8.jpg" className="img img-responsive" alt='News' /></Link>
            <div className="profile-content">
              <div className="profile-name">John Doe
                <p>@johndoedesigner</p>
              </div>
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>TWEETS</p>
                    <h4>1300</h4></div>
                </div>
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>FOLLOWERS</p>
                    <h4>250</h4></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Events</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><Link to='/events'><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/1.jpg" className="img img-responsive" alt='News' /></Link>
            <div className="profile-content">
              <div className="profile-name">John Doe
                <p>@johndoedesigner</p>
              </div>
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>TWEETS</p>
                    <h4>1300</h4></div>
                </div>
                <div className="col-xs-4">
                  <div className="profile-overview">
                    <p>FOLLOWERS</p>
                    <h4>250</h4></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default About