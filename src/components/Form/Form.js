import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import { SignUpSchema } from "./Schemas.js";

const initialValues = {
  name:"",
  email:"",
  phone:"",
  birthdate:"",
  gender:"",
  address:"",
  address_line_2:"",
  country:"",
  city:"",
  region:"",
  postalcode:"",
};

const Form = () => {
  const {values, errors, touched,option ,handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values,action) => {
    console.log("🚀 ~ file: Form.js:25 ~ Form ~ values:", values)
      action.resetForm();

      alert("From is successfully submitted");
    },
  });
  console.log("🚀 ~ file: Form.js:32 ~ Form ~ errors:", errors)

  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required="" name="name" 
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
              ) : null}
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required="" name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
              ) : null}
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                required=""
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.phone && touched.phone ? (
              <p className="form-error">{errors.phone}</p>
              ) : null}
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required="" name="birthdate" 
                value={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* { errors.birthdate && touched.birthdate ? (
              <p className="form-error">{errors.birthdate}</p>
              ) : null} */}
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <label htmlFor="check-male">male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" value="female" onChange={handleChange}/>
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" value="other" onChange={handleChange}/>
                <label htmlFor="check-other">prefer not to say</label>
              </div>
              { errors.gender && touched.gender ? (
              <p className="form-error">{errors.gender}</p>
              ) : null}
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required="" name="address" 
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}/>
              { errors.address  && touched.address ? (
              <p className="form-error">{errors.address }</p>
              ) : null}
            <input
              type="text"
              placeholder="Enter street address line 2"
              required=""
              name="address_line_2"
              value={values.address_line_2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="column">
              <div className="select-box">
                <select name="country" value={option} onChange={handleChange}>
                  <option hidden="">Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
                { errors.country && touched.country ? (
              <p className="form-error">{errors.country}</p>
              ) : null}
              </div>
              <input type="text" placeholder="Enter your city" required="" name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.city && touched.city ? (
              <p className="form-error">{errors.city}</p>
              ) : null}
            </div>
            <div className="column">
              <input type="text" placeholder="Enter your region" required="" name="region"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.region && touched.region ? (
              <p className="form-error">{errors.region}</p>
              ) : null}
              <input
                type="number"
                placeholder="Enter postal code"
                required=""
                name="postalcode"
                value={values.postalcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.postalcode && touched.postalcode ? (
              <p className="form-error">{errors.postalcode}</p>
              ) : null}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export {Form};
