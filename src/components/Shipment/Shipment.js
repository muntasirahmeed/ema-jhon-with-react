import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [user] = useAuthState(auth);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
    const handleShipping = (event) => {
        event.preventDefault();
        const shippingInfo = { name, email, address, phone }
        console.log(shippingInfo);
    }

  return (
    <div className="container2">
      <div>
        <h1 className="title">Shipment</h1>
        <form onSubmit={handleShipping}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleName} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddress} type="text" name="address" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input onBlur={handlePhone} type="number" name="phone" required />
          </div>
          <input className="submit-button" type="submit" value="Ready to Ship" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
