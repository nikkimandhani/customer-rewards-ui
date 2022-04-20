import { GET_CUSTOMER_REWARD_DATA} from '../constant/ActionType';

const initialState = {
    transactions: []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_CUSTOMER_REWARD_DATA:
            return{
                ...state, transactions:action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;