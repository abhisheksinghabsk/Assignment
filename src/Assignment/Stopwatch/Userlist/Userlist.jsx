import React, { useState, useEffect } from "react";
import "./Userlist.css";
const API = "https://jsonplaceholder.typicode.com/users";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("Ascending");

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  const orderChange = (e) => {
    console.log("order:", e.target.value);
    setOrder(e.target.value);
  };

  const handleChange = (e) => {
    let [...copyUsers] = users;
    if (e.target.value === "address" && order === "Ascending Order") {
      let sortedUserByAddress = copyUsers.sort((a, b) => {
        return a.address.city
          .toLowerCase()
          .localeCompare(b.address.city.toLowerCase());
      });
      console.log("sortedUserByAddress", sortedUserByAddress);

      setUsers(sortedUserByAddress);
    } else {
      let sortedUserByAddress = copyUsers.sort((a, b) => {
        return b.address.city
          .toLowerCase()
          .localeCompare(a.address.city.toLowerCase());
      });
      console.log("sortedUserByAddress", sortedUserByAddress);

      setUsers(sortedUserByAddress);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="inputfieldorder">
        <label htmlFor="sortby" className="sort">
          Order:
        </label>
        <select id="order" onChange={orderChange}>
          <option> select</option>
          <option>Ascending Order</option>
          <option>Descending Order</option>
        </select>
      </div>

      <div className="inputfield">
        <label htmlFor="sortbyfield" className="sort">
          Sort by:
        </label>
        <select id="field" onChange={handleChange}>
          <option> select</option>
          <option>id</option>
          <option>name</option>
          <option>email</option>
          <option>address</option>
        </select>
      </div>
    </div>
  );
}
