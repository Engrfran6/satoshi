import {useEffect, useState} from 'react';
import {MiniSpinner} from '../components/elements/spinners';
import {setPackageList} from '../redux/user-slice';
import {Search} from '../components/searh/Search';
import {useDispatch} from 'react-redux';
import {packageService} from '../services/package-services';
import AWN from 'awesome-notifications';
import {AddButtons} from '../components/elements/AddButtons';
import toastr from 'toastr';
import {CreateEditPackageForm} from '../formModals/packageForms/CreateEditPackageForm';

export const PackageList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  let notifier = new AWN();

  const fetchData = () => {
    packageService.getPackages().then((data) => {
      const {docs} = data;
      setdata(docs);
      dispatch(setPackageList(docs));
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createPackage = () => {
    setSelectedUser({});
    setIsEdit(false);
  };

  const updatePackage = (plans) => {
    setSelectedUser(plans);
    setIsEdit(true);
  };

  const deletePackage = (packageId) => {
    console.log('invest ID', packageId);
    let onOk = async () => {
      const response = await packageService.deletePackage(packageId);

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        const deletedPackage = data?.filter((plans) => plans?._id !== packageId);
        toastr.success(response.message);

        setdata(deletedPackage);
      }

      setLoading(false);
    };

    let onCancel = () => {
      return;
    };

    notifier.confirm('Are you sure ?', onOk, onCancel, {
      labels: {
        confirm: 'Delete package ?',
      },
    });
  };

  const handleLoadingChange = (isLoading) => {
    setLoading(isLoading);
  };

  const handleDataChange = (data) => {
    setdata(data);
  };

  const handleSearchText = (text) => {
    setLoading(true);
    fetchData();
  };

  const listItems = data?.map((plans, key) => {
    const PackageId = plans._id;
    let number = key + 1;
    return (
      <tr key={key}>
        <td>{number++}</td>
        <td>{plans.name}</td>
        <td>{plans.amount}</td>
        <td>{plans.dailyRoi}</td>
        <td>{plans.profitRate}</td>
        <td>{plans.lossRate}</td>
        <td>{plans.dailyLoss}</td>
        <td>{plans.minDeposit}</td>
        <td>{plans.maxDeposit}</td>
        <td>{plans.totalPercentageReturn}</td>
        <td>{plans.duration}</td>
        <td>
          <div className="flex align-items-center list-user-action">
            <a
              onClick={() => updatePackage(plans)}
              style={{marginRight: '5px'}}
              className="btn btn-sm btn-icon btn-warning rounded"
              data-bs-toggle="modal"
              data-bs-target="#editBundle"
              title
              data-bs-original-title="Edit"
              href="#">
              <span className="btn-inner">
                <svg
                  className="icon-20"
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1655 4.60254L19.7315 9.16854"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              onClick={() => deletePackage(PackageId)}
              style={{marginRight: '5px'}}
              className="btn btn-sm btn-icon btn-danger rounded"
              data-bs-toggle="tooltip"
              data-placement="top"
              title
              data-bs-original-title="Delete"
              href="#">
              <span className="btn-inner">
                <svg
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor">
                  <path
                    d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.708 6.23975H3.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-5 gap-3">
                  <div className="d-flex flex-column">
                    <h3>Packages</h3>
                  </div>
                  <Search
                    loading={loading}
                    setLoading={handleLoadingChange}
                    setData={handleDataChange}
                    searchTextHandler={handleSearchText}
                    model={'accounts'}
                  />
                  <a
                    onClick={() => createPackage()}
                    style={{marginRight: '5px'}}
                    data-bs-toggle="modal"
                    data-bs-target="#editBundle"
                    title
                    data-bs-original-title="Add"
                    href="#">
                    <AddButtons title="Create Package" />
                  </a>
                </div>
              </div>
              {loading ? (
                <MiniSpinner />
              ) : (
                <div className="card-body">
                  <div className="table-responsive border rounded">
                    <table
                      id="user-list-table"
                      className="table table-striped"
                      role="grid"
                      data-toggle="data-table">
                      <thead>
                        <tr className="ligth">
                          <th>#</th>
                          <th>Package Name</th>
                          <th>Amount</th>
                          <th>Daily ROI</th>
                          <th>Profit Rate%</th>
                          <th>Loss Rate%</th>
                          <th>Daily Loss</th>
                          <th>Min Deposit</th>
                          <th>Max Deposit</th>
                          <th>Total% Returns</th>
                          <th>Duration</th>
                          <td>Actions</td>
                        </tr>
                      </thead>
                      <tbody>{listItems}</tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <div id="showMoreResults"> </div>
          </div>
        </div>
      </div>
      <CreateEditPackageForm
        isEdit={!!selectedUser}
        selectedUser={selectedUser}
        isEditTrue={isEdit}
        fetchData={fetchData}
      />
    </>
  );
};
