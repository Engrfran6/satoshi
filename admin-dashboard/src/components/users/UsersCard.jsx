import { useState } from "react";
import { DropDown } from "../elements/DropDown"

export const UsersCard = () => {
  const [total, setTotal] = useState(0);

  const handleDataFromDropDown = (data) => {
    setTotal(data.length)
  };
  
  return (
    <div className="col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2 align-items-center">
                <div className="d-flex align-items-center">
                <i class="fas fa-user"></i>
                  <h6 className="mb-0 ms-2">Users</h6>
                </div>
                <DropDown dataToComponent={ handleDataFromDropDown } model={'account'} select={"name createdAt"} />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>{ total }</h3>
                  {/* <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">LTC/USDT</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
