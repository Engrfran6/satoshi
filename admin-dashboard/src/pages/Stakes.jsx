
import { useEffect, useState } from "react";
import { stakeService } from "../services/stake-service";
import { formatAmount } from "../helpers/currency";
import { MiniSpinner } from "../components/elements/spinners";
const moment = require('moment');

export const Stakes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    stakeService.getStakes()
      .then((res) => {
        const { data: { docs } } = res
        setdata(docs)
        setIsLoading(false)
      })
  }, []);

  const getDecay = (value) => {
    if (value === true) {
      return 'True'
    }
    return 'False'
  }
  console.log('stake --------------', data)
  return (
    <>
    {
        isLoading ? <MiniSpinner/> :
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Stakes</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive border rounded">
                <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                  <thead>
                    <tr className="ligth">
                      <th>#</th>
                      <th>Name</th>
                      <th>Coins</th>
                      <th>Starting Stake</th>
                      <th>Tolerance</th>
                      <th>Decay</th>
                      <th>Rounds</th>
                      <th>Profit</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((stake, key) => {
                    
                        let number = key+1
                        return (
                          <tr key={key}>
                          <td>
                            {number}
                          </td>
                          <td>{stake?.account?.name}</td>
                          <td>{stake.coins - stake.stakes}</td>
                          <td>{stake.startingStake}</td>
                          <td>{stake.tolernce}</td>
                          <td>{getDecay(stake.decay)}</td>
                          <td>{stake.cycle}</td>
                          <td>{stake.progit}</td>
                          <td>{moment(stake.createdAt).format('MMM D, YYYY')}</td>
                        </tr>
                        )
                      })
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
        
  )
}