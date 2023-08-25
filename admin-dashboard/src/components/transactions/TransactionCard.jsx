import { useState } from "react";
import { DropDown } from "../elements/DropDown"
import { formatAmount } from "../../helpers/currency";

export const TransactionCard = () => {
  const [total, setTotal] = useState(0);

  const handleDataFromDropDown = (data) => {
    const transaction = data.filter((tran) => tran.status === 'success')
      .reduce((a,b) => a + b.amount, 0)
    setTotal(transaction)
  };

  return (
    <div className="col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2 align-items-center" >
                <div className="d-flex align-items-center">
                <i class="fa-solid fa-naira-sign"></i>
                  <h6 className="mb-0 ms-2">Transactions</h6>
                </div>
                <DropDown dataToComponent={ handleDataFromDropDown } model={'transaction'} select={"amount status"}/>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>{ formatAmount(total) }</h3>
                  {/* <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">LTC/USDT</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}