import React from 'react'

const Nafatota_patrak_modal = () => {
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> नफा तोटा पत्रक </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        



         {/* modal form start */}
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>खर्चाच्या तपशील</b> <br/> <br/>
                          <b>सभासद बचत ठेव व्याज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <b>उत्पन्नाच्या तपशील</b>  <br/>   <br/>  
                      <b>कर्ज व्याज वसुल </b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */}
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 






                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>जीएसटी भरणा</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Monthly Deposite"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>झेरॉक्स नफा</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Monthly Deposite"
                              />
                              
                            </div>
                          </div>
                        </div> 





                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बँक कमिशन</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Insurence"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>देणगी</b>
                          
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Insurence"
                              />
                              
                            </div>
                          </div>
                        </div> 







                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>किरकोळ</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Regular Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        
                          <b>अल्प कर्ज व्याज वसुल</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Regular Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 





                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्मचारी पगार</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>क . भ.  नि . निधी </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद कल्याण निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>मानधन खर्च</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="झेरॉक्स अनामत "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्ज व्याज वसुल  </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>स कल्याण निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>जी. एस. टी शुल्क</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बँक व्याज एमजीबी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद बचत ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>इन्कम टॅक्स भरणा</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>इन्कम टॅक्स फीस</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                       
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>डिजिटल स्वाक्षरी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>इन्कम टॅक्स रिटर्न</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>जाहिरात खर्च</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 

                           {/* start tartidi */}
                          
                           <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>तरतुदी</b> <br/> <br/>
                          <b>सभासद बचत ठेव व्याज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                      <b>उत्पन्नाच्या तपशील</b>  <br/>   <br/>  
                      <b>कर्ज व्याज वसुल </b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */}
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 

                        
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>मु. ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>स कल्याण निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>ऑडिट फीस</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>प्रशिक्षण निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>डेड स्टॉक झिज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>सभासद बचत ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>विघापीठ ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>निव्वळ नफा</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b>सभासद ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>एकूण बेरीज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>एकूण बेरीज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 








         {/* modal form end */}



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Nafatota_patrak_modal
