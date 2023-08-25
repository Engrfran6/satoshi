import { useEffect, useState } from "react";
import { transactionService } from "../../services/transaction-service";
import { formatAmount } from "../../helpers/currency";
import { MiniSpinner } from "../../components/elements/spinners";
const moment = require('moment');

export const RecentTransactions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    transactionService.getTransactions()
      .then((res) => {
        const { data: { docs } } = res
        const last5 = docs.filter((tran) => tran.status === 'success').slice(0, 5)
        setdata(last5)
        setLoading(false)
    })
  }

  const handleSort = (field) => {
    if (sortedField === field) {
      setAscending(!ascending);
    } else {
      setSortedField(field);
      setAscending(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortedField];
    const bValue = b[sortedField];
    if (sortedField === 'createdAt') {
      if (moment(aValue).isBefore(moment(bValue))) {
        return ascending ? -1 : 1;
      }
      if (moment(aValue).isAfter(moment(bValue))) {
        return ascending ? 1 : -1;
      }
      return 0;
    }
    if (sortedField === 'status') {
      const statusValues = { success: 1, attempted: 2 };
      return ascending ? statusValues[aValue] - statusValues[bValue] : statusValues[bValue] - statusValues[aValue];
    }
    
    const comparison = a[sortedField] - b[sortedField];
    return ascending ? comparison : -comparison;
  });

  const renderData = sortedField ? sortedData : data;

  const formatStatus = (status) => {
    if (status === 'success') {
      return 'badge bg-success'
    }

    if (status === 'failed') {
      return 'badge bg-danger'
    }

    if (status === 'attempted') {
      return 'badge bg-secondary'
    }
  }

  const transItems = renderData.map((trans, key) => {
    return (
      <tr key={key}>
      <td>{formatAmount(trans.amount)}</td>
      <td>{trans?.account?.name}</td>
      <td>{trans?.reference}</td>
      <td>{moment(trans?.createdAt).format('MMM D, YYYY, HH:mm:ss')}</td>
      <td><span style={{fontSize: '12px'}} className={`${formatStatus(trans?.status)}`}>{trans?.status}</span></td>
    </tr>
    )
  });

  return (
    <div className="col-sm-12">
          <div className="card">
          <div className="" style={{marginTop: '25px', marginLeft: '20px'}}>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-5 gap-3">
                  <div className="d-flex flex-column">
                    <h3>Recent Transactions</h3>
                  </div>
                </div>
              </div>
              { loading ? <MiniSpinner /> : 
                (
                  <>
                    <div className="card-body">
                      <div className="table-responsive border rounded">
                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                          <thead>
                            <tr>
                              <th onClick={() => handleSort('amount')}> Amount 
                                &nbsp; <i class="fas fa-sort"></i>
                              </th>
                              <th> Name </th>
                              <th>Reference</th>
                              <th  onClick={() => handleSort('createdAt')}>Date  &nbsp; <i class="fas fa-sort"></i></th>
                              <th onClick={() => handleSort('status')}>Status &nbsp; <i class="fas fa-sort"></i></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              transItems
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )
              }
          </div>
        </div>
  )
}