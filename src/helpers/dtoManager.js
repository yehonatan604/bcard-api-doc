import userLoginDto from "../data/dtos/User/user-login-dto";
import userDto from "../data/dtos/User/user-dto";
import cardDto from "../data/dtos/Card/card-dto";
import cardChangeBizDto from "../data/dtos/Card/card-changeBiz-dto";

const dtoManager = (endpointName) => {
    switch (endpointName) {
        case 'Login':
            return userLoginDto();
        case 'Register':
        case 'Update User':
            return userDto();
        case 'Create new Card':
        case 'Update Card':
            return cardDto();
        case "Patch Cards's Business Number":
            return cardChangeBizDto();
        default: return null;
    }
}

export default dtoManager;