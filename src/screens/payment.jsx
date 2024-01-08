import axios from "axios";
import React, { useState } from "react";
import {  useLocation,useNavigate } from "react-router-dom";

// import toast from "react-hot-toast";

import $ from "jquery";
import  Cookies from "universal-cookie";

import CryptoJS from "crypto-js";

function Payments() {

       async function  ok(){
        const dataToHash = {
            Key1: "fo2m38jIC74=",
         
          Key2: "RLplQIJqKONvFzk4yqF7CA==",
            // Add other key-value pairs here...
          };
    
          const dataString = Object.keys(dataToHash)
      .sort()
      .map(key => `${key}=${dataToHash[key]}`)
      .join("&");
      const hash = CryptoJS.SHA256(dataString).toString(CryptoJS.enc.Hex);
    
          console.log("OK     "+hash)






    const requestData = {
        Key1: "fo2m38jIC74=",
     
      Key2: "RLplQIJqKONvFzk4yqF7CA==",
      HandshakeForm: {
        Key1: "fo2m38jIC74=",
    Key2: "RLplQIJqKONvFzk4yqF7CA==",
    HS_ChannelId: "1001",
    HS_MerchantId: "23352",
    HS_StoreId: "031250",
    ReturnURL: "https://google.com.pk",
    HS_IsRedirectionRequest: 0,
    Currency: "PKR",
    HS_MerchantHash: "fo2m38jIC74",
    HS_MerchantUsername: "ifufor",
    HS_MerchantPassword: "RLplQIJqKONvFzk4yqF7CA==",
    HS_RequestHash: {hash},
        HS_TransactionReferenceNumber: "120583",
        handshakeButton: {
          type: "submit",
          class: "btn btn-custon-four btn-danger",
          id: "handshake",
          text: "Handshake"
        }
      }
    };
    
   await axios.post('https://sandbox.bankalfalah.com/HS/HS/HS', requestData)
      .then(response => {
        // Handle the response here
        console.log('Handshake successful:', response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error during handshake:', error);
      });
    
    }
ok();



  const min = Math.ceil(1);
  const max = Math.floor(1000);

  const [bankData, setBankData] = useState({
    Key1: "3qauThGrSFh864Hm",
    Key2: "5195939605643343",
    ChannelId: "1001",
    MerchantId: "",
    StoreId: "",
    ReturnURL: "https://google.com.pk",
    HS_IsRedirectionRequest: 0,
    Currency: "PKR",
    MerchantHash: "",
    MerchantUsername: "Junaidsabirsegal1",
    MerchantPassword: "Pakistan@123",
    TransactionReferenceNumber: Math.floor(
      Math.random() * (max - min + 1) + min,
    ).toString(),
    RequestHash: "",
    HS_RequestHash: "",
    AuthToken: "",
    IsBIN: 0,
    TransactionTypeId: "3",
    TransactionAmount: "3",
  });
  const [data, setData] = useState([]);
  const [dateTime, setDateTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useNavigate();
  const cookies = new Cookies();
  const { state } = location;

  const codingCourseId = '12';
  const enrollDateTimeId = '12:00:58';
  const studentId = '123';
  const gradeId = '23';
  const classType = 'ab';
  const fee = '555';

  function payment(event) {
    event.preventDefault();

    Promise.all([
      submitRequest("HandshakeForm"),
    ]).then();
  }

  async function createHandshakeRequestBankAlfalah() {
    return new Promise(function (resolve, reject) {
      // var axios = require("axios");

      const formData = new FormData();
      formData.append("HS_RequestHash", $("#HS_RequestHash").val());
      formData.append(
        "HS_IsRedirectionRequest",
        bankData.HS_IsRedirectionRequest,
      );
      formData.append("HS_ChannelId", bankData.ChannelId);
      formData.append("HS_ReturnURL", bankData.ReturnURL);

      formData.append("HS_MerchantId", bankData.MerchantId);
      formData.append("HS_StoreId", bankData.StoreId);
      formData.append("HS_MerchantHash", bankData.MerchantHash);
      formData.append("HS_MerchantUsername", bankData.MerchantUsername);
      formData.append("HS_MerchantPassword", bankData.MerchantPassword);
      formData.append(
        "HS_TransactionReferenceNumber",
        bankData.TransactionReferenceNumber,
      );
      formData.append("transactionTypeId", bankData.TransactionTypeId);
      formData.append("TransactionAmount", bankData.TransactionAmount);

      var config = {
        method: "post",
        url: "https://sandbox.bankalfalah.com/HS/HS/HS",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
        data: formData,
      };

      axios(config)
        .then(function (response) {
          debugger;

          if (response.data.success === "true") {
            $("#AuthToken").val(response.data.AuthToken);
            saveCookies();
            submitRequest("PageRedirectionForm");
            console.log('ok');
          } else {
            $("#HS_RequestHash").val();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }

  function handleSubmit(event) {
    debugger;
    event.preventDefault();

    if (classType === null || classType === "") {
      // toast.error("Please select Class Type.");
    } else {
      const payload = {
        ClassType: classType,
        IsPaid: false,
        // "CodingCoursesID": this.state.codingCourseId,
        CodingCoursesGradesID: gradeId,
        CodingCoursesDateTimeID: enrollDateTimeId,
        StudentsID: studentId,
      };

      axios
        .post(`${process.env.REACT_APP_SERVERSIDE_URL}/api/WebApis/EnrollCodingCourse`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.Status === true) {
            debugger;
            // this.setState({ loading: false })
            // toast.success("Successfully Added!");

            // this.props.history.push('/dashboard/' + props.studentId);
            // history.push({
            //   pathname: "/dashboard/" + studentId,
            // });
            // window.scrollTo(0, 0);

            // this.setState({
            //   codingCourseId: "",
            //   enrollDateTimeId: "",
            //   studentId: "",
            //   gradeId: "",
            //   classType: ""
            // });
          } else {
            // this.setState({ loading: false })
            // window.scrollTo(0, 0);
            // toast.error(response.data.Message);
          }
        })
        .catch((error) => {
          // this.setState({ loading: false })
          // window.scrollTo(0, 0);
          // toast.error(error);
        });
    }
  }

  async function saveCookies() {
    cookies.set(
      "payload",
      {
        ClassType: classType,
        IsPaid: true,
        CodingCoursesGradesID: gradeId,
        CodingCoursesDateTimeID: enrollDateTimeId,
        StudentsID: studentId,
      },
      { path: "/" },
    );
  }

  async function submitRequest(formName) {
    var mapString = "",
      hashName = "RequestHash";
    if (formName === "HandshakeForm") {
      hashName = "HS_" + hashName;
    }

    $("#" + formName + " :input").each(function () {
      if ($(this).attr("id") !== "") {
        mapString += $(this).attr("id") + "=" + $(this).val() + "&";
      }
    });

    $("#" + hashName).val(
      CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(mapString.substr(0, mapString.length - 1)),
        CryptoJS.enc.Utf8.parse($("#Key1").val()),
        {
          keySize: 128 / 8,
          iv: CryptoJS.enc.Utf8.parse($("#Key2").val()),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        },
      ),
    );
    if (formName === "PageRedirectionForm") {
      document.getElementById("PageRedirectionForm").submit();
    } else if (formName === "HandshakeForm") {
      createHandshakeRequestBankAlfalah();
    }
  }

  return (
    
    <>
      {loading === true ? (
        <div
          style={{
            width: "100%",
            height: "150vh",
            backgroundColor: "white",
          }}>
          {/* <div className='flex-loader'>
            <ReactLoading
              type='spin'
              color='#2D933F'
              height={80}
              width={80}
              className='flex-item-loader'
            />
          </div> */}
        </div>
      ) : (
        <>
          <div className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-12' style={{ marginTop: "150px" }}>
                <div className='row'>
                  <div className='container'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='glyphprogress'>
                            <div className='connecting-line'></div>
                            <ul>
                              <li>
                                <span className='glyphstep'>
                                  <i className='glyphicon glyphicon-user'></i>
                                  <span className='step-text'>Course</span>
                                </span>
                              </li>
                              <li>
                                <span className='glyphstep'>
                                  <i className='glyphicon glyphicon-phone'></i>
                                  <span className='step-text'>
                                    Confrim Course
                                  </span>
                                </span>
                              </li>
                              <li className=''>
                                <span className='glyphstep'>
                                  <i className='glyphicon glyphicon-envelope'></i>
                                  <span className='step-text'>
                                    Make Payment
                                  </span>
                                </span>
                              </li>
                              <li className='remaining'>
                                <span className='glyphstep'>
                                  <i className='glyphicon glyphicon-envelope'></i>
                                  <span className='step-text'>Complete</span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container mt-5'>
                <div className='col-12'>
                  <div className='row'>
                    <div className='container'>
                      <div
                        className='premiumcarouselitem'
                        style={{ width: "100%" }}>
                        <div className='col-12'>
                          <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
                              <div className='row'>
                                <div className='col-sm-12'>
                                  <p className='mb-3'>Payment Option</p>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='paymentOption'>
                                    <i class='fa-solid fa-credit-card iconStyle'></i>{" "}
                                    Cards
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <>
                                    <input
                                      id='Key1'
                                      name='Key1'
                                      type='hidden'
                                      value={bankData.Key1}
                                    />
                                    <input
                                      id='Key2'
                                      name='Key2'
                                      type='hidden'
                                      value={bankData.Key2}
                                    />

                                    <form
                                      action='https://sandbox.bankalfalah.com/HS/HS/HS'
                                      id='HandshakeForm'
                                      method='post'>
                                      <input
                                        id='HS_RequestHash'
                                        name='HS_RequestHash'
                                        type='hidden'
                                        value=''
                                      />
                                      <input
                                        id='HS_IsRedirectionRequest'
                                        name='HS_IsRedirectionRequest'
                                        type='hidden'
                                        value={bankData.HS_IsRedirectionRequest}
                                      />
                                      <input
                                        id='HS_ChannelId'
                                        name='HS_ChannelId'
                                        type='hidden'
                                        value={bankData.ChannelId}
                                      />
                                      <input
                                        id='HS_ReturnURL'
                                        name='HS_ReturnURL'
                                        type='hidden'
                                        value={bankData.ReturnURL}
                                      />
                                      <input
                                        id='HS_MerchantId'
                                        name='HS_MerchantId'
                                        type='hidden'
                                        value={bankData.MerchantId}
                                      />
                                      <input
                                        id='HS_StoreId'
                                        name='HS_StoreId'
                                        type='hidden'
                                        value={bankData.StoreId}
                                      />
                                      <input
                                        id='HS_MerchantHash'
                                        name='HS_MerchantHash'
                                        type='hidden'
                                        value={bankData.MerchantHash}
                                      />
                                      <input
                                        id='HS_MerchantUsername'
                                        name='HS_MerchantUsername'
                                        type='hidden'
                                        value={bankData.MerchantUsername}
                                      />
                                      <input
                                        id='HS_MerchantPassword'
                                        name='HS_MerchantPassword'
                                        type='hidden'
                                        value={bankData.MerchantPassword}
                                      />
                                      <input
                                        id='HS_TransactionReferenceNumber'
                                        name='HS_TransactionReferenceNumber'
                                        autoComplete='off'
                                        type='hidden'
                                        value={
                                          bankData.TransactionReferenceNumber
                                        }
                                      />
                                      <button
                                        hidden
                                        class='btn btn-custon-four btn-danger'
                                        id='handshake'>
                                        Handshake
                                      </button>
                                    </form>
                                    <form
                                      action='https://sandbox.bankalfalah.com/SSO/SSO/SSO'
                                      id='PageRedirectionForm'
                                      method='post'
                                      noValidate='novalidate'>
                                      <input
                                        id='AuthToken'
                                        name='AuthToken'
                                        type='hidden'
                                        value=''
                                      />
                                      <input
                                        id='RequestHash'
                                        name='RequestHash'
                                        type='hidden'
                                        value=''
                                      />
                                      <input
                                        id='ChannelId'
                                        name='ChannelId'
                                        type='hidden'
                                        value={bankData.ChannelId}
                                      />
                                      <input
                                        id='Currency'
                                        name='Currency'
                                        type='hidden'
                                        value='PKR'
                                      />
                                      <input
                                        id='IsBIN'
                                        name='IsBIN'
                                        type='hidden'
                                        value={bankData.IsBIN}
                                      />
                                      <input
                                        id='ReturnURL'
                                        name='ReturnURL'
                                        type='hidden'
                                        value={bankData.ReturnURL}
                                      />
                                      <input
                                        id='MerchantId'
                                        name='MerchantId'
                                        type='hidden'
                                        value={bankData.MerchantId}
                                      />
                                      <input
                                        id='StoreId'
                                        name='StoreId'
                                        type='hidden'
                                        value={bankData.StoreId}
                                      />
                                      <input
                                        id='MerchantHash'
                                        name='MerchantHash'
                                        type='hidden'
                                        value={bankData.MerchantHash}
                                      />
                                      <input
                                        id='MerchantUsername'
                                        name='MerchantUsername'
                                        type='hidden'
                                        value={bankData.MerchantUsername}
                                      />
                                      <input
                                        id='MerchantPassword'
                                        name='MerchantPassword'
                                        type='hidden'
                                        value={bankData.MerchantPassword}
                                      />
                                      <select
                                        hidden
                                        autoComplete='off'
                                        id='TransactionTypeId'
                                        name='TransactionTypeId'>
                                        <option value='3'>
                                          Credit/Debit Card
                                        </option>
                                      </select>
                                      <input
                                        autoComplete='off'
                                        id='TransactionReferenceNumber'
                                        name='TransactionReferenceNumber'
                                        type='text'
                                        hidden
                                        value={
                                          bankData.TransactionReferenceNumber
                                        }
                                      />
                                      <input
                                        autoComplete='off'
                                        id='TransactionAmount'
                                        name='TransactionAmount'
                                        hidden
                                        type='text'
                                        value={fee}
                                      />
                                      <button
                                        hidden
                                        type='submit'
                                        class='btn btn-custon-four btn-danger'
                                        id='run'>
                                        RUN
                                      </button>
                                    </form>
                                  </>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-8 col-md-8 col-sm-12'>
                              <ul class='list-group list-group-flush mt-5'>
                                <li class='list-group-item'>
                                  <div className='row'>
                                    <div className='col-sm-6'>
                                      <p>Total Amount</p>
                                    </div>
                                    <div className='col-sm-6'>
                                      <p className='text-right'>{fee}</p>
                                    </div>
                                  </div>
                                </li>

                                <li class='list-group-item'>
                                  <div
                                    className='topSection_bottom_left_card_one_buttn mt-4'
                                    style={{ width: "200px" }}>
                                    {/* <NavLink */}

                                    {/* // to={{
                                      //   pathname: "/dashboard/" + studentId,
                                      // }}
                                      > */}
                                    <button
                                      style={{
                                        fontWeight: "500px",
                                        borderRadius: "10px",
                                        color: "white",
                                        padding: "10px 20px",
                                        border: "0",
                                        backgroundColor: "#28A745",
                                      }}
                                      onClick={(e) => payment(e)}>
                                      Place a Order
                                    </button>
                                    {/* // </NavLink> */}
                                  </div>
                                </li>
                              </ul>
                              <ul></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Payments;
