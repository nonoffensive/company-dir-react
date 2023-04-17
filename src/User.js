import { useState, createRef } from "react";
import { concatSearchString } from "./utils";

const User = (props) => {
  const [editUser, setEditUser] = useState(false);

  const inputFirst = createRef(null);
  const inputLast = createRef(null);
  const inputEmail = createRef(null);
  const inputAddress = createRef(null);
  const inputCity = createRef(null);
  const inputState = createRef(null);
  const inputPostcode = createRef(null);
  const inputCountry = createRef(null);
  const inputPhone = createRef(null);
  const inputCell = createRef(null);

  const onEdit = () => {
    setEditUser(true);
  };

  const onSave = () => {
    props.user.first = inputFirst.current.value;
    props.user.last = inputLast.current.value;
    props.user.email = inputEmail.current.value;
    props.user.street = inputAddress.current.value;
    props.user.city = inputCity.current.value;
    props.user.state = inputState.current.value;
    props.user.postcode = inputPostcode.current.value;
    props.user.country = inputCountry.current.value;
    props.user.phone = inputPhone.current.value;
    props.user.cell = inputCell.current.value;
    props.user.searchString = concatSearchString(props.user);
    setEditUser(false);
  };

  const onCancel = () => {
    inputFirst.current.value = props.user.first;
    inputLast.current.value = props.user.last;
    inputEmail.current.value = props.user.email;
    inputAddress.current.value = props.user.street;
    inputCity.current.value = props.user.city;
    inputState.current.value = props.user.state;
    inputPostcode.current.value = props.user.postcode;
    inputCountry.current.value = props.user.country;
    inputPhone.current.value = props.user.phone;
    inputCell.current.value = props.user.cell;
    setEditUser(false);
  };

  return (
    <div className="card">
      <div className={!editUser ? "hidden" : "editform"}>
        <input
          placeholder="First Name"
          ref={inputFirst}
          defaultValue={props.user.first}
        />
        <input
          placeholder="Last Name"
          ref={inputLast}
          defaultValue={props.user.last}
        />
        <input
          placeholder="Email Address"
          type="email"
          ref={inputEmail}
          defaultValue={props.user.email}
        />
        <input
          placeholder="Address"
          ref={inputAddress}
          defaultValue={props.user.street}
        />
        <input
          placeholder="City"
          ref={inputCity}
          defaultValue={props.user.city}
        />
        <input
          placeholder="State"
          ref={inputState}
          defaultValue={props.user.state}
        />
        <input
          placeholder="Postal Code"
          ref={inputPostcode}
          defaultValue={props.user.postcode}
        />
        <input
          placeholder="Country"
          ref={inputCountry}
          defaultValue={props.user.country}
        />
        <input
          placeholder="Phone"
          ref={inputPhone}
          defaultValue={props.user.phone}
        />
        <input
          placeholder="Cell Phone"
          ref={inputCell}
          defaultValue={props.user.cell}
        />
        <button onClick={onSave}>Save Changes</button>
        <button onClick={onCancel}>Discard Changes</button>
      </div>
      <div className={editUser ? "hidden" : "profile"}>
        <button className="edit" onClick={onEdit}>
          edit
        </button>
        <div className="portrait">
          <img
            src={props.user.picture}
            alt="{props.user.first} {props.user.last}"
          />
        </div>
        <div>
          <h2>
            {props.user.first} {props.user.last}
          </h2>
          <h4>{props.user.email}</h4>
          <p>
            {props.user.street}
            <br />
            {props.user.city}, {props.user.state} {props.user.postcode}
          </p>
          <p>{props.user.country}</p>
        </div>
        <div className="phone">
          <span role="img" aria-label="phone">
            📞
          </span>{" "}
          {props.user.phone}
        </div>
        <div className="cell">
          <span role="img" aria-label="cellphone">
            📱
          </span>{" "}
          {props.user.cell}
        </div>
      </div>
    </div>
  );
};

export default User;
