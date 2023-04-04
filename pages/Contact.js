import React, { useState } from "react";
import { FaTimes, FaUndoAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import firebase from "@components/utils/firebase";
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendContact();
    setFormData({
      name: "",
      email: "",
      type: "",
      position: "",
      additionaldetails: "",
    });
  };

  const resetForm = () => {
    window.location.reload(false);
  };

  const sendContact = () => {
    const sendformRef = firebase.database().ref("/messages");
    const sendform = {
      name: formData.name,
      email: formData.email,
      type: formData.type,
      position: formData.position,
      additionaldetails: formData.additionaldetails,
      time: new Date(),
    };
    if (
      sendform.name &&
      sendform.email &&
      sendform.type &&
      sendform.position &&
      sendform.additionaldetails != undefined
    ) {
      console.log("I can send the form");
      sendformRef.push(sendform);
      //console.log(sendform.name, sendform.email, sendform.type, sendform.position, sendform.additionaldetails)
    } else {
      console.log("I can't send the form");
    }
  }; //sendformRef.push(sendform);
  return (
    <>
      <div className="container level-right">
        <a
          onClick={resetForm}
          className="button is-white is-medium tooltip is-tooltip-bottom luxury btn-2"
          data-tooltip="Reset"
        >
          {/*onClick="document.getElementById('contactform').reset();" */}
          <span className="icon is-small">
            <IconContext.Provider value={{ size: 24, className: "x-icons" }}>
              <FaUndoAlt />
            </IconContext.Provider>
          </span>
        </a>
        <Link
          href={"/"}
          className="button is-white is-medium tooltip is-tooltip-bottom luxury btn-2"
        >
          <span className="icon is-small">
            <IconContext.Provider value={{ size: 24, className: "x-icons" }}>
              <FaTimes />
            </IconContext.Provider>
          </span>
        </Link>
      </div>
      <div className="react-contact">
        <div className="is-form-page">
          <div className="is-white">
            <div className="container">
              <form
                id="contactform"
                acceptCharset="UTF-8"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="columns is-centered">
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control is-expanded">
                        <input
                          className="input is-large is-active"
                          id="name"
                          name="name"
                          type="text"
                          required=""
                          onChange={updateInput}
                          value={formData.name || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control is-expanded">
                        <input
                          className="input is-large is-active"
                          id="email"
                          name="email"
                          type="email"
                          required=""
                          onChange={updateInput}
                          value={formData.email || ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Type</label>
                      <div className="control is-expanded">
                        <div className="select is-dark is-fullwidth">
                          <select
                            className="is-large"
                            id="type"
                            name="type"
                            required=""
                            onChange={updateInput}
                            value={formData.type || ""}
                          >
                            <option
                              value="0"
                              disabled=""
                              defaultValue
                              hidden=""
                            >
                              {" "}
                            </option>
                            <option>Graphic Design</option>
                            <option>Web Design//Web Development</option>
                            <option>Game Development</option>
                            <option>Job Opportunity</option>
                            <option>None of the above</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Position</label>
                      <div className="control is-expanded">
                        <div className="select is-dark is-fullwidth">
                          <select
                            className="is-large"
                            id="position"
                            name="position"
                            required=""
                            onChange={updateInput}
                            value={formData.position || ""}
                          >
                            <option
                              value="0"
                              disabled=""
                              defaultValue
                              hidden=""
                            >
                              {" "}
                            </option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Independent Contractor</option>
                            <option>None of the above</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column">
                    <div className="field">
                      <label className="label">Additional details</label>
                      <div className="control">
                        <textarea
                          className="textarea is-large is-active"
                          id="additionaldetails"
                          name="additionaldetails"
                          type="text"
                          rows="5"
                          required=""
                          onChange={updateInput}
                          value={formData.additionaldetails || ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="is-hidden" id="alert">
                    <h2 className="subtitle is-primary is-size-5-desktop">
                      Your message has been sent.
                    </h2>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-one-third">
                    <div className="field">
                      <div className="control">
                        <button
                          className="button is-white is-outlined is-medium is-fullwidth is-rounded luxury btn-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
