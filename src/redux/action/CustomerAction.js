import { GET_CUSTOMER_REWARD_DATA} from '../constant/ActionType';
import axios from '../../axios';

export function getTransactions() {
    return function(dispatch){
        return axios.get('/transactions').then((response)=>{
            dispatch({ type: GET_CUSTOMER_REWARD_DATA, payload: response.data });
        }).catch(error=>{
            throw "Internal Server Error"
        })
    }
};

