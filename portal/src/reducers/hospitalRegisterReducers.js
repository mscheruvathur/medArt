import {
    HOSPITAL_REGISTER_REQUEST,
    HOSPITAL_REGISTER_SUCCESS,
    HOSPITAL_REGISTER_FAIL
} from '../constance/hospitalRegisterConstance'




export const hospitalRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case HOSPITAL_REGISTER_REQUEST:
            return {loading:true }

        case HOSPITAL_REGISTER_SUCCESS:
            return {loading:false, userInfo: action.payload}

        case HOSPITAL_REGISTER_FAIL:
            return { loading:false, error: action.payload }
        


        default:
            return state
}
}