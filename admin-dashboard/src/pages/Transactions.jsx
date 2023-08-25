
import { useEffect, useState } from "react";
import { transactionService } from "../services/transaction-service";
import { formatAmount } from "../helpers/currency";
import { MiniSpinner } from "../components/elements/spinners";
import { Search } from "../components/searh/Search";
import { InfinitScroll } from "../components/InfinitScroll";
const moment = require('moment');

export const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const fetchData = () => {
    transactionService.getTransactions()
      .then((res) => {
        const { data: { docs } } = res
        setdata(docs)
        setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

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
    let number = key+1
    return (
      <tr key={key}>
      <td className="text-center">
        {number}
      </td>
      <td>{formatAmount(trans.amount)}</td>
      <td>{trans?.account?.name}</td>
      <td>{trans?.email}</td>
      <td>{trans?.reference}</td>
      <td>{trans?.gateway}</td>
      <td>{moment(trans?.createdAt).format('MMM D, YYYY, HH:mm:ss')}</td>
      <td><span style={{fontSize: '12px'}} className={`${formatStatus(trans?.status)}`}>{trans?.status}</span></td>
    </tr>
    )
  });

  const handleLoadingChange = (isLoading) => {
    setLoading(isLoading)
  };

  const handleDataChange = (data) => {
    setdata(data);
  };

  const newData = (data) => {
    setdata((prevData) => [...prevData, ...data]);
  };

  const handleSearchText = () => {
    setLoading(true)
    fetchData()
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
          <div className="card-header d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-5 gap-3">
                  <div className="d-flex flex-column">
                    <h3>Transactions</h3>
                  </div>
                  <Search
                    loading={loading} 
                    setLoading={ handleLoadingChange }
                    setData={ handleDataChange }
                    searchTextHandler={ handleSearchText }
                    model={'transactions'}
                  />
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
                              <th>#</th>
                              <th onClick={() => handleSort('amount')}> Amount 
                                &nbsp; <i class="fas fa-sort"></i>
                              </th>
                              <th> Name </th>
                              <th>Email</th>
                              <th>Reference</th>
                              <th>GateWay</th>
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
                    <InfinitScroll
                        limit={'20'}
                        dataHandler={ newData }
                        path={'transaction'}
                    />
                  </>
                )
              }
          </div>
        </div>
      </div>     
    </>
        
  )
}