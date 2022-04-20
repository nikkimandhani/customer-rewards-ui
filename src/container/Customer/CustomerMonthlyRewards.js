import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './TableSummary.module.css';

//Object for Months as requirement specified only 3 Months
const Months = {
    1 : 'January',
    2 : 'February',
    3 : 'March'
}
class ConnectedCustomerMonthlyRewardsDetails extends Component {
    state = {
        transactionDetails : []
    }

   async componentDidMount() {
        let transaction = await this.props.transactions.filter(transaction => transaction.customerId === this.props.rowData.customerId)
        this.setState({transactionDetails: transaction[0].rewardsByMonth})
    }

    render(){
       const rewardDetails =  this.state.transactionDetails.map(transaction => {
                return (
                    <tr>
                        <td style={{textTransform: 'capitalize' }}>{Months[transaction.month]}</td>
                        <td> {transaction.rewards} </td>
                    </tr>
                )
            })

        return(
            <>
                {
                    <>
                        <h3 style={{color:'#5e1d8a'}}><strong> Reward Monthly Details:</strong></h3>
                        <table>
                            <tr>
                                <th> Month</th>
                                <th> Reward</th>
                            </tr>
                            {rewardDetails}
                        </table>
                    </>
                }

            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        transactions: state.transactions,
    };
}

const CustomerMonthlyRewards = connect(mapStateToProps)(ConnectedCustomerMonthlyRewardsDetails)

export default CustomerMonthlyRewards;
