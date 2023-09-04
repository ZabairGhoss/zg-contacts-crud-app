import React from "react";

const AddContact = () => {
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
              />
            </div>

            <div className="form-group my-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-control"
              />
            </div>

            <div className="form-group my-3">
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="Phone Number"
                className="form-control"
              />
            </div>

            <div className="form-group my-3">
              <input
                type="submit"
                value={"Add Contact"}
                className="btn btn-dark w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
