import React from 'react'
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
  <div className='bg-#272c4a'>
  <div id="mySidenav" className="sidenav">
    <p className="logo"><span>M</span>-SoftTech</p>
    <Link to="/add-speaker" className="icon-a"><i className="fa fa-dashboard icons" /> &nbsp;&nbsp;Add Speakers</Link>
    <Link to="/add-organizer" className="icon-a"><i className="fa fa-users icons" /> &nbsp;&nbsp;Add Organizer</Link>
    <Link to="/edit-organizer" className="icon-a"><i className="fa fa-list icons" /> &nbsp;&nbsp;Edit Organizer</Link>
    <Link to="/edit-speaker" className="icon-a"><i className="fa fa-shopping-bag icons" /> &nbsp;&nbsp;Edit Speaker</Link>
    <Link to="#" className="icon-a"><i className="fa fa-tasks icons" /> &nbsp;&nbsp;Inventory</Link>
    <Link to="#" className="icon-a"><i className="fa fa-user icons" /> &nbsp;&nbsp;Accounts</Link>
    <Link to="#" className="icon-a"><i className="fa fa-list-alt icons" /> &nbsp;&nbsp;Tasks</Link>
  </div>
  <div id="main">
    <div className="head">
      <div className="col-div-6">
        <span style={{fontSize: 30, cursor: 'pointer', color: 'white'}} className="nav">☰ Dashboard</span>
        <span style={{fontSize: 30, cursor: 'pointer', color: 'white'}} className="nav2">☰ Dashboard</span>
      </div>
      <div className="col-div-6">
        <div className="profile">
          <img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/face7.jpg" className="pro-img" />
          <p>Paritosh<span>UI / UX DESIGNER</span></p>
        </div>
      </div>
      <div className="clearfix" />
    </div>
    <div className="clearfix" />
    <br />
    <div className="col-div-3">
      <div className="box">
        <p>67<br /><span>Speakers Form</span></p>
        <i className="fa fa-users box-icon" />
      </div>
    </div>
    <div className="col-div-3">
      <div className="box">
        <p>88<br /><span>Organizer Forms</span></p>
        <i className="fa fa-list box-icon" />
      </div>
    </div>
    <div className="col-div-3">
      <div className="box">
        <p>99<br /><span>Orders</span></p>
        <i className="fa fa-shopping-bag box-icon" />
      </div>
    </div>
    <div className="col-div-3">
      <div className="box">
        <p>78<br /><span>Tasks</span></p>
        <i className="fa fa-tasks box-icon" />
      </div>
    </div>
    <div className="clearfix" />
    <br /><br />
    <div className="col-div-8">
      <div className="box-8">
        <div className="content-box">
          <p>Top Selling Projects <span>Sell All</span></p>
          <br />
          <table>
            <tbody><tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
    <div className="col-div-4">
      <div className="box-4">
        <div className="content-box">
          <p>Total Sale <span>Sell All</span></p>
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle"> 70% </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </div>
</div>


    
    
    
    
    
    
    </>
  )
}

export default Dashboard