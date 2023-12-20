import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import './NewLoan.css'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';
import { Button, Form } from 'react-bootstrap'


const NewLoan = () => {
  const {handleSubmit,register,formState:{errors}}=useForm();
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
                    <h2>New Loan</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                      <Form onSubmit={handleSubmit(Submit)}>
                                             


                        <div className="col-md-8">
                          <b>Account Number (खाते क्रमांक)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Account Number"
                              />
                               <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Search</button>
                            </div>
                          </div>
                        </div>
                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton">Search</button> */}
                        {/* <button type="button" className="btn btn-primary ">Search</button> */}



                        <div className="col-md-8">
                          <b>Full Name (पूर्ण नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Full Name"
                              />
                            </div>
                          </div>
                        </div>
                       


                        <div className="col-md-8">
                          <b>Insurance (विमा)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Insurance"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Share (भाग)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder='Enter Share (भाग)'
                              />
                            </div>
                          </div>
                        </div>






                        {/* <div className="col-md-8">
                          <b>Gross Salary</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Gross Salary (in Rs)'
                                
                              />
                            </div>
                          </div>
                        </div> */}



                        <div className="col-md-8">
                          <b>Net Salary</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Net Salary (in Rs)'
                              />
                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Check</button> */}
                            </div>
                          </div>
                        </div>
                       {/* <button type="button" className="btn btn-primary checkButton ">Check</button> */}
                        




                        <div className="col-md-8">
                          <b>ROI (व्याज दर)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Loan Amount (कर्जाची रक्कम)'
                              /> */}
                              <div className="col-8">
                                       <select id="roi" name="roi" className="form-control">
                                        
                                            <option value="10">10</option>
                                        
                                            <option value="7">7</option>
                                        
                                            <option value="7">7</option>
                                        
                                            <option value="11">11</option>
                                                
                                        </select>
                                    </div>
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="newLoanDateField">
                              <Form.Control
                                type="date"
                                className="form-control date"
                                {...register("newloandate",{required: "please enter Date"})}
                              />
                               </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.newloandate?.message}</p>
                        </div>





                        <div className="col-md-8">
                          <b>User Principal Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter User Principal Amount"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>EMI</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter EMI"
                                
                              />
                            <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">List</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                                        {/* <button type="button" className="btn btn-primary listButton">List</button> */}
                                    </div>



                        <div className="col-md-8">
                          <b>Total Principal Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Total Principal Amount"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Interest Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Interest Amount"
                              />
                            
                            </div>
                          </div>
                        </div>




                        {/* <div className="col-md-8">
                          <b>Guaranteer Name One</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                               <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Guaranteer Name One"
                              /> 
                          
                            
                            </div>
                          </div>
                        </div> */}



                       



                        <div className="col-md-8">
                          <b>Cheque Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="newLoanChequeNumberField">
                              <Form.Control
                                type="number"
                                className="form-control date"
                                placeholder="Enter Cheque Number"
                                {...register("newLoanChequeNumber",{required: "please enter Cheque Number"})}
                              />
                             </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.newLoanChequeNumber?.message}</p>
                        </div>



                        {/* <div className="col-md-8">
                          <b>Select files</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                             
                              <div className="col-8">
                                        <input className="form-control" type="file" id="photo" name="photo" multiple=""/>
                                    </div>
                            
                            </div>
                          </div>
                        </div> */}



                        <div className="col-md-8">
                          <b>Loan Balance</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Loan Balance"
                              />
                            
                            </div>
                          </div>
                        </div>



                     


                       

                        <Button type="submit" variant='primary' className="btn bg-indigo btn-block btn-lg waves-effect">Apply Loan</Button>
                        </Form>
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

export default NewLoan
