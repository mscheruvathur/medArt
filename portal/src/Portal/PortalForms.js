import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hRegister } from "../actions/hospitalActions";
import "./PortalForms.css";
import { TextField } from "@material-ui/core";
import APIService from "./APIServices";

function PortalForms({ history, location }) {
  // hospital collection
  const [hospitalname, setHospitalName] = useState("");
  const [hospitalemail, setHospitalEmail] = useState("");
  const [hospitalphone, setHospitalPhone] = useState("");
  const [geolocation, setGeoLocation] = useState("");
  const [hospitalstate, setHospitalState] = useState("");
  const [hospitaldistrict, setHospitalDistrict] = useState("");
  const [hospitaladdress, setHospitalAddress] = useState("");
  const [hospitalcity, setHospitalCity] = useState("");

  // applicant details

  const [applicantname, setApplicantName] = useState("");
  const [applicantemail, setApplicantEmail] = useState("");
  const [applicantphone, setApplicantPhone] = useState("");
  const [applicantstate, setApplicantState] = useState("");
  const [applicantaddress, setApplicantAddress] = useState("");
  const [applicantaddress2, setApplicantAddress2] = useState("");
  const [applicantdistrict, setApplicantDistrict] = useState("");
  const [applicantpincode, setApplicantPinCode] = useState("");

  // message

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : '/';
  const hospitalRegister = useSelector((state) => state.hospitalRegister);
  const { error, loading, hospitalInfo } = hospitalRegister;


  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      hRegister(
        hospitalname,
        hospitalemail,
        hospitalphone,
        geolocation,
        hospitalstate,
        hospitaldistrict,
        hospitaladdress,
        hospitalcity,
        applicantname,
        applicantemail,
        applicantphone,
        applicantstate,
        applicantaddress,
        applicantaddress2,
        applicantdistrict,
        applicantpincode
      )
    );
    history.push(redirect);
    alert('Hospitall added Successfully')
  };

  
  return (
    <div className="portal-main-wrapper">
      <div className="portal-sub-wrapper">
          <div className="form-wrapper-left">
            <div>
              <h4>Hospital Details</h4>
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={hospitalname}
                onChange={(e) => setHospitalName(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Hospital Name"
                required
                style={{ width: "480px" }}
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={hospitalemail}
                onChange={(e) => setHospitalEmail(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                label="Email"
                required
                variant="outlined"
              />
              <TextField
                value={hospitalphone}
                onChange={(e) => setHospitalPhone(e.target.value)}
                style={{ marginLeft: "20px" }}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                label="Phone"
                required
                variant="outlined"
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={geolocation}
                onChange={(e) => setGeoLocation(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Geo Location"
                required
                style={{ width: "480px" }}
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={hospitalstate}
                onChange={(e) => setHospitalState(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                label="State"
                required
                variant="outlined"
              />
              <TextField
                value={hospitaldistrict}
                onChange={(e) => setHospitalDistrict(e.target.value)}
                style={{ marginLeft: "20px" }}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                label="District"
                required
                variant="outlined"
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={hospitaladdress}
                onChange={(e) => setHospitalAddress(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Address"
                required
                style={{ width: "480px" }}
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={hospitalcity}
                onChange={(e) => setHospitalCity(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="City, Pincode"
                required
                style={{ width: "480px" }}
              />
            </div>
          </div>
          <div className="form-wrapper-right">
            <div>
              <h4>Applicant Details</h4>
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={applicantname}
                onChange={(e) => setApplicantName(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                required
                label="Name"
              />
              <TextField
                value={applicantemail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                style={{ marginLeft: "20px" }}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Email"
                required
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={applicantphone}
                onChange={(e) => setApplicantPhone(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Mobile Number"
                required
              />
              <TextField
                value={applicantstate}
                onChange={(e) => setApplicantState(e.target.value)}
                style={{ marginLeft: "20px" }}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="State"
                required
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={applicantaddress}
                onChange={(e) => setApplicantAddress(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Address"
                style={{ width: "480px" }}
                required
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={applicantaddress2}
                onChange={(e) => setApplicantAddress2(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Address"
                required
                style={{ width: "480px" }}
              />
            </div>
            <div className="filter-input-wrapper">
              <TextField
                value={applicantdistrict}
                onChange={(e) => setApplicantDistrict(e.target.value)}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="District"
                required
              />
              <TextField
                value={applicantpincode}
                onChange={(e) => setApplicantPinCode(e.target.value)}
                style={{ marginLeft: "20px" }}
                id="outlined-margin-dense"
                helperText="Search here."
                margin="dense"
                variant="outlined"
                label="Pincode"
                required
              />
            </div>

            <div className="button-wrapper">
              <a onClick={submitForm}>Submit</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PortalForms;
