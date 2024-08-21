"use client";
import { useReducer, useState } from "react";
const initialState = {
  data: {
    fullName: "",
  },
  errorStatus: false,
};
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

    case "":

    default:
      return state;
  }
}
export default function BookingComponent() {
  // New "mocked up" state object that combines that stuff

  const [hasErrors, setHasErrors] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

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

    // Check for any validation errors
    // if (Object.values(formInput).some((field) => field === "")) {
    //   setHasErrors(true);
    //   console.log("Form has errors, cannot submit.");
    //   return;
    // }

    setHasErrors(false);
    console.log("Form submitted:", state);
    // Here you would typically send the data to an API
  };

  return (
    <section>
      <article>
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
                    name="fullName"
                    value={state.data.fullName}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                </label>
              </div>
              <div>//next field</div>
            </div>
          </fieldset>

          <fieldset>
            <legend> Contact Information:</legend>
            <div></div>
          </fieldset>
          {hasErrors && (
            <p style={{ color: "red" }}>Please fill in all fields.</p>
          )}
          <button type="submit">Request Design Consultation</button>
        </form>
      </article>
    </section>
  );
}
