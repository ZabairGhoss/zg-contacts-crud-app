import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllContacts,
  deleteContact,
} from "../redux/reducers/contactSlice";

import { Link } from "react-router-dom";

const Home = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-end my-5">
          <Link to={"/add"} className="btn btn-outline-dark fw-bold">
            Add Contact
          </Link>
        </div>
        <div className="col-md-8 mx-auto">
          <table className="table table-hover text-center">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">Sr. #</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.contact}</td>
                  <td>
                    <Link
                      to={`/update/${contact.id}`}
                      className="btn btn-small btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-small btn-danger"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
