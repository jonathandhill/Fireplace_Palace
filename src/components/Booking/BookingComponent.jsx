"use client";
import { useState } from "react";

export default function BookingComponent() {
  const [formInput, setFormInput] = useState("");

  function handleChangeEvent(event) {
    // console.log(formInput);

    if (event.target.name == "fullName") {
      setFormInput(event.target.value);
      console.log(formInput);
    }
    // if (event.target.name == "pincode") {
    //   setFormInput(event.target.value);
    // }
  }
  return (
    <section>
      <article>
        <form>
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
                    value={formInput}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                </label>
              </div>
              <div>
                <label>
                  Postcode:
                  <input type="text" name="Postcode"></input>
                </label>
              </div>
              <div>
                <label>
                  House/Flat Number and Street Name:
                  <input type="text" name="House"></input>
                </label>
              </div>
              <div>
                <label>
                  City:
                  <input type="text" name="City"></input>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend> Contact Information:</legend>
            <div>
              <div>
                <label>
                  Phone Number:
                  <input type="text" name="Phone Number"></input>
                </label>
              </div>
              <div>
                <label>
                  Email Adress:
                  <input type="text" name="Email Adress"></input>
                </label>
              </div>
            </div>
          </fieldset>
          <button>Request Design Consultation</button>
        </form>
      </article>
    </section>
  );
}
