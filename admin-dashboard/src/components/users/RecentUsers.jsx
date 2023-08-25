import { useEffect, useState } from "react";
import { userService } from "../../services/userService";
import { MiniSpinner } from "../../components/elements/spinners";

export const RecentUsers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);

  const fetchData = () => {
    userService.getUsers().then((data) => {
      const {
        data: { docs },
      } = data;
      const last5 = docs.slice(0, 5)
      setdata(last5);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  const listItems = data.map((user, key) => {
    let number = key + 1;
    return (
      <tr key={key}>
        <td>{number++}</td>
        <td>{user.name}</td>
        <td>{user.phone.number}</td>
        <td>{user.email}</td>
        <td>{user?.country?.name}</td>
        <td>
          <span className="badge bg-primary">{user.status}</span>
        </td>
        <td>{12546}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="card">
              <div className="" style={{marginTop: '25px', marginLeft: '20px'}}>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-5 gap-3">
                  <div className="d-flex flex-column">
                    <h3>Recent Users</h3>
                  </div>
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
                          <th>Country</th>
                          <th>Status</th>
                          <th>Coins</th>
                        </tr>
                      </thead>
                      <tbody>{listItems}</tbody>
                    </table>
                  </div>
                </div>
                )
              }
            </div>
    </>
  )
}