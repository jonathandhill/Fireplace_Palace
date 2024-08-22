"use client";
import { useReducer } from "react";
import styles from "./styleBooking.module.css";


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
  // New "mocked up" state object that combines that stuff


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

    

    // setHasErrors(false);
    // console.log("Form submitted:", state);
    // Here you would typically send the data to an API
  };

  return (
    <section>
      <article>
        {/* If button clicked, status is Submitting, hide form and show 'Submitting'*/}
      {state.Status === 'Success' ? <div className={styles.successMessage}>Thank you for your booking</div> :
        <form onSubmit={handleSubmit}>
          <article className={styles.headingBox}>
            <h1 className={styles.bookingHeading}>Design Booking</h1>
          </article>
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
                    className={`${state.Status === 'Error' && !state.data.FullName ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.FullName ? <p className={styles.errorMessages}>Please include your full name</p> : ''}
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
                    className={`${state.Status === 'Error' && !state.data.Postcode ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.Postcode ? <p className={styles.errorMessages}>England, Wales, Scotland booking only</p> : ''}
                </label>
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
                    className={`${state.Status === 'Error' && !state.data.House ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.House ? <p className={styles.errorMessages}>Please include a full address</p> : ''}
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
                    className={`${state.Status === 'Error' && !state.data.PhoneNumber ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.PhoneNumber ? <p className={styles.errorMessages}>Please include a phone number</p> : ''}
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
                    className={`${state.Status === 'Error' && !state.data.EmailAddress ? styles.errorInput : ''}`}
                  ></input>
                  {state.Status === 'Error' && !state.data.EmailAddress ? <p className={styles.errorMessages}>Please include a email address</p> : ''}
                </label>
              </div>
            </div>
          </fieldset>
          {/* {hasErrors && (
            <p style={{ color: "red" }}>Please fill in all fields.</p>
          )} */}
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
