import React, { useState } from "react";
const Form = (props) => {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });
  const [record, setRecord] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecord([...record, newRecord]);
    setUserRegistration({ email: "", password: "" });
  };
  return (
    <div className="form-box">
      <button className="close-btn" onClick={() => props.closeModal(false)}>
        ❌
      </button>
      <form className="formm  backgroundModal" onSubmit={handleSubmit}>
        <h1 className="loginhere">login here</h1>
        <label className="label-email">Email Address</label>
        <br />
        <input
          onChange={handleInput}
          value={userRegistration.email}
          className="input-email"
          type="email"
          name="email"
          placeholder="enter your email"
        />
        <br />
        <label className="label-password">Password</label>
        <br />
        <input
          onChange={handleInput}
          value={userRegistration.password}
          className="input-password"
          type="password"
          name="password"
          placeholder="enter your password"
        />
        <br />
        <div className="checkbox">
          <div className="check">
            <input type="checkbox" />
            <label>remember me</label>
          </div>
          <div className="forgot">
            <a href=" forgot password?">Forgot password</a>
          </div>
        </div>
        <br />
        <button className="btn-login">Log in</button>
        <br />
        <span className="span-account">
          Dont have an acccount yet?{" "}
          <a className="sign-up" href="sign up now">
            sign up now
          </a>
        </span>
      </form>
      <>
        {record.map((curElem) => {
          return (
            <div key={curElem.id}>
              <p>userEmail :{curElem.email}</p>
              <p>userPassword :{curElem.password}</p>
            </div>
          );
        })}
      </>
    </div>
  );
};
export default Form;
