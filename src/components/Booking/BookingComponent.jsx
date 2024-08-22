"use client";
import { useReducer, useState } from "react";

// create initialState (object with data and errorStatus keys)
const initialState = {
  data: {
    FullName: "",
    Postcode: "",
    House: "",
    City: "",
    PhoneNumber: "",
    EmailAddress: "",
  },
  Status: "Editing",
};

// Reducer function which has data and action, and different cases of action.type
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      // Make a copy of current state
      let newState = { ...state };

      // grab the data out of your action's payload
      const fieldName = action.payload.name;
      const newFieldValue = action.payload.value;

      // update the newState with the changed data
      newState.data[fieldName] = newFieldValue;
      // return new state 🔥🚀

      return newState;

    // dont forget your breaks - important

    case "Submit_Started":
      return {
        ...state,
        Status: "Submitting",
      };
    case "Error":
      return {
        ...state,
        Status: "Error",
      };
    case "Form_Success":
      return {
        ...state,
        Status: "Success",
      };

    default:
      return state;
  }
}

export default function BookingComponent() {
  // New "mocked up" state object that combines that stuff
  const [hasErrors, setHasErrors] = useState(false);

  // passing reducer function and initialState into useReducer. That gives the Reducer function the initalState as 'state'
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  const handleChangeEvent = (event) => {
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: event.target.name, // name of field
        value: event.target.value, // new value
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reload
    dispatch({
      type: "Submit_Started",
    });

    setTimeout(() => {
      if (
        !state.data.FullName ||
        !state.data.Postcode ||
        !state.data.House ||
        !state.data.City ||
        !state.data.PhoneNumber ||
        !state.data.EmailAddress
      ) {
        dispatch({
          type: "Error",
        });
        return;
      }
      dispatch({
        type: "Form_Success",
      });
    }, 5000);

    // setHasErrors(false);
    // console.log("Form submitted:", state);
    // Here you would typically send the data to an API
  };

  return (
    <section>
      <article>
        {/* If button clicked, status is Submitting, hide form and show 'Submitting'*/}
      {state.Status === 'Success' ? 'Thank you for your booking' :
        <form onSubmit={handleSubmit}>
          <h1>Design Booking</h1>
          <fieldset>
            <legend>Personal Information:</legend>
            <div>
              <div>
                <label>
                  Full name:
                  <input
                    type="text"
                    name="FullName"
                    value={state.data.FullName}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                  {state.Status === 'Error' && !state.data.FullName ? <p>Please include your full name</p> : ''}
                </label>
              </div>
              <div>
                <label>
                  Postcode:
                  <input
                    type="text"
                    name="Postcode"
                    value={state.data.PostCode}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                  {state.Status === 'Error' && !state.data.Postcode ? <p>England, Wales, Scotland booking only</p> : ''}
                </label>
              </div>
            </div>
            <div>
              <label>
                House/Flat Number and Street Name:
                <input
                  type="text"
                  name="House"
                  value={state.data.House}
                  onChange={(event) => {
                    handleChangeEvent(event);
                  }}
                ></input>
                {state.Status === 'Error' && !state.data.House ? <p>Please include a full address</p> : ''}
              </label>
            </div>
            <div>
              <label>
                City:
                <input
                  type="text"
                  name="City"
                  value={state.data.City}
                  onChange={(event) => {
                    handleChangeEvent(event);
                  }}
                ></input>
                {state.Status === 'Error' && !state.data.City ? <p>Please include a full address</p> : ''}
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend> Contact Information:</legend>
            <div>
              <div>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="PhoneNumber"
                    value={state.data.PhoneNumber}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                  {state.Status === 'Error' && !state.data.PhoneNumber ? <p>Please include a phone number</p> : ''}
                </label>
              </div>
              <div>
                <label>
                  Email Address:
                  <input
                    type="text"
                    name="EmailAddress"
                    value={state.data.EmailAddress}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                  {state.Status === 'Error' && !state.data.EmailAddress ? <p>Please include a email address</p> : ''}
                </label>
              </div>
            </div>
          </fieldset>
          {hasErrors && (
            <p style={{ color: "red" }}>Please fill in all fields.</p>
          )}
          {state.Status === 'Submitting' ? 'Submitting...' :
          <button type="submit">Request Design Consultation</button>
          }
        </form> }
        {/* after 5 secs, if status is 'Success' - hide form and show 'Success'*/}
      </article>
    </section>
  );
}
