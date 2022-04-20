import React, {Component } from 'react';
import { connect } from 'react-redux';
import {getTransactions} from '../../redux/action/CustomerAction';
import Table from '../../component/UI/Table/Table';
import classes from './CustomerRewards.module.css';
import { CUSTOMER_REWARDS_COLUMNS } from '../../component/UI/Table/Utils';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Modal from '../../component/UI/Modal/Modal';
import CustomerMonthlyRewards from './CustomerMonthlyRewards';
import {ToastsContainer, ToastsStore} from "react-toasts";

function mapDispatchToProps(dispatch) {
    return {
        getTransactions: ()=> dispatch(getTransactions()),
    };
}

 class ConnectedCustomerList extends Component {
    state = {
      viewMonthlyRewards: false,
      dataFound: false,
      rowData: {},
      transactions:[]
    }
    componentDidMount() {
      this.props.getTransactions()
       .then(()=>{this.setState({transactions: this.props.transactions, dataFound: true})})
       .catch(error=> ToastsStore.error(error, 2000));
    }

    viewMonthlyRewardsHandler = ( rowData) => {
        this.setState({viewMonthlyRewards: true, rowData: rowData})
    }

    modalClosedHandler =()=>{
      this.setState({
           viewMonthlyRewards: false
      })
    }

    render(){
        return(
       <>
        <ToastsContainer position='top_center' store={ToastsStore} />
        <p className={classes.Title}>CUSTOMER REWARDS</p>
        <div className="min-h-screen bg-gray-100 text-gray-900">
           <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
             { this.state.viewMonthlyRewards ?
                     <Modal show={this.state.viewMonthlyRewards} modalClosed={this.modalClosedHandler}>
                        <CustomerMonthlyRewards rowData={this.state.rowData}/>
                     </Modal>: null}
              <>
              <div className="mt-4">
                <Table columns={[...CUSTOMER_REWARDS_COLUMNS,
                 {
                  Header: "Actions",
                  accessor: "actions",
                  Cell: (props) => {
                    const rowData = props.row.original;
                          return (
                              <div className={classes.ActionItems}>
                                  <p className={classes.ViewDetails} onClick={()=>this.viewMonthlyRewardsHandler(rowData)}> View Monthly Rewards
                                      <BsBoxArrowUpRight className={classes.ViewDetailsIcon}/></p>
                              </div>
                          );
                  },
                }]} data={this.state.transactions} dataFound={this.state.dataFound}/>
              </div>
              </>
           </main>
           </div>
       </>
         )
        }
}

function mapStateToProps(state) {
    return {
        transactions: state.transactions,
    };
}

const CustomerList = connect(
    mapStateToProps,
  mapDispatchToProps
)(ConnectedCustomerList)

export default CustomerList;
