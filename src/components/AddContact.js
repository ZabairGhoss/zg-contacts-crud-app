import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactAdded,
  selectAllContacts,
} from "../redux/reducers/contactSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts?.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts?.find((contact) => {
      return parseInt(contact.contact) === contact && contact;
    });

    if (!email || !contact || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already exists!");
    } else if (checkNumber) {
      return toast.error("This Number already exists!");
    } else {
      dispatch(contactAdded(name, email, contact));
      setName("");
      setEmail("");
      setContact("");
      history("/");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group my-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="Phone Number"
                className="form-control"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <input
                type="submit"
                value={"Add Contact"}
                className="btn btn-dark w-100"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
