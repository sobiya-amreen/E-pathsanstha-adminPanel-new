import './Addmember.css'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
// import AddMemberModal from './AddMemberModal'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
// import { Submit } from '../../Service';
import axios from 'axios'
import AddMemberModal from './AddMemberModal'

const Addmember = () => {
  const {handleSubmit,register,formState:{errors}}=useForm();
  

 // Function to handle form submission and send data with Axios
 const onSubmit = (data) => {
  console.log(data);
  // const apiUrl = "/api/Member"; // Replace with your actual API endpoint

    // Send a POST request with Axios
    axios.post("/api/Member", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

};



  return (
    <div>
        <div className="theme-red">

   
  {/* <!-- Search Bar -->  */}
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
                    <h2>ADD MEMBER (सदस्य जोडा)</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                       <Form onSubmit={handleSubmit(onSubmit)}>
                       
                     


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
                                name='fullName'
                                {...register("fullName")}
                              />
                            </div>
                          </div>
                        </div>


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
                                name='accountNo'
                                {...register("accountNo")}
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Department (विभाग)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Department"
                                name='department'
                                {...register("department")}
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Designation (पदनाम)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder='Enter Designation'
                                name='designation'
                                {...register("designation")}
                              />
                            </div>
                          </div>
                        </div>






                        <div className="col-md-8">
                          <b>Date Of Birth</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                name='dob'
                                {...register("dob")}
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Date Of Joining</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                name='doj'
                                {...register("doj")}
                              />
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>DOR (Date of Retirement) निवृत्तीची तारीख</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                name='dor'
                                {...register("dor")}
                              />
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Mobile Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Mobile Number"
                                name='mobileNumber'
                                {...register("mobileNumber")}
                              />
                            </div>
                          </div>
                        </div>





                        <div className="col-md-8">
                          <b>email id</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="email"
                                className="form-control date"
                                placeholder="Enter email id"
                                name='emailid'
                                {...register("emailid")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Address (पत्ता)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Address"
                                name='address'
                                {...register("address")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Shares (भाग )</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                               <Form.Group className="mb-3" controlId="addMemberShare">
                              <Form.Control
                                type="text"
                                className="form-control date"
                                placeholder="Enter Shares"
                                name='shares'
                                 {...register("shares",{required: "please enter shares"})}
                              />
                              </Form.Group>
                            </div>
                          </div>
                           <p style={{color:"red"}}>{errors?.share?.message}</p>
                        </div>



                        <div className="col-md-8">
                          <b>Monthly Deposit (मासिक ठेव )</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="addMemberShare">
                              <Form.Control
                                type="text"
                                className="form-control date"
                                placeholder="Enter Monthly Deposit"
                                name='monthlyDeposit'
                                {...register("monthlyDeposit",{required: "please enter monthly deposite"})}
                              />
                             </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.monthlydeposite?.message}</p>
                        </div>




                        <div className="col-md-8">
                          <b>Insurance (सभासद कल्याण निधी)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Insurance"
                                name='insurance'
                                {...register("insurance")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Bank Account Number (बँक खाते क्रमांक)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter bank Account Number"
                                name='bankAccountNo'
                                {...register("bankAccountNo")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Bank Name (बँकेचे नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Bank Name"
                                name='bankName'
                                {...register("bankName")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Branch Code (शाखा कोड)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Branch Code"
                                name='branchCode'
                                {...register("branchCode")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Branch Name (शाखा नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Branch Name"
                                name='branchName'
                                {...register("branchName")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Nominee's Name (नामनिर्देशित व्यक्तीचे नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Nominee's Name"
                                name='nomineeName'
                                {...register("nomineeName")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Nominee's Relation (नामनिर्देशित व्यक्तीचे नाते)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Nominee's Relation"
                                name='relationWithNominee'
                                {...register("relationWithNominee")}
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Registration Fee</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Registration Fee"
                                name='regFees'
                                {...register("regFees")}
                              />
                            
                            </div>
                          </div>
                        </div>


                       

                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect">Submit</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}



          {/* Table start */}

        
         {/*  Table end */}






          </div>
        </section>
      </div>
    </div>
  )
}

export default Addmember