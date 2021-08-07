import axios from 'axios'
import {
    HOSPITAL_REGISTER_REQUEST,
    HOSPITAL_REGISTER_SUCCESS,
    HOSPITAL_REGISTER_FAIL
} from '../constance/hospitalRegisterConstance'


export const hRegister = (hospitalname, hospitalemail, hospitalphone, geolocation,
    hospitalstate, hospitaldistrict, hospitaladdress, hospitalcity,
    applicantname, applicantemail, applicantphone, applicantstate,
    applicantaddress, applicantaddress2, applicantdistrict, applicantpincode) => async (dispatch) => {
    try{
        dispatch({
             type: HOSPITAL_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/hospitals/register/',
            {'hospital_name':hospitalname,'hospital_email':hospitalemail, 'hospital_phone': hospitalphone,
            'geo_location':geolocation, 'hospital_state':hospitalstate, 'hospital_district':hospitaldistrict,
            'hospitaladdress':hospitaladdress, 'hospital_city':hospitalcity, 'applicant_name':applicantname,
            'applicant_email':applicantemail, 'applicant_phone':applicantphone, 'applicant_state':applicantstate,
            'applicant_address':applicantaddress, 'applicant_address2':applicantaddress2,
            'applicant_district':applicantdistrict, 'applicant_pincode':applicantpincode,
        },
            config,
        )
        dispatch({
            type:HOSPITAL_REGISTER_SUCCESS,
            payload:data
        })

        localStorage.setItem('hospitalInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:HOSPITAL_REGISTER_FAIL,
            payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}