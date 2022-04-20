
export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const CUSTOMER_REWARDS_COLUMNS =  [
   {
     Header: "Customer Name",
     accessor: "customerName",
    },
    {
        Header: "Total Rewards",
        accessor: "totalRewards",
    },
]
