import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import CustomerRewards from "../container/Customer/CustomerRewards";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({});

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerRewards', () => {
    it('should show customer rewards', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CustomerRewards />
            </Provider>);
        const title = wrapper.find('.Title').text()
        expect(title).toEqual('CUSTOMER REWARDS');
    });
});
