import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import AddFDModal from './AddFDModal'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';

const AddFD = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

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
        <AdminTopBar />
        {/* <!-- #Top Bar --> */}



        {/* sideBar */}


        <AdminSideBar />
        {/* end sideBar */}

        <section className="content">
          <Link to="/">  <h4 >DASHBOARD</h4></Link>
          <div className="container-fluid">
            <div className="block-header">

            </div>







            {/* form starts */}
            {/* <!-- Masked Input --> */}
            <Form onSubmit={handleSubmit(Submit)}>
              <Form.Group className="mb-3" controlId="DedictionForm">







                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>ADD FD(FIXED DEPOSIT)</h2>
                      </div>
                      <div className="body">
                        <div className="demo-masked-input">
                          <div className="row clearfix">




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
                            {/* <button type="button" className="btn btn-primary ">Search</button> */}



                            <div className="col-md-8">
                              <b>FD Certificate Number (FD प्रमाणपत्र क्रमांक)</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">

                                  <input
                                    type="text"
                                    className="form-control date"
                                    placeholder="FD/SOC/2022/110"
                                  />
                                </div>
                              </div>
                            </div>



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
                                    placeholder="Enter Full Name (पूर्ण नाव)"
                                  />
                                </div>
                              </div>
                            </div>



                            <div className="col-md-8">
                              <b>FD Amount (FD रक्कम)</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  {/* <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter FD Amount (in Rs)'
                              /> */}

                                  <Form.Control
                                    type="number"
                                    className="form-control date"
                                    placeholder='Enter FD Amount (in Rs)'
                                    {...register("fdAmount", { required: "please enter FD Amount " })}
                                  />
                                </div>
                              </div>
                          <p style={{ color: "red" }}>{errors?.fdAmount?.message}</p>

                            </div>






                            <div className="col-md-8">
                              <b>FD Date (FD तारीख )</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  {/* <input
                                    type="date"
                                    className="form-control date"


                                  /> */}
                                  <Form.Control
                                    type="date"
                                    className="form-control date"
                                    {...register("date", { required: "please enter FD Date" })}
                                  />
                                </div>
                              </div>
                          <p style={{ color: "red" }}>{errors?.date?.message}</p>

                            </div>



                            <div className="col-md-8">
                              <b>Receipt Number</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  <input
                                    type="number"
                                    className="form-control date"
                                    placeholder='Enter Receipt Number'
                                  />
                                </div>
                              </div>
                            </div>




                            <div className="col-md-8">
                              <b>Cheque Number</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  <input
                                    type="number"
                                    className="form-control date"
                                    placeholder='Enter Receipt Number'
                                  />
                                </div>
                              </div>
                            </div>



                            <div className="col-md-8">
                              <b>Current Balance</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  <input
                                    type="number"
                                    className="form-control date"
                                    placeholder='Enter Receipt Number'
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <button type="button" className="btn btn-primary checkButton ">Check</button> */}



                            {/* <div className="col-md-8">
                              <b>Select files</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                              
                                  <div className="col-8">
                                    <input className="form-control" type="file" id="photo" name="photo" multiple="" />
                                  </div>

                                </div>
                              </div>
                            </div> */}






                            <Button type="submit" variant='primary' className="btn btn-block btn-lg waves-effect"   >Submit            </Button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </Form.Group>
            </Form>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}




            {/* Table start */}

            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>FIXED DEPOSIT</h2>
                    {/* <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                  </div>
                  <div className="body">
                    <div className="table-responsive">
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap"
                      >
                        <div className="dt-buttons">
                          <a
                            className="dt-button buttons-copy buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Copy</span>
                          </a>
                          <a
                            className="dt-button buttons-csv buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>CSV</span>
                          </a>
                          <a
                            className="dt-button buttons-excel buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Excel</span>
                          </a>
                          <a
                            className="dt-button buttons-pdf buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>PDF</span>
                          </a>
                          <a
                            className="dt-button buttons-print"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Print</span>
                          </a>
                        </div>
                        <div
                          id="DataTables_Table_1_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control input-sm"
                              placeholder=""
                              aria-controls="DataTables_Table_1"
                            />
                          </label>
                        </div>







                        <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>








                        <table
                          className="table table-bordered table-striped table-hover dataTable js-exportable"
                          id="DataTables_Table_1"
                          role="grid"
                          aria-describedby="DataTables_Table_1_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc a1"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"

                              >
                                Id
                              </th>
                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Account Number
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                FD Certificate Number
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Full Name
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                FD Amount
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                FD Date
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Maturing Date
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                RIO
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Total Amount
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Uploaded Document
                              </th>













                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"

                              >
                                Delete
                              </th>








                            </tr>
                          </thead>
                          {/* <tfoot>
                            <tr>
                              <th rowSpan="1" colSpan="1">
                                Id
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Account Number
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Full Name
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Date
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Share Allot
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Total Share Amount
                              </th>
                            </tr>
                          </tfoot> */}
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Airi Satou</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Angelica Ramos</td>
                              <td>Chief Executive Officer (CEO)</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Bradley Greer</td>
                              <td>Software Engineer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Brenden Wagner</td>
                              <td>Software Engineer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Bruno Nash</td>
                              <td>Software Engineer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Caesar Vance</td>
                              <td>Pre-Sales Support</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>



                            <tr role="row" className="even">
                              <td className="sorting_1">Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>

                            </tr>



                            <tr role="row" className="odd">
                              <td className="sorting_1">Cara Stevens</td>
                              <td>Sales Assistant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><i className='material-icons download_icon'>get_app</i></td>
                              <td><AddFDModal /></td>



                            </tr>

                          </tbody>
                        </table>
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button previous disabled"
                              id="DataTables_Table_1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="0"
                                tabIndex="0"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button active">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="1"
                                tabIndex="0"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="2"
                                tabIndex="0"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="3"
                                tabIndex="0"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="4"
                                tabIndex="0"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="5"
                                tabIndex="0"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="6"
                                tabIndex="0"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button next"
                              id="DataTables_Table_1_next"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="7"
                                tabIndex="0"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Table end */}










          </div>
        </section>
      </div>
    </div>
  )
}

export default AddFD
