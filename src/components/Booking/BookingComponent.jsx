"use client";
import { useReducer } from "react";
import styles from "./styleBooking.module.css";

// create initialState (object with data and Status keys)
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

// Reducer function defines how state should change based on dispatched actions. It returns the new state
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      // Make a copy of current state
      let newState = { ...state };

      // potential error handling - try catch block

      // grab the data out of your action's payload
      const fieldName = action.payload.name;
      const newFieldValue = action.payload.value;

      // update the newState with the changed data
      newState.data[fieldName] = newFieldValue;
      // return new state 🔥🚀
      return newState;

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
    case "Form_Full":
      return {
        ...state,
        Status: "Editing"
      };
    default:
      return state;
  }
}

export default function BookingComponent() {

  // passing reducer function and initialState into useReducer. That gives the Reducer function the initalState as 'state'
  // returns array (tuple) of length 2
  const [state, dispatch] = useReducer(reducer, initialState);
 
  // Array destructuring explanation: 
  // const reducerResult = useReducer(reducer, initialState);
  // const state = reducerResult[0];
  // const dispatch = reducerResult[1];

  console.log("state", state);

  // Called whenever input field changes, dispatches an action
  const handleChangeEvent = (event) => {
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: event.target.name, // name of field
        value: event.target.value, // new value
      },
    });

    // if (state.Status === 'Error' && 
    //     (state.data.FullName &&
    //     state.data.Postcode &&
    //     state.data.House &&
    //     state.data.City &&
    //     state.data.PhoneNumber &&
    //     state.data.EmailAddress)
    // ) {
    //   dispatch({
    //     type: "Editing",
    //   });
    // }
  }
    
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

    // Here you would typically send the data to an API
  };

  // Value of all input fields are bound to state.data so reflect current state
  return (
    <section>
      <article>
        {/* If button clicked, status is Submitting, hide form and show 'Submitting'*/}
      {state.Status === 'Success' ? <div className={styles.successMessage}>Thank you for your booking</div> :
        <form onSubmit={handleSubmit}>
          <article className={styles.headingBox}>
            <h1 className={styles.bookingHeading}>Design Booking</h1>
          </article>
          <fieldset className={styles.personalFieldset}>
            <legend>Personal Information:</legend>
            <div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Full name:
                  <input
                    type="text"
                    name="FullName"
                    value={state.data.FullName}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.FullName ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.FullName ? <p className={styles.errorMessages}>Please include your full name</p> : ''}
                </label>
              </div>
              <div className={styles.formField}>
                <label>
                  Postcode:
                  <input
                    type="text"
                    name="Postcode"
                    value={state.data.PostCode}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.Postcode ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.Postcode ? <p className={styles.errorMessages}>England, Wales, Scotland booking only</p> : ''}
                </label>
              </div>  
              <div className={styles.formField}>
                <label>
                  House/Flat Number and Street Name:
                  <input
                    type="text"
                    name="House"
                    value={state.data.House}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.House ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.House ? <p className={styles.errorMessages}>Please include a full address</p> : ''}
                </label>
              </div>
              <div className={styles.formField}>
                <label>
                  City:
                  <input
                    type="text"
                    name="City"
                    value={state.data.City}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.City ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.City ? <p className={styles.errorMessages}>Please include a full address</p> : ''}
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset className={styles.contactFieldset}>
            <legend> Contact Information:</legend>
            <div>
              <div className={styles.formField}>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="PhoneNumber"
                    value={state.data.PhoneNumber}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.PhoneNumber ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.PhoneNumber ? <p className={styles.errorMessages}>Please include a phone number</p> : ''}
                </label>
              </div>
              <div className={styles.formField}>
                <label>
                  Email Address:
                  <input
                    type="text"
                    name="EmailAddress"
                    value={state.data.EmailAddress}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                    className={`${state.Status === 'Error' && !state.data.EmailAddress ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.EmailAddress ? <p className={styles.errorMessages}>Please include an email address</p> : ''}
                </label>
              </div>
            </div>
          </fieldset>
          {state.Status === 'Submitting' ? <div className={styles.submitting}>Submitting...</div> :
          // state.Status === 'Error' ? <div className={styles.submitting}>Please fix above errors..</div> :
          <button className={styles.button} type="submit">Request Design Consultation</button>
          }
        </form> }
        {/* after 5 secs, if status is 'Success' - hide form and show 'Success'*/}
      </article>
    </section>
  );
}
