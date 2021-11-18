import React from "react";
import { useHistory, Link, BrowserRouter } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import Registerform from "./Registerform";


const Loginform = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert("Login Successful\n"+JSON.stringify(values));
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Please enter your username";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address.";
        }

        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Please enter your password";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
      
        return errors;
      }}
  >
    
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <div className="Appheader">
      <br /><br/>Login<br /><br /></div>
      <br />
      <br />
<input
  id="email"
  name="email"
  type="text"
  placeholder="Username or Email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.email && touched.email && "error"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
)}
<input
  id="password"
  name="password"
  type="password"
  placeholder="Password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.password && touched.password && "error"}
/>
{errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}

      <button className="submitButton" type="submit" >
        Submit
      </button><br /><br />
      <center>Forgot your password? <a href="https://help.myspace.com/hc/en-us/articles/201956084-Forgot-Password">Click here to reset it</a></center><br /><br />
      <div className="regbutton">
      <center>
       <a href="/Registerform"><button type="button">New Registers </button></a>
       {/* <BrowserRouter>
       <Link to="/src/Registerform" className="btn btn-primary">New Registers</Link></BrowserRouter>  */}
        </center>
        </div>
    </form>
      );
    }}
  </Formik>
);

export default Loginform;