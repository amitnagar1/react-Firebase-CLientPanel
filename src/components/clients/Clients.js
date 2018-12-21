import React, { Component } from "react";
import { Link } from "react-router-dom";
class Clients extends Component {
  render() {
    const clients = [
      {
        id: "12345",
        firstName: "Ashton",
        lastName: "Kutcher",
        email: "ashkutchr@gmail.com",
        phone: "144-444-5151",
        balance: "200"
      },
      {
        id: "414141",
        firstName: "Amit",
        lastName: "Nagar",
        email: "amitnagar19@gmail.com",
        phone: "144-444-5151",
        balance: "150"
      },
      {
        id: "111222",
        firstName: "Anita",
        lastName: "Nagar",
        email: "anitanagar@gmail.com",
        phone: "144-444-5151",
        balance: "250"
      }
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary 
                            btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default Clients;
