import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  selectAllContacts,
  updateContact,
} from "../redux/reducers/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateContact = () => {
  const contacts = useSelector(selectAllContacts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const checkEmail = contacts?.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts?.find((contact) => {
      return contact.contact === number;
    });

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already exists!");
    } else if (checkNumber) {
      return toast.error("This Number already exists!");
    } else {
      dispatch(updateContact({ id, name, email, number }));
      toast.success("Contact updated Successfull!");
      setName("");
      setEmail("");
      setNumber("");
      history("/");
    }
  };

  useEffect(() => {
    if (contacts) {
      const existingContact = contacts.find((contact) => contact.id === id);
      setName(existingContact?.name);
      setEmail(existingContact?.email);
      setNumber(existingContact?.contact);
    }
  }, [contacts, id]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center ">Update Contact {id}</h1>
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
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <input
                type="submit"
                value={"Update Contact"}
                className="btn btn-dark"
                onClick={(e) => handleUpdate(e)}
              />

              <Link to={"/"} className="btn btn-danger ms-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
