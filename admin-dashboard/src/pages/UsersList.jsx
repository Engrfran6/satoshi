import { useEffect, useState } from "react";
import { MiniSpinner } from "../components/elements/spinners";
import { userService } from "../services/userService";

import { Search } from "../components/searh/Search";

export const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);

  const fetchData = () => {
    userService.getUsers().then((data) => {
      const { docs } = data;
      setdata(docs);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  const handleLoadingChange = (isLoading) => {
    setLoading(isLoading)
  };

  const handleDataChange = (data) => {
    setdata(data);
  };

  const handleSearchText = (text) => {
    setLoading(true)
    fetchData()
  };


  const listItems = data.map((user, key) => {
    let number = key + 1;
    return (
      <tr key={key}>
        <td>{number++}</td>
        <td>{user.fullName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.email}</td>
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
                    <h3>Users</h3>
                  </div>
                  <Search 
                    loading={loading} 
                    setLoading={ handleLoadingChange }
                    setData={ handleDataChange }
                    searchTextHandler={ handleSearchText }
                    model={'accounts'}
                  />
                </div>
              </div>
              { loading ? <MiniSpinner />: 
                (
                <div className="card-body">
                  <div className="table-responsive border rounded">
                    <table
                      id="user-list-table"
                      className="table table-striped"
                      role="grid"
                      data-toggle="data-table"
                    >
                      <thead>
                        <tr className="ligth">
                          <th>#</th>
                          <th>Name</th>
                          <th>Contact</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>{listItems}</tbody>
                    </table>
                  </div>
                </div>
                )
              }
            </div>
            <div id="showMoreResults"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
