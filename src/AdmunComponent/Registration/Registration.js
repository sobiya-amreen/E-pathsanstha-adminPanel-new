import React from 'react'
import { Link } from 'react-router-dom'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import AdminTopBar from '../AdminTopBar/AdminTopBar'
import { Button } from 'react-bootstrap'

const Registration = () => {
  return (
    <div>
    <div className="theme-red">
{/* <!-- Page Loader --> */}
{/* <Loader /> */}
{/* <!-- #END# Page Loader -->





<!-- Search Bar --> */}
<div className="search-bar">
<div className="search-icon">
  <i className="material-icons">search</i>
</div>
<input type="text" placeholder="START TYPING..." />
<div className="close-search">
  <i className="material-icons">close</i>
</div>

</div>
{/* <!-- #END# Search Bar -->




<!-- Top Bar --> */}
<AdminTopBar/>
{/* <!-- #Top Bar --> */}



{/* sideBar */}


<AdminSideBar  />
{/* end sideBar */}

<section className="content">
   <Link to="/">  <h4 >DASHBOARD</h4></Link>
<div className="container-fluid">
  <div className="block-header">
  
  </div>


    {/* form starts */}
  {/* <!-- Masked Input --> */}
  <div className="row clearfix">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div className="card">
        <div className="header">
          <h2>Employee Registration Form</h2>
        </div>
        <div className="body">
          <div className="demo-masked-input">
            <div className="row clearfix">
             
             
             
              <div className="col-md-8">
                <b>First Name</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="text"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <b>Account Number</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="number"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Designation</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="text"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Date of Birth</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="date"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Date of Joining</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="date"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Date of Retirement</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="date"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Mobile Number</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="number"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>email ID</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type='email'
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>




              <div className="col-md-8">
                <b>Bank Account Number</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="number"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>


              <div className="col-md-8">
                <b>City</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="Text"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>



              <div className="col-md-8">
                <b>Insurence</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="number"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>


              <div className="col-md-8">
                <b>Password</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">event_note</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="password"
                      className="form-control time24"
                      
                    />
                  </div>
                </div>
              </div>


              {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">Report</button> */}
             
              {/* <!-- Button trigger modal --> */}
              <Button    type="button"  variant='primary' className="btn btn-block btn-lg waves-effect ">Report</Button>







             

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- #END# Masked Input --> */}
  {/* form starts */}




</div>
</section>
</div>
</div>
  )
}

export default Registration
