import React,{useState} from "react";
import "./PortalForms.css";
import { TextField } from "@material-ui/core";
import APIService from "./APIServices";

function PortalForms() {
    const [portalform,setPortalForm] = useState({
      title: '',
      portal: '',
      hospital_name: '',
      geo_location: '',
      hospital_emial:'',
      hospital_phone: '',
      hospital_district: '',
      hospital_state: '',
      hospital_address1: '',
      hospital_address2: '',
      first_name: '',
      last_name: '',
      applicant_emial: '',
      applicant_phone: '',
      applicant_state: '',
      applicant_district: '',
      applicant_address1: '',
      applicant_address2: ''
    })



  const submitForm = () => {
    APIService.PortalRegistration(portalform)
    .then(resp => setPortalForm(resp))
    .catch(error => console.log(error))
    alert('your registration hasbeen succesfully compleated')
  }
  return (
    <div className="portal-main-wrapper">
      <div className="portal-sub-wrapper">
        <div className="form-wrapper-left">
          <div>
            <h4>Hospital Details</h4>
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.title}
              onChange={e => setPortalForm({ ...portalform, title : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="Title"
              variant="outlined"
            />
            <TextField
             value={portalform.portal}
             onChange={e => setPortalForm({ ...portalform, portal : e.target.value})}
              style={{ marginLeft: "20px" }}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="Portal"
              variant="outlined"
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
             value={portalform.hospital_name}
             onChange={e => setPortalForm({ ...portalform, hospital_name : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Hospital Name"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.geo_location}
              onChange={e => setPortalForm({ ...portalform, geo_location : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Geo Location"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.hospital_state}
              onChange={e => setPortalForm({ ...portalform, hospital_state : e.target.value})}            
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="State"
              variant="outlined"
            />
            <TextField
              style={{ marginLeft: "20px" }}
              value={portalform.hospital_district}
              onChange={e => setPortalForm({ ...portalform, hospital_district : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="District"
              variant="outlined"
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.hospital_address1}
              onChange={e => setPortalForm({ ...portalform, hospital_address1 : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Address"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.hospital_address2}
              onChange={e => setPortalForm({ ...portalform, hospital_address2 : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Address"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.hospital_emial}
              onChange={e => setPortalForm({ ...portalform, hospital_emial : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="Email"
              variant="outlined"
            />
            <TextField
              style={{ marginLeft: "20px" }}
              value={portalform.hospital_phone}
              onChange={e => setPortalForm({ ...portalform, hospital_phone : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              label="Phone"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-wrapper-right">
          <div>
            <h4>Applicant Details</h4>
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.first_name}
              onChange={e => setPortalForm({ ...portalform, first_name : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="first name"
            />
            <TextField
              style={{ marginLeft: "20px" }}
              value={portalform.last_name}
              onChange={e => setPortalForm({ ...portalform, last_name : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="last name"
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.applicant_emial}
              onChange={e => setPortalForm({ ...portalform, applicant_emial : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Email"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.applicant_phone}
              onChange={e => setPortalForm({ ...portalform, applicant_phone : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Phone"
              style={{ width: "480px" }}
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
              value={portalform.applicant_state}
              onChange={e => setPortalForm({ ...portalform, applicant_state : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="State"
            />
            <TextField
              style={{ marginLeft: "20px" }}
              value={portalform.applicant_district}
              onChange={e => setPortalForm({ ...portalform, applicant_district : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="District"
            />
          </div>
          <div className="filter-input-wrapper">
            <TextField
               value={portalform.applicant_address1}
               onChange={e => setPortalForm({ ...portalform, applicant_address1 : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Address"
            />
            <TextField
              style={{ marginLeft: "20px" }}
              value={portalform.applicant_address2}
              onChange={e => setPortalForm({ ...portalform, applicant_address2 : e.target.value})}
              id="outlined-margin-dense"
              helperText="Search here."
              margin="dense"
              variant="outlined"
              label="Address"
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
